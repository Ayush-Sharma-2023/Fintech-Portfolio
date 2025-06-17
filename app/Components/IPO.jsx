"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { ChevronDown, ChevronUp } from "lucide-react";

export default function IPOCard() {
    const router = useRouter();

  const [open, setOpen] = useState(false);

  const toggleCard = () => setOpen((prev) => !prev);

  return (
    <>
      {/* Toggle Button (Top-Right) */}
      <button
        onClick={toggleCard}
        className="fixed top-4 right-4 z-45 bg-gradient-to-br from-blue-800 to-blue-600 text-white px-4 py-2 
  rounded-xl flex items-center gap-2 hover:scale-105 hover:shadow-blue-500/50 transition-all shadow-lg group"
>
        Upcoming IPO {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* IPO Card */}
      <div
        className={`fixed top-16 right-4 w-[380px] z-40 bg-gray-950 text-white p-5 rounded-2xl shadow-xl border border-gray-900 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <h2 className="text-xl font-bold text-green-400 mb-2">Upcoming IPO</h2>
        <p className="text-sm text-gray-400 mb-4">
          Listing Date • July 2026 | Sector: B.Tech
        </p>

        <div className="space-y-2 text-sm">
          <p><span className="text-gray-400"> Name:</span> Ayush Sharma</p>
          <p><span className="text-gray-400"> Listed On:</span> Sharda University</p>
          <p><span className="text-gray-400"> Current Role:</span> Software Developer</p>
          <p><span className="text-gray-400"> Market Outlook:</span> Bullish on Full-Stack & Finance</p>
          <p><span className="text-gray-400"> Risk Appetite:</span> High – Thrives on challenges</p>
          <p><span className="text-gray-400"> Major Holdings:</span> Java, React.js, Next.js, Tailwind</p>
          <p><span className="text-gray-400"> Analyst Rating:</span> Strong Buy</p>
        </div>

        <div className="mt-4 text-green-500 italic text-sm">
          Pssst... be an early investor in this IPO!
        </div>

        <div className="mt-4 w-full grid gap-2">
          <button
                  onClick={() => router.push("/Contact")}

            className="w-full bg-green-600 hover:bg-green-700 text-white text-xs py-1.5 rounded-lg transition hover:cursor-pointer"
          >
            🔔 Set Price Alerts
          </button>

          <button
            onClick={() => alert("📄 Downloading Resume... {Under development}")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1.5 rounded-lg transition hover:cursor-pointer"
          >
            Download Resume
          </button>
        </div>
      </div>
    </>
  );
}
