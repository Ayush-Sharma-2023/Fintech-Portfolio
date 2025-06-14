"use client";
import React from "react";
import Charts from "./Components/charts";
import Sidebar from "./Components/Watchlist";
import Desc from "./Components/Desc";
import IPOCard from "./Components/IPO";
import OHLC from "./Components/leftSidebar";
import NiftyValueCard from "./Components/NiftyData";

export default function Page() {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      {/* Sidebar stays fixed */}
      <Sidebar />

      <main className=" grid py-4">
        <div className="flex gap-2 mx-auto ">
          {/* <OHLC /> */}
          <Charts />
          <IPOCard/>
        </div>
        <div className="min-w-7xl mx-20 mt-4 ">
      <Desc />

        </div>
      </main>
    </div>
  );
}
