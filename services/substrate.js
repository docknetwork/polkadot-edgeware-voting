import { ApiPromise, WsProvider } from '@polkadot/api';
import { Observable } from 'rxjs';

import { IdentityTypes } from 'edgeware-node-types/dist/identity';
import { VotingTypes } from 'edgeware-node-types/dist/voting';
import { Balance2, TreasuryRewardTypes } from 'edgeware-node-types/dist/treasuryReward';

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
      console.log('still connecting, adding callback');
      return new Promise(resolve => {
        this.onConnectCallbacks.push(resolve);
      });
    }

    this.state.connecting = true;

    // Initialise the provider to connect to the local node
    const provider = new WsProvider(nodeAddress);

    // TODO: check if unable to connect

    // Create the API and wait until ready
    this.api = await ApiPromise.create({
      provider,
      types: {
        ...IdentityTypes,
        ...VotingTypes,
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

    console.log('getProposals', this.getProposals());

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

    return this.api.derive.democracy.proposals(callback);
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
