import React from "react";
import { useFactories } from "../hooks/useFactories";
import { FactoryCard } from "./FactoryCard";

export const FactoryList: React.FC = () => {
  const { factories, loading, error } = useFactories(5);

  if (loading) return <p className="text-center text-gray-400">Loading factories...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {factories.map((factory) => (
        <FactoryCard key={factory.id} factory={factory} />
      ))}
    </div>
  );
};