"use client";
import React, { useState } from "react";
import Bear from "../../public/images/bear.png";
import Typewriter from "./Typewriter";
import Link from "next/link";

export default function BearImage() {
  const [show, setShow] = useState(false);

  return (
    <>
      <img
        src={Bear.src}
        alt="Bear"
        className="w-64 h-64 mt-16 hover:cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() => setShow(true)}
      />
      {show && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[850px] bg-gray-900 border border-gray-700 text-white p-6 rounded-2xl shadow-2xl z-50 animate-fadeIn">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-red-400 text-xl font-bold">
              Bear Market Insight
            </h2>
            <button
              onClick={() => setShow(false)}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm hover:cursor-pointer"
            >
              Close
            </button>
          </div>

          <Typewriter
            text={`A  bear market is a phase where stock prices decline sharply, typically by 20% or more from recent highs. It’s marked by fear, uncertainty, and pessimism, often triggered by economic slowdowns, weak investor sentiment, or external shocks. Selling pressure dominates, and risk-off behavior takes over.`}
          />

          <div className="mt-6 flex justify-center">
            <Link href="/market">
              <button className="bg-red-500 hover:bg-red-600 text-whtie font-semibold px-5 py-2 rounded-full shadow-md transition duration-300 hover:cursor-pointer">
                Explore Market,  The Programmer’s Way
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
