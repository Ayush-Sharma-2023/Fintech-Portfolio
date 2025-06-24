"use client";
import React, { useState } from "react";
import Bull from "../../public/images/bull.png";
import Typewriter from "./Typewriter";
import Link from "next/link";

export default function BullImage() {
  const [show, setShow] = useState(false);

  return (
    <>
      <img
        src={Bull.src}
        alt="Bull"
        className="w-64 h-60 mt-16 hover:cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() => setShow(true)}
      />
      {show && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[850px] bg-gray-900 border border-gray-700 text-white p-6 rounded-2xl shadow-2xl z-50 animate-fadeIn">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-green-400 text-xl font-bold">
              Bull Market Insight
            </h2>
            <button
              onClick={() => setShow(false)}
              className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm hover:cursor-pointer"
            >
              Close
            </button>
          </div>

          <Typewriter
            text={`A  bull market is a period in which stock prices rise consistently over time, driven by strong investor confidence, positive economic indicators, and upward momentum. It reflects optimism in the market, with increased buying activity and growth-focused sentiment.`}
          />

          <div className="mt-6 flex justify-center">
            <Link href="/market">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-full shadow-md transition duration-300 hover:cursor-pointer">
                Explore Market,  The Programmer’s Way
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
