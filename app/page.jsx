"use client";
import React from "react";
import Charts from "./Components/charts";
import Sidebar from "./Components/Watchlist";
import Desc from "./Components/Desc";
import IPOCard from "./Components/IPO";
import BullImage from "./Components/Bull";
import BearImage from "./Components/Bear";

export default function Page() {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      {/* Sidebar stays fixed */}
      <Sidebar />

      <main className="grid py-4">
        <div className="flex gap-10 ml-20">
          {/* Bull & Bear Insight */}
          <BullImage />
          <Charts />
          <BearImage />
          <IPOCard />
        </div>

        <div className="min-w-7xl mx-20 mt-4">
          <Desc />
        </div>
      </main>
    </div>
  );
}
