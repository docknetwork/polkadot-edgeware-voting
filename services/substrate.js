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

  async getProposals(callback) {
    if (!this.state.connected) {
      return this.connect()
        .then(() => this.getProposals(callback));
    }



  // TODO: turns out this is for subsrate democracy, we need to redo it for edgeware
  // once we are able to submit proposals through UI
  // see: https://polkadot.js.org/api/substrate/storage.html
  // The following sections contain Storage methods are part of the default Substrate runtime. On the api, these are exposed via api.query.<module>.<method>.
  // https://polkadot.js.org/apps/#/chainstate


    this.api.query.signaling.activeProposals((proposals) => {
      console.log(`active proposals`, proposals);
      console.log(proposals.toString());
    });

    this.api.query.signaling.inactiveProposals((proposals) => {
      console.log(`inactive proposals`, proposals);
      console.log(proposals.toString());
    });
  }

  async createProposal() {
    if (!this.state.connected) {
      return this.connect()
        .then(() => this.createProposal());
    }

    // (Advanced, development-only) add with an implied dev seed and hard derivation
    const alice = this.keyring.addFromUri('//Alice', { name: 'Alice' });
    console.log(`${alice.meta.name}: has address ${alice.address} with publicKey [${alice.publicKey}]`);
    console.log('pairs', this.keyring.getPairs())


    // Convert message, sign and then verify
    const message = stringToU8a('this is our message');
    const signature = alice.sign(message);
    const isValid = alice.verify(message, signature);

    // Log info
    console.log(`The signature ${u8aToHex(signature)}, is ${isValid ? '' : 'in'}valid`);




    // Get the current sudo key in the system
    const sudoKey = await this.api.query.sudo.key();
    console.log('sudoKey', sudoKey)

    // // Lookup from keyring (assuming we have added all, on --dev this would be `//Alice`)
    // const sudoPair = this.keyring.getPair(sudoKey);
    // console.log('sudoPair', sudoPair)

    // // Send the actual sudo transaction
    // const unsub = await this.api.tx.sudo
    //   .sudo(
    //     this.api.tx.balances.setBalance('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', 12345000000, 678000000)
    //   )
    //   .signAndSend(sudoPair, (result) => {
    //     console.log('result', result)
    //    });

    // TODO
    const title = 'proposal title';
    const contents = 'proposal contents';
    const outcomes = ['test'];
    const voteType = 0;
    const tallyType = 0;

    const transfer = this.api.tx.signaling.createProposal(title, contents, outcomes, voteType, tallyType);
    const unsubscribe = await transfer.signAndSend(alice, ({ events = [], status, type }) => {
      console.log('signAndSend event', events, status, type)
      if (type === 'Finalised') {
        console.log('Successful transfer '  + ' with hash ' + status.asFinalised.toHex());
      } else {
        console.log('Status of transfer: ' + type);
      }
      events.forEach(({ phase, event: { data, method, section } }) => {
        console.log(phase.toString() + ' : ' + section + '.' + method + ' ' + data.toString());
      });
    });

    // example log
    // makeExtrinsicCall: updated status :: {"events":[],"status":{"Ready":null}}
    // makeExtrinsicCall: updated status :: {"events":[{"phase":{"ApplyExtrinsic":1},"event":{"index":"0x0c00","data":[false]},"topics":[]},{"phase":{"ApplyExtrinsic":1},"event":{"index":"0x0000","data":[{"weight":0,"class":"operational","paysFee":false}]},"topics":[]}],"status":{"Finalized":"0xf22afbb7f121d3365166dc827cb94551d28232f6146015e50547870a6aaa5523"}}
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
