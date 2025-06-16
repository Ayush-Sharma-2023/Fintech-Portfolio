"use client";
import React from "react";
import Charts from "./Components/charts";
import Sidebar from "./Components/Watchlist";
import Desc from "./Components/Desc";
import IPOCard from "./Components/IPO";
import OHLC from "./Components/leftSidebar";
import NiftyValueCard from "./Components/NiftyData";
import Bull from "../public/images/bull.png";
import Bear from "../public/images/bear.png";
import { useEffect, useState } from "react";

export default function Page() {
  const [activeAnimal, setActiveAnimal] = useState(null); // "bull", "bear", or null

  function Typewriter({ text, speed = 0 }) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed((prev) => prev + text.charAt(i));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, [text]);

    return <p className="whitespace-pre-line">{displayed}</p>;
  }

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      {/* Sidebar stays fixed */}
      <Sidebar />

      <main className=" grid py-4">
        <div className="flex gap-10 ml-20">
          {/* <OHLC /> */}
          {/* <img src="/images/bull.png" alt="Bull" className="w-64 h-60 mt-16" /> */}
          <img
            // src={Bull.src}
            alt="Bull"
            className="w-64 h-60 mt-16 hover:cursor-pointer hover:p-2"
            onClick={() => setActiveAnimal("bull")}
          />
          {activeAnimal === "bull" && (
            <div className="fixed top-20 left-[22rem] w-[850px] bg-gray-900 border border-gray-700 text-white p-4 rounded-xl shadow-lg z-50">
              <h2 className="text-green-400 text-xl font-bold mb-2">
                 Bull Market Insight
              </h2>
              <Typewriter
                text={`A  bull market refers to a sustained period in which asset prices — typically stocks — rise steadily over time. It signifies widespread optimism, growing investor confidence, and strong expectations of continued economic growth.\n\nBull markets are often driven by favorable macroeconomic conditions such as low interest rates, rising GDP, high employment levels, and positive corporate earnings.\n\nDuring these phases, investors are more willing to take risks, pouring capital into equities and other risk assets, further pushing prices up.\n\nCharacteristics of a Bull Market:\n• Rising stock prices across broad indices\n• Strong economic indicators (GDP, employment, earnings)\n• Increased IPO activity and inflow into equity markets\n• Positive investor sentiment and media coverage\n\nFamous Bull Runs in History:\n The Post-WWII Boom (1949–1968): Fueled by industrial growth, innovation, and expanding global trade.\n The Dot-Com Boom (1991–2000): Triggered by rapid tech innovation and internet adoption.\n Post-2008 Recovery (2009–2020): One of the longest bull markets in history, backed by monetary easing and tech sector dominance.\n COVID Rebound Rally (2020–2021): Marked by stimulus-driven growth and a surge in retail participation.\n\nBut remember, all bull runs eventually face corrections or reversals — it’s not about timing the market, but time *in* the market.`}
              />
              <button
                onClick={() => setActiveAnimal(null)}
                className="mt-4 bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm"
              >
                Close
              </button>
            </div>
          )}

          {/* <Charts /> */}
          {/* <img src="/images/bear.png" alt="Bear" className="w-64 h-64 mt-16" /> */}
          <img
            // src={Bear.src}
            alt="Bear"
            className="w-64 h-64 mt-16 hover:cursor-pointer hover:p-2"
            onClick={() => setActiveAnimal("bear")}
          />

          {activeAnimal === "bear" && (
            <div className="fixed top-20 left-[22rem] w-[850px] bg-gray-900 border border-gray-700 text-white p-4 rounded-xl shadow-lg z-50">
              <h2 className="text-red-400 text-xl font-bold mb-2">
                 Bear Market Insight
              </h2>
              <Typewriter
                text={`A  bear market represents a prolonged period of declining asset prices, typically defined by a drop of 20% or more from recent highs in broad market indices like the S&P 500 or Nifty 50.\n\nThese phases are driven by negative investor sentiment, economic downturns, and increased risk aversion. In contrast to the optimism of bull markets, bear markets thrive on fear, uncertainty, and pessimism.\n\nCharacteristics of a Bear Market:\n• Persistent decline in stock prices\n• Economic contraction or recession indicators\n•  Flight to safety — investors prefer bonds, gold, or cash\n• Lower trading volumes and reduced IPO activity\n\nHistoric Bear Markets:\n The Great Depression (1929–1932): Stocks lost nearly 90% of their value.\n The Dot-Com Crash (2000–2002): Triggered by tech bubble burst.\n The Global Financial Crisis (2008–2009): Housing collapse and Lehman Brothers’ failure.\n COVID Crash (March 2020): Sharpest drop in history — 30%+ in under a month.\n\nBear markets are emotionally and financially challenging. Investors often sell in panic, locking in losses. But these phases also create opportunities — strong companies trade at a discount, and disciplined investors can build wealth over the long term.\n\nRemember: Bear markets test patience, but they also plant the seeds for the next bull run.`}
              />
              <button
                onClick={() => setActiveAnimal(null)}
                className="mt-4 bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
              >
                Close
              </button>
            </div>
          )}

          <IPOCard />
        </div>
        <div className="min-w-7xl mx-20 mt-4 ">
          <Desc />
        </div>
      </main>
    </div>
  );
}
