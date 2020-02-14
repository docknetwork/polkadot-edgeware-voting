# PolkadotJS / Edgeware Node Voting App

A working example application using the PolkadotJS API and the Edgeware Substrate Node with voting module. UI created with React/MaterialUI Framework.  

Currently the app only supports two development accounts, Alice and Bob. The node must be run in development mode to submit proposals successfully, but the application can be easily adapted to support accounts outside of development mode.

https://docknetwork.github.io/polkadot-edgeware-voting/

### Setup

Install Node and Yarn for the frontend, read section on starting a local edgeware node for chain setup. Run `yarn` command to setup packages.

Running the frontend in development mode:

```
yarn dev
```
Running the frontend in production mode:

```
yarn build
yarn start
```

### Starting a substrate node
Download and compile latest edgeware release: https://github.com/hicommonwealth/edgeware-node

Run in development mode:

```
./target/release/edgeware --base-path /tmp/alice --chain local --alice --port 30333 --ws-port 9944 --rpc-port 9933 --telemetry-url ws://telemetry.polkadot.io:1024 --validator --dev
```

### Notes
- UI Types for PolkadotJS apps: https://gist.github.com/drewstone/cee02c503107d06badbdc49bea35c526
- Run `yarn deploy` to deploy to GitHub pages
