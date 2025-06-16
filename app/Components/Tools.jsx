import React, { useState } from "react";
import { Info, ExternalLink } from "lucide-react";

const achievements = [
  {
    tool: "Partial Covered Call Calculator",
    purpose: "Simulate fractional lot covered calls ",
    link: "https://example.com",
    desc: [
      "Visual payoff graph with inverted-V shape.",
      "Helps assess risk/reward of partial lots.",
    ],
  },
  // {
  //   tool: "Old vs New Tax Calculator",
  //   purpose: "Compare tax regimes based on salary",
  //   link: "https://example.com",
  //   desc: [
  //     "Input salary & deductions.",
  //     "Shows best regime with tax savings.",
  //   ],
  // },
  // Add more tools here...
];

function Tools() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg w-full overflow-auto">
      <h2 className="text-2xl font-semibold mb-4">
        Collection of Financial Tools
      </h2>
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-800 text-gray-300">
          <tr>
            <th className="px-4 py-2">Tool Name</th>
            <th className="px-4 py-2">Purpose</th>
            <th className="px-4 py-2">Info</th>
            <th className="px-4 py-2">View</th>
          </tr>
        </thead>
        <tbody>
          {achievements.map((ach, idx) => (
            <React.Fragment key={idx}>
              <tr className="border-b border-gray-700 hover:bg-gray-800 transition">
                <td className="px-4 py-2 font-medium">{ach.tool} <span className="text-red-500"> (Under Development)</span></td>
                <td className="px-4 py-2">{ach.purpose}</td>
                <td className="px-4 py-2">
                  <button onClick={() => toggleAccordion(idx)}>
                    <Info
                      className={`w-5 h-5 hover:text-blue-400 hover:cursor-pointer transition ${
                        openIdx === idx ? "text-blue-400" : "text-gray-400"
                      }`}
                    />
                  </button>
                </td>
                <td className="px-4 py-2">
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-400 hover:text-green-400 transition hover:scale-110" />
                  </a>
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

export default Tools;
