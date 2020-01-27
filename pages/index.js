import React, {useState, useEffect} from 'react';

const { ApiPromise, WsProvider } = require('@polkadot/api');

const Index = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setConnected] = useState(false);

  async function connect() {
    console.log('Connecting to RPC')
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

    console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);

    setConnected(true);
  }

  useEffect(() => {
    if (!isConnecting) {
      setIsConnecting(true);
      connect();
    }
  }, [isConnecting]);

  return (
    <p>
      Is Connecting: {isConnecting ? 'true' : 'false'}
      <br />
      Connected: {isConnected ? 'true' : 'false'}
    </p>
  );
};

export default Index;
