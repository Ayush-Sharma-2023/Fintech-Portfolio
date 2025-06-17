"use client";
import React, { useState } from "react";
import Bear from "../../public/images/bear.png";
import Typewriter from "./Typewriter";

export default function BearImage() {
  const [show, setShow] = useState(false);

  return (
    <>
      <img
        src={Bear.src}
        alt="Bear"
        className="w-64 h-64 mt-16 hover:cursor-pointer hover:p-2"
        onClick={() => setShow(true)}
      />
      {show && (
        <div className="fixed top-20 left-[22rem] w-[850px] bg-gray-900 border border-gray-700 text-white p-4 rounded-xl shadow-lg z-50">
          <div className="flex items-baseline-last justify-between pb-2">
            <h2 className="text-red-400 text-xl font-bold mb-2">Bear Market Insight</h2>
            <button
              onClick={() => setShow(false)}
              className="mt-4 bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
            >
              Close
            </button>
          </div>
          <Typewriter
            text={`A  bear market represents a prolonged period of declining asset prices, typically defined by a drop of 20% or more from recent highs in broad market indices like the S&P 500 or Nifty 50.\n\nThese phases are driven by negative investor sentiment, economic downturns, and increased risk aversion. In contrast to the optimism of bull markets, bear markets thrive on fear, uncertainty, and pessimism.\n\nCharacteristics of a Bear Market:\n• Persistent decline in stock prices\n• Economic contraction or recession indicators\n•  Flight to safety — investors prefer bonds, gold, or cash\n• Lower trading volumes and reduced IPO activity\n\nHistoric Bear Markets:\n The Great Depression (1929–1932): Stocks lost nearly 90% of their value.\n The Dot-Com Crash (2000–2002): Triggered by tech bubble burst.\n The Global Financial Crisis (2008–2009): Housing collapse and Lehman Brothers’ failure.\n COVID Crash (March 2020): Sharpest drop in history — 30%+ in under a month.\n\nBear markets are emotionally and financially challenging. Investors often sell in panic, locking in losses. But these phases also create opportunities — strong companies trade at a discount, and disciplined investors can build wealth over the long term.\n\nRemember: Bear markets test patience, but they also plant the seeds for the next bull run.`}
          />
        </div>
      )}
    </>
  );
}
