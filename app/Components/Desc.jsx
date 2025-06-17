"use client";
import React, { useState } from "react";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Tools from "./Tools";

// const Tools = () => <p>This is tools</p>;

export default function Desc() {
  const [activeTab, setActiveTab] = useState("Tools");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Orders":
        return <Orders />;
      case "Positions":
        return <Positions />;
      case "Holdings":
        return <Holdings />;
      case "Tools":
        return <Tools />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 h-[50rem] mt-16 bg-gray-900 text-gray-100 rounded-lg shadow-xl">
      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-700 mb-6 items-center">

        {["Orders", "Positions", "Holdings"].map((tab) => (
          <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`py-4 px-4 font-medium border-b-2 transition-all ${
            activeTab === tab
            ? "border-blue-400 text-blue-400"
            : "border-transparent text-gray-400 hover:text-blue-300 hover:cursor-pointer"
          }`}
          >
            {tab}
          </button>
        ))}

        {/* Special Tools Button */}


        <button
          onClick={() => setActiveTab("Tools")}
          className={`ml-auto py-2  px-6 font-semibold rounded-full border-2 shadow-lg transition-all duration-300 mb-4 hover:cursor-pointer
            ${
              activeTab === "Tools"
              ? "border-blue-400 text-white bg-blue-900 "
              // : "border-blue-500 text-blue-300 hover:bg-blue-800 hover:text-white"
              : " border-none text-gray-400 hover:bg-blue-800 hover:text-white"
            }`}
            >
         Tools
        </button>
              </div>

      {/* Content */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-inner min-h-[300px]">
        {renderTabContent()}
      </div>
    </div>
  );
}
