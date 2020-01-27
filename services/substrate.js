import { ApiPromise, WsProvider } from '@polkadot/api';
import { Observable } from 'rxjs';

class SubstrateService {
  constructor() {
    this.onUpdateState = new Observable(observer => {
      this.onUpdateStateObserver = observer;
    });
  }

  async connect() {
    // Initialise the provider to connect to the local node
    const provider = new WsProvider('ws://127.0.0.1:9944');

    // TODO: check if unable to connect

    // Create the API and wait until ready
    const api = await ApiPromise.create({ provider });

    // Retrieve the chain & node information information via rpc calls
    const [chain, nodeName, nodeVersion] = await Promise.all([
      api.rpc.system.chain(),
      api.rpc.system.name(),
      api.rpc.system.version()
    ]);

    return this.setState({
      connected: true,
      chain,
      nodeName,
      nodeVersion,
    });
  }

  setState(value) {
    this.onUpdateStateObserver.next(value);
    return value;
  }
}

export default new SubstrateService();
