"use client";
import React, { useState } from "react";
import Bull from "../../public/images/bull.png";
import Typewriter from "./Typewriter";

export default function BullImage() {
  const [show, setShow] = useState(false);

  return (
    <>
      <img
        src={Bull.src}
        alt="Bull"
        className="w-64 h-60 mt-16 hover:cursor-pointer hover:p-2"
        onClick={() => setShow(true)}
      />
      {show && (
        <div className="fixed top-20 left-[22rem] w-[850px] bg-gray-900 border border-gray-700 text-white p-4 rounded-xl shadow-lg z-50">
          <div className="flex items-baseline-last justify-between pb-2">
            <h2 className="text-green-400 text-xl font-bold mb-2">
              Bull Market Insight
            </h2>
            <button
              onClick={() => setShow(false)}
              className="mt-4 bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm"
            >
              Close
            </button>
          </div>
          <Typewriter
            text={`A  bull market refers to a sustained period in which asset prices — typically stocks — rise steadily over time. It signifies widespread optimism, growing investor confidence, and strong expectations of continued economic growth.\n\nBull markets are often driven by favorable macroeconomic conditions such as low interest rates, rising GDP, high employment levels, and positive corporate earnings.\n\nDuring these phases, investors are more willing to take risks, pouring capital into equities and other risk assets, further pushing prices up.\n\nCharacteristics of a Bull Market:\n• Rising stock prices across broad indices\n• Strong economic indicators (GDP, employment, earnings)\n• Increased IPO activity and inflow into equity markets\n• Positive investor sentiment and media coverage\n\nFamous Bull Runs in History:\n The Post-WWII Boom (1949–1968): Fueled by industrial growth, innovation, and expanding global trade.\n The Dot-Com Boom (1991–2000): Triggered by rapid tech innovation and internet adoption.\n Post-2008 Recovery (2009–2020): One of the longest bull markets in history, backed by monetary easing and tech sector dominance.\n COVID Rebound Rally (2020–2021): Marked by stimulus-driven growth and a surge in retail participation.\n\nBut remember, all bull runs eventually face corrections or reversals — it’s not about timing the market, but time *in* the market.`}
          />
        </div>
      )}
    </>
  );
}
