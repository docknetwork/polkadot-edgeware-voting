import { ApiPromise, WsProvider } from '@polkadot/api';
import { Observable } from 'rxjs';

import { IdentityTypes } from 'edgeware-node-types/dist/identity';
import { VotingTypes } from 'edgeware-node-types/dist/voting';
import { SignalingTypes } from 'edgeware-node-types/dist/signaling';
import { Balance2, TreasuryRewardTypes } from 'edgeware-node-types/dist/treasuryReward';

export const nodeAddress = 'ws://127.0.0.1:9944';

import { Keyring } from '@polkadot/api';
import { stringToU8a, u8aToHex } from '@polkadot/util';

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
      console.log('still connecting, adding callback');
      return new Promise(resolve => {
        this.onConnectCallbacks.push(resolve);
      });
    }

    this.state.connecting = true;

    // Initialise the provider to connect to the local node
    const provider = new WsProvider(nodeAddress);
    const keyring = new Keyring({ type: 'sr25519' });
    this.keyring = keyring;

    // TODO: check if unable to connect

    // Create the API and wait until ready
    this.api = await ApiPromise.create({
      provider,
      types: {
        ...IdentityTypes,
        ...VotingTypes,
        ...SignalingTypes,
        ...TreasuryRewardTypes,
        ...Balance2,
      }
    });

    // Retrieve the chain & node information information via rpc calls
    const [chain, nodeName, nodeVersion] = await Promise.all([
      this.api.rpc.system.chain(),
      this.api.rpc.system.name(),
      this.api.rpc.system.version()
    ]);

    this.state.connected = true;
    this.state.connecting = false;

    console.log('connected, callbacks:', this.onConnectCallbacks)

    // loop on connect callbacks
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
      return this.connect()
        .then(() => this.getVoteRecords(index));
    }

    return this.api.query.voting.voteRecords(index);
  }

  async getProposal(hash) {
    if (!hash) {
      return;
    }

    if (!this.state.connected) {
      return this.connect()
        .then(() => this.getProposal(hash));
    }

    return this.api.query.signaling.proposalOf(hash);
  }

  formatProposalList(proposals) {
    const result = [];
    proposals.forEach(proposal => {
      const baseData = proposal.toJSON();
      const proposalData = {
        hash: baseData[0],
        number: baseData[1]
      };


      this.getProposal(baseData[0])
        .then(data => {
          proposalData.data = data.toJSON();
          console.log('proposalData.data', proposalData.data)
        });

      result.push(proposalData);
    });
    return result;
  }

  async getActiveProposals(callback) {
    if (!this.state.connected) {
      return this.connect()
        .then(() => this.getActiveProposals(callback));
    }

    this.api.query.signaling.activeProposals((proposals) => {
      callback(this.formatProposalList(proposals.toArray()));
    });
  }

  async getCompletedProposals(callback) {
    if (!this.state.connected) {
      return this.connect()
        .then(() => this.getCompletedProposals(callback));
    }

    this.api.query.signaling.completedProposals((proposals) => {
      callback(this.formatProposalList(proposals.toArray()));
    });
  }

  async getInactiveProposals(callback) {
    if (!this.state.connected) {
      return this.connect()
        .then(() => this.getInactiveProposals(callback));
    }

    this.api.query.signaling.inactiveProposals((proposals) => {
      callback(this.formatProposalList(proposals.toArray()));
    });
  }

  async advanceProposal(hash) {
    if (!this.state.connected) {
      return this.connect()
        .then(() => this.advanceProposal(hash));
    }

    return this.signAndSend(this.api.tx.signaling.advanceProposal(hash));
  }

  async createProposal({ title, contents, outcomes, voteType, tallyType }) {
    if (!this.state.connected) {
      return this.connect()
        .then(() => this.createProposal(title, contents, outcomes, voteType, tallyType));
    }

    // (Advanced, development-only) add with an implied dev seed and hard derivation
    const alice = this.keyring.addFromUri('//Alice', { name: 'Alice' });
    console.log(`${alice.meta.name}: has address ${alice.address} with publicKey [${alice.publicKey}]`);
    // console.log('pairs', this.keyring.getPairs())

    return this.signAndSend(this.api.tx.signaling.createProposal(title, contents, outcomes, voteType, tallyType));
  }

  async subscribeNewHeads(callback) {
    if (!this.state.connected) {
      return this.connect()
        .then(() => this.subscribeNewHeads(callback));
    }

    // TODO: unsubscribe
    return await this.api.rpc.chain.subscribeNewHeads(callback);
  }

  async vote(id, outcome) {
    const resultOutcome = new Uint8Array(outcome.substr(2, outcome.length).match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
    console.log('vote', id,outcome, resultOutcome)
    return this.signAndSend(this.api.tx.voting.commit(id, resultOutcome));
  }

  async signAndSend(transfer) {
    // TODO: allow to set custom accounts
    const alice = this.keyring.addFromUri('//Alice', { name: 'Alice' });
    const unsub = await transfer.signAndSend(alice, ({ events = [], status }) => {
      console.log(`Current status is ${status.type}`);

      if (status.isFinalized) {
        console.log(`Transaction included at blockHash ${status.asFinalized}`);

        // Loop through Vec<EventRecord> to display all events
        events.forEach(({ phase, event: { data, method, section } }) => {
          console.log(`\t' ${phase}: ${section}.${method}:: ${data}`);
        });

        unsub();
      }
    });
  }

  getEvents(callback) {
    if (!this.state.connected) {
      return this.connect()
        .then(() => this.getEvents(callback));
    }

    // Subscribe to system events via storage
    this.api.query.system.events((events) => {
      console.log(`\nReceived ${events.length} events:`);
      events.forEach(callback);
    });
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
