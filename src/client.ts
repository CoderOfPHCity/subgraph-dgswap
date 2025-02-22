import { GraphQLClient } from "graphql-request";
import { Factory, Bundle, Pool } from "./types";

export class DragonSwapSubgraphSDK {
  private client: GraphQLClient;

  constructor(endpoint: string) {
    this.client = new GraphQLClient(endpoint);
  }

  async getFactories(first: number = 5): Promise<Factory[]> {
    const query = `
      query GetFactories($first: Int!) {
        factories(first: $first) {
          id
          poolCount
          txCount
          totalVolumeUSD
        }
      }
    `;
    const result = await this.client.request<{ factories: Factory[] }>(query, { first });
    return result.factories;
  }

  async getBundles(first: number = 5): Promise<Bundle[]> {
    const query = `
      query GetBundles($first: Int!) {
        bundles(first: $first) {
          id
          ethPriceUSD
        }
      }
    `;
    const result = await this.client.request<{ bundles: Bundle[] }>(query, { first });
    return result.bundles;
  }

  async getPools(first: number = 5): Promise<Pool[]> {
    const query = `
      query GetPools($first: Int!) {
        pools(first: $first) {
          id
          token0
          token1
          fee
          tickSpacing
          blockNumber
          blockTimestamp
          transactionHash
        }
      }
    `;
    const result = await this.client.request<{ pools: Pool[] }>(query, { first });
    return result.pools;
  }
}