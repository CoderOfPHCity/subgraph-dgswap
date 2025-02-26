import { DragonSwapSubgraphSDK } from "@PaulElisha/subgraph-dgswap";

const ENDPOINT = `https://gateway.thegraph.com/api/${import.meta.env.VITE_GRAPH_API_KEY}/subgraphs/id/2QEZxd4f115iTkW38MFmL6KZsq9uAYmCaFF2KLrZeSjK`;
export const sdk = new DragonSwapSubgraphSDK(ENDPOINT);