import { DragonSwapSubgraphSDK } from "../src";

type SDKMethod<T> = () => Promise<T[]>;

async function testQuery<T>(
  sdk: DragonSwapSubgraphSDK,
  method: SDKMethod<T>,
  name: string,
) {
  try {
    const result = await method();
    console.log(`${name}:`, JSON.stringify(result, null, 2));
  } catch (error) {
    console.error(`Failed to fetch ${name}:`, error);
  }
}

async function testSDK() {
  // subgraph endpoint
  const endpoint = "https://gateway.thegraph.com/api/{api-key}/subgraphs/id/QmQzyMH4R9cm5BigV91YtETsYQoZ6dqYvDR1bmxVe3sXCr";
  const sdk = new DragonSwapSubgraphSDK(endpoint);

  await testQuery(sdk, () => sdk.getFactories(5), "Factories");
  await testQuery(sdk, () => sdk.getBundles(5), "Bundles");
  await testQuery(sdk, () => sdk.getPools(5), "Pools");
}

testSDK();
