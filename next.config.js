const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: debug ? '' : '/polkadot-edgeware-voting/',
  experimental: {
    basePath: '/polkadot-edgeware-voting',
  },
};
