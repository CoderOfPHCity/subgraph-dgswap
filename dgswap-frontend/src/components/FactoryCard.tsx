import React from "react";
import { Factory } from "@PaulElisha/subgraph-dgswap";

interface FactoryCardProps {
  factory: Factory;
}

export const FactoryCard: React.FC<FactoryCardProps> = ({ factory }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-lg font-semibold">Factory {factory.id.slice(0, 6)}...</h3>
      <p>Pool Count: <span className="font-mono">{factory.poolCount}</span></p>
      <p>Tx Count: <span className="font-mono">{factory.txCount}</span></p>
      <p>Total Volume USD: <span className="font-mono">${Number(factory.totalVolumeUSD).toLocaleString()}</span></p>
    </div>
  );
};