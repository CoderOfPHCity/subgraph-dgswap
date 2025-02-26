import { useState, useEffect } from "react";
import { sdk } from "../lib/sdk";
import { Factory } from "@PaulElisha/subgraph-dgswap";

export const useFactories = (limit: number = 5) => {
  const [factories, setFactories] = useState<Factory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFactories = async () => {
      try {
        const data = await sdk.getFactories(limit);
        setFactories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch factories");
      } finally {
        setLoading(false);
      }
    };
    fetchFactories();
  }, [limit]);

  return { factories, loading, error };
};