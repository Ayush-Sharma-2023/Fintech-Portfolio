import React, { useState } from "react";
import { Info } from "lucide-react";

const achievements = [
  {
    symbol: "Smart India Hackathon Finalist",
    status: "Completed",
    date: "Aug 2023",
    desc: [
      "Built a blockchain-based voting system.",
      "Used Ethereum and Solidity.",
      "Ensured end-to-end encrypted ballots.",
    ],
  },
  {
    symbol: "Crack Zerodha Interview",
    status: "Open",
    date: "–",
    desc: [
      "Targeting to clear all rounds by end of 2025.",
      "Focus: DSA, system design, project polish.",
    ],
  },
  // more entries...
];

function Orders() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg w-full overflow-auto">
      <h2 className="text-2xl font-semibold mb-4">
        Orders (Achievements & Goals)
      </h2>
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-800 text-gray-300">
          <tr>
            <th className="px-4 py-2">Symbol</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Info</th>
          </tr>
        </thead>
        <tbody>
          {achievements.map((ach, idx) => (
            <React.Fragment key={idx}>
              <tr className="border-b border-gray-700 hover:bg-gray-800 transition">
                <td className="px-4 py-2 font-medium">{ach.symbol}</td>
                <td className="px-4 py-2">{ach.status}</td>
                <td className="px-4 py-2">{ach.date}</td>
                <td className="px-4 py-2">
                  <button onClick={() => toggleAccordion(idx)}>
                    <Info
                      className={`w-5 h-5 hover:text-blue-400 hover:cursor-pointer transition ${
                        openIdx === idx ? "text-blue-400" : "text-gray-400"
                      }`}
                    />
                  </button>
                </td>
              </tr>
              {openIdx === idx && (
                <tr className="bg-gray-800 text-gray-200">
                  <td
                    colSpan={4}
                    className="px-4 py-3 border-b border-gray-700"
                  >
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {ach.desc.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
