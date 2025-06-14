import React from "react";

const skills = [
  { symbol: "React", months: 12, confidence: "Proficient" },
  { symbol: "Next.js", months: 8, confidence: "Proficient" },
  { symbol: "Tailwind", months: 10, confidence: "Proficient" },
  { symbol: "Node.js", months: 7, confidence: "Intermediate" },
  { symbol: "Prisma", months: 5, confidence: "Intermediate" },
  { symbol: "MongoDB", months: 6, confidence: "Intermediate" },
  { symbol: "Java", months: 24, confidence: "Proficient" },
  { symbol: "SQL", months: 10, confidence: "Intermediate" },
];

function Holdings() {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg w-full overflow-auto">
      <h2 className="text-2xl font-semibold mb-4">💼 Holdings (Skills)</h2>
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-800 text-gray-300">
          <tr>
            <th className="px-4 py-2">Symbol</th>
            <th className="px-4 py-2">Net Qty (in months)</th>
            <th className="px-4 py-2">Current Status</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, idx) => (
            <tr
              key={idx}
              className="border-b border-gray-700 hover:bg-gray-800 transition"
            >
              <td className="px-4 py-2 font-medium">{skill.symbol}</td>
              <td className="px-4 py-2">{skill.months}</td>
              <td className="px-4 py-2">{skill.confidence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Holdings;
