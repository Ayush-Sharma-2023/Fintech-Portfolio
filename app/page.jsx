"use client";
import React from "react";
import Charts from "./Components/charts";
import Sidebar from "./Components/Sidebar";
import Desc from "./Components/Desc";
import OHLC from "./Components/SymbolInfo";
import NiftyValueCard from "./Components/NiftyData";

export default function Page() {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      {/* Sidebar stays fixed */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto p-4">
        <div className="flex items-start">
          <Charts />
          <OHLC />
        </div>
          {/* <NiftyValueCard/> */}
        <Desc />
      </main>
    </div>
  );
}
