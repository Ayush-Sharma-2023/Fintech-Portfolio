"use client";
import React, { useState } from "react";
import Holdings from "./Holdings";
import Orders from "./Orders";

// Components
import Positions from "./Positions";
// const Orders = () => <p>📦 These are your Orders</p>;
// const Holdings = () => <p>💼 These are your Holdings</p>;


export default function Desc() {
  const [activeTab, setActiveTab] = useState("Orders");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Orders":
        return <Orders />;
      case "Positions":
        return <Positions />;
      case "Holdings":
        return <Holdings />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-[55rem] mx-auto h-[50rem] bg-gray-900 text-gray-100 rounded-lg shadow-xl">
      {/* <h1 className="text-2xl font-bold mb-6 text-white">📘 Description Panel</h1> */}

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-700 mb-6">
        {["Orders", "Positions", "Holdings"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 font-medium border-b-2 transition-all ${
              activeTab === tab
                ? "border-blue-400 text-blue-400"
                : "border-transparent text-gray-400 hover:text-blue-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-inner min-h-[300px]">
        {renderTabContent()}
      </div>
    </div>
  );
}
