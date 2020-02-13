import {ApiPromise, WsProvider} from '@polkadot/api';
import {Keyring} from '@polkadot/api';
import {Observable} from 'rxjs';

import {IdentityTypes} from 'edgeware-node-types/dist/identity';
import {VotingTypes} from 'edgeware-node-types/dist/voting';
import {SignalingTypes} from 'edgeware-node-types/dist/signaling';
import {
  Balance2,
  TreasuryRewardTypes,
} from 'edgeware-node-types/dist/treasuryReward';

export const nodeAddress = 'ws://127.0.0.1:9944';

class SubstrateService {
  constructor() {
    this.state = {};
    this.onConnectCallbacks = [];
    this.onUpdateState = new Observable(observer => {
      this.onUpdateStateObserver = observer;
    });
  }

  async connect() {
    if (this.state.connected) {
      return;
    } else if (this.state.connecting) {
      return new Promise(resolve => {
        this.onConnectCallbacks.push(resolve);
      });
    }

    this.state.connecting = true;

    // Initialise the provider to connect to the local node
    const provider = new WsProvider(nodeAddress);
    const keyring = new Keyring({type: 'sr25519'});
    this.keyring = keyring;

    // Create the API and wait until ready
    this.api = await ApiPromise.create({
      provider,
      types: {
        ...IdentityTypes,
        ...VotingTypes,
        ...SignalingTypes,
        ...TreasuryRewardTypes,
        ...Balance2,
      },
    });

    // Retrieve the chain & node information information via rpc calls
    const [chain, nodeName, nodeVersion] = await Promise.all([
      this.api.rpc.system.chain(),
      this.api.rpc.system.name(),
      this.api.rpc.system.version(),
    ]);

    this.state.connected = true;
    this.state.connecting = false;

    // Add dev accounts
    this.account = this.keyring.addFromUri('//Alice', {name: 'Alice'});
    this.keyring.addFromUri('//Bob', {name: 'Bob'});

    // Loop on connect callbacks
    for (let i = 0; i < this.onConnectCallbacks.length; i++) {
      const callback = this.onConnectCallbacks[i];
      callback();
    }
    this.onConnectCallbacks = [];

    return this.setState({
      ...this.state,
      chain,
      nodeName,
      nodeVersion,
    });
  }

  async getVoteRecords(index) {
    if (!this.state.connected) {
      return this.connect().then(() => this.getVoteRecords(index));
    }

    return this.api.query.voting.voteRecords(index);
  }

  async getProposal(hash) {
    if (!hash) {
      return;
    }

    if (!this.state.connected) {
      return this.connect().then(() => this.getProposal(hash));
    }

    return this.api.query.signaling.proposalOf(hash);
  }

  async getActiveProposals(callback) {
    if (!this.state.connected) {
      return this.connect().then(() => this.getActiveProposals(callback));
    }

    this.api.query.signaling.activeProposals(proposals => {
      callback(this.formatProposalList(proposals.toArray()));
    });
  }

  async getCompletedProposals(callback) {
    if (!this.state.connected) {
      return this.connect().then(() => this.getCompletedProposals(callback));
    }

    this.api.query.signaling.completedProposals(proposals => {
      callback(this.formatProposalList(proposals.toArray()));
    });
  }

  async getInactiveProposals(callback) {
    if (!this.state.connected) {
      return this.connect().then(() => this.getInactiveProposals(callback));
    }

    this.api.query.signaling.inactiveProposals(proposals => {
      callback(this.formatProposalList(proposals.toArray()));
    });
  }

  async advanceProposal(hash, onComplete, onError) {
    if (!this.state.connected) {
      return this.connect().then(() => this.advanceProposal(hash));
    }

    return this.signAndSend(
      this.api.tx.signaling.advanceProposal(hash),
      onComplete,
      onError
    );
  }

  async createProposal(
    {title, contents, outcomes, voteType, tallyType},
    onComplete,
    onError
  ) {
    if (!this.state.connected) {
      return this.connect().then(() =>
        this.createProposal(title, contents, outcomes, voteType, tallyType)
      );
    }

    return this.signAndSend(
      this.api.tx.signaling.createProposal(
        title,
        contents,
        outcomes,
        voteType,
        tallyType
      ),
      onComplete,
      onError
    );
  }

  async vote(id, outcome, isCommitReveal, onComplete, onError) {
    const resultOutcome = new Uint8Array(
      outcome
        .substr(2, outcome.length)
        .match(/.{1,2}/g)
        .map(byte => parseInt(byte, 16))
    );
    if (isCommitReveal) {
      // not supported properly yet
      return this.signAndSend(
        this.api.tx.voting.commit(id, resultOutcome),
        onComplete,
        onError
      );
    } else {
      // general purpose vote
      const options = [resultOutcome]; // TODO: support multiple options
      return this.signAndSend(
        this.api.tx.voting.reveal(id, options, null),
        onComplete,
        onError
      );
    }
  }

  async signAndSend(transfer, onComplete, onError) {
    const unsub = await transfer
      .signAndSend(this.getAccount(), ({events = [], status}) => {
        console.log(`Current status is ${status.type}`, status);

        if (status.isFinalized) {
          console.log(
            `Transaction included at blockHash ${status.asFinalized}`
          );

          // Loop through Vec<EventRecord> to display all events
          events.forEach(({phase, event: {data, method, section}}) => {
            console.log(`\t' ${phase}: ${section}.${method}:: ${data}`);
          });

          if (onComplete) {
            onComplete(status, events);
          }
          unsub();
        }
      })
      .catch(error => {
        if (onError) {
          onError(error);
        }
      });
  }

  formatProposalList(proposals) {
    const result = [];
    proposals.forEach(proposal => {
      const baseData = proposal.toJSON();
      const proposalData = {
        hash: baseData[0],
      };

      this.getProposal(baseData[0]).then(data => {
        proposalData.data = data.toJSON();
      });

      result.push(proposalData);
    });
    return result;
  }

  getAccounts() {
    if (this.keyring && this.state && this.state.connected) {
      return this.keyring.getPairs();
    } else {
      return [];
    }
  }

  setAccount(account) {
    this.account = account;
  }

  getAccount() {
    if (this.account) {
      return this.account;
    }

    if (this.keyring) {
      const accounts = this.getAccounts();
      if (accounts.length) {
        return accounts[0];
      }
    }
  }

  connected() {
    return this.state.connected;
  }

  setState(value) {
    this.state = value;
    this.onUpdateStateObserver.next(value);
    return value;
  }
}

export default new SubstrateService();
