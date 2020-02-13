# setup

install node/yarn, run yarn install then yarn dev

# polkadot-voting-test

Development: yarn dev
Build: yarn build
Host: yarn start

# starting the node

download and compile latest edgeware release
https://github.com/hicommonwealth/edgeware-node

run in development mode:
```./target/release/edgeware --base-path /tmp/alice --chain local --alice --port 30333 --ws-port 9944 --rpc-port 9933 --telemetry-url ws://telemetry.polkadot.io:1024 --validator --dev```

edgeware types for polkadotjs apps: https://gist.github.com/drewstone/cee02c503107d06badbdc49bea35c526
