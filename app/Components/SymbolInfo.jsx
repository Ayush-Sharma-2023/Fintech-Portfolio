"use client";
import React from "react";

function SymbolInfo() {
  return (
    <div className="fixed right-5 top-16 w-[300px] bg-gray-900 text-white rounded-2xl shadow-xl p-4 space-y-3 z-40">
      {/* HEADER */}
      <div>
        <h2 className="text-xl font-bold">Ayush Sharma</h2>
        <p className="text-xs text-gray-400">
          Symbol: <span className="text-blue-400">B.TECH/CSE</span>
        </p>
      </div>

      {/* CGPA */}
      <div className="bg-gray-800 p-2 rounded-lg text-sm flex justify-between">
        <span>CGPA</span>
        <span className="text-green-400 font-semibold">7.90</span>
      </div>

      {/* QUICK OVERVIEW */}
      <div className="bg-gray-800 p-2 rounded-lg text-xs space-y-1">
        <div className="flex justify-between">
          <span>📚 Skills</span>
          <span className="text-gray-300">React, Java, SQL</span>
        </div>
        <div className="flex justify-between">
          <span>🧠 Hobbies</span>
          <span className="text-gray-300">Psych, Trading</span>
        </div>
        <div className="flex justify-between">
          <span>🛠️ Projects</span>
          <span className="text-gray-300">5+</span>
        </div>
        <div className="flex justify-between">
          <span>💼 Exp</span>
          <span className="text-gray-300">1 Internship</span>
        </div>
        <div className="flex justify-between">
          <span>🏅 Achievements</span>
          <span className="text-gray-300">3</span>
        </div>
      </div>

      {/* TAGLINE */}
      <p className="text-[11px] italic text-yellow-400 text-center">
        “Tech-driven. Psych-fueled. Algo-curious.”
      </p>

      {/* ACTIONS */}
      <div className="space-y-1">
        <button
          onClick={() => alert("📬 Reach out at: ayush@example.com")}
          className="w-full bg-green-600 hover:bg-green-700 text-white text-xs py-1.5 rounded-lg transition"
        >
          🔔 Set Price Alerts 
        </button>
        <button
          onClick={() => alert("📄 Downloading Resume...")}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1.5 rounded-lg transition"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default SymbolInfo;
