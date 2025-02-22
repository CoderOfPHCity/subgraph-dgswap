# DragonSwap Subgraph SDK

A TypeScript SDK for querying DragonSwap data on the Kaia blockchain via a custom subgraph. This SDK provides easy access to factory, bundle, and pool data from the DragonSwap decentralized exchange (DEX) deployed on Kaia Mainnet.

## Features

- Query factory data (e.g., pool count, transaction count, total volume in USD).
- Retrieve bundle data (e.g., Kaia price in USD).
- Fetch pool details (e.g., token pairs, fees, tick spacing).
- Lightweight and built with `graphql-request` for efficient GraphQL queries.

## Installation

Install the SDK via clone the repository and install dependencies:

```bash
git clone https://github.com/PaulElisha/subgraph-dgswap
cd subgraph-dgswap
npm install
npm run build
```

## Usage

### Prerequisites

- A Node.js environment (v16+ recommended).
- Access to the DragonSwap subgraph endpoint (see [Subgraph](#subgraph)).

### Example

```typescript
import { DragonSwapSubgraphSDK } from "@yourusername/dragonswap-subgraph-sdk";

const endpoint = " "; //geneate a subgraphID on `https://api.studio.thegraph.com/query/<id>/dgswapSubgraphSDK/v0.0.1`
const sdk = new DragonSwapSubgraphSDK(endpoint);

// Fetch factory data
sdk.getFactories(5).then(factories => {
  console.log("Factories:", factories);
});

// Fetch bundle data
sdk.getBundles(5).then(bundles => {
  console.log("Bundles:", bundles);
});

// Fetch pool data
sdk.getPools(5).then(pools => {
  console.log("Pools:", pools);
});
```

## Subgraph

This SDK queries a custom subgraph deployed at `https://api.studio.thegraph.com/query/<id>/dgswapSubgraphSDK/v0.0.1`. It indexes data from the DragonSwap, starting at block `145316741`.


## Development

### Build

```bash
npm run build
```

### Test

Create a `dgswap.test` file and run:

```bash
ts-node dgswap.test
```

## License

MIT License. See [LICENSE](LICENSE) for details.

## Contact

- GitHub: [subgraph-dgswap](https://github.com/PaulElisha/subgraph-dgswap)
- Issues: [kaia issues](https://github.com/kaiachain/kaia-dapp-mono/issues/398)

---
Built with ❤️ for the Kaia blockchain community.
```
