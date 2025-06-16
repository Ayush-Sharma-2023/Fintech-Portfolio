"use client";
import React from "react";
import Charts from "./Components/charts";
import Sidebar from "./Components/Watchlist";
import Desc from "./Components/Desc";
import IPOCard from "./Components/IPO";
import OHLC from "./Components/leftSidebar";
import NiftyValueCard from "./Components/NiftyData";
import Bull from "../public/images/bull.png"
import Bear from "../public/images/bear.png"

export default function Page() {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      {/* Sidebar stays fixed */}
      <Sidebar />

      <main className=" grid py-4">
        <div className="flex gap-10 ml-20">
          {/* <OHLC /> */}
          {/* <img src="/images/bull.png" alt="Bull" className="w-64 h-60 mt-16" /> */}
          <img src={Bull.src} alt="Bull" className="w-64 h-60 mt-16" />

          <Charts />
          {/* <img src="/images/bear.png" alt="Bear" className="w-64 h-64 mt-16" /> */}
          <img src={Bear.src} alt="Bear" className="w-64 h-64 mt-16" />

          <IPOCard />
        </div>
        <div className="min-w-7xl mx-20 mt-4 ">
          <Desc />
        </div>
      </main>
    </div>
  );
}
