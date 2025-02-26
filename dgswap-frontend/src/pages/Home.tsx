import React from "react";
import { FactoryList } from "../components/FactoryList";
import { Header } from "../components/Header";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <Header />
      <div className="max-w-5xl mx-auto mt-8">
        <FactoryList />
      </div>
    </div>
  );
};