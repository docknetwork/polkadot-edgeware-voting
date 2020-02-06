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

    console.log('VotingTypes', VotingTypes)
    console.log('SignalingTypes', SignalingTypes)

    // Retrieve the chain & node information information via rpc calls
    const [chain, nodeName, nodeVersion] = await Promise.all([
      this.api.rpc.system.chain(),
      this.api.rpc.system.name(),
      this.api.rpc.system.version()
    ]);

  // api.derive.democracy...
  // proposals: ƒ (...args)
  // referendumInfos: ƒ (...args)
  // referendums: ƒ (...args)
  // referendumVotesFor: ƒ (...args)
  // votes: ƒ (...args)

// propose: (...params) => creator(method(...params))
// second: (...params) => creator(method(...params))
// vote: (...params) => creator(method(...params))
// proxyVote: (...params) => creator(method(...params))
// emergencyCancel: (...params) => creator(method(...params))
// externalPropose: (...params) => creator(method(...params))
// externalProposeMajority: (...params) => creator(method(...params))
// externalProposeDefault: (...params) => creator(method(...params))
// fastTrack: (...params) => creator(method(...params))
// vetoExternal: (...params) => creator(method(...params))
// cancelReferendum: (...params) => creator(method(...params))
// cancelQueued: (...params) => creator(method(...params))
// setProxy: (...params) => creator(method(...params))
// resignProxy: (...params) => creator(method(...params))
// removeProxy: (...params) => creator(method(...params))
// delegate: (...params) => creator(method(...params))
// undelegate: (...params) => creator(method(...params))
// clearPublicProposals: (...params) => creator(method(...params))
// notePreimage: (...params) => creator(method(...params))
// noteImminentPreimage: (...params) => creator(method(...params))
// reapPreimage: (...params) => creator(method(...params))


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

  formatProposalList(proposals) {
    const result = [];
    proposals.forEach(proposal => {
      // TODO: load proposal data

      result.push({
        hash: proposal.toHex()
      });
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

  async getInactiveProposals(callback) {
    if (!this.state.connected) {
      return this.connect()
        .then(() => this.getInactiveProposals(callback));
    }

    this.api.query.signaling.inactiveProposals((proposals) => {
      callback(this.formatProposalList(proposals.toArray()));
    });
  }

  async createProposal(title, contents, outcomes, voteType, tallyType) {
    if (!this.state.connected) {
      return this.connect()
        .then(() => this.createProposal());
    }

    // (Advanced, development-only) add with an implied dev seed and hard derivation
    const alice = this.keyring.addFromUri('//Alice', { name: 'Alice' });
    console.log(`${alice.meta.name}: has address ${alice.address} with publicKey [${alice.publicKey}]`);
    // console.log('pairs', this.keyring.getPairs())

    const transfer = this.api.tx.signaling.createProposal(title, contents, outcomes, voteType, tallyType);
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

    // example log
    // Current status is Ready
    // substrate.js:196 Current status is Finalized
    // substrate.js:199 Transaction included at blockHash 0x5b04f95389862e94fac95390b1f925fe4a01ae51c9c849b3198c73a60ecdaa24
    // substrate.js:203 	' {"ApplyExtrinsic":1}: treasury.Deposit:: [2445987531568]
    // substrate.js:203 	' {"ApplyExtrinsic":1}: voting.VoteCreated:: [1,"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",{"binary":null}]
    // substrate.js:203 	' {"ApplyExtrinsic":1}: signaling.NewProposal:: ["5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY","0xd13c7862d41dc35f3c7960c588868730476c5bc847989f57d37dc0ad54e42cec"]
    // substrate.js:203 	' {"ApplyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":10000,"class":0,"paysFee":true}]
  }

  async subscribeNewHeads(callback) {
    if (!this.state.connected) {
      return this.connect()
        .then(() => this.subscribeNewHeads(callback));
    }

    // TODO: unsubscribe
    return await this.api.rpc.chain.subscribeNewHeads(callback);
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
