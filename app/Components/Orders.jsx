import React, { useState } from "react";
import { Info } from "lucide-react";

const achievements = [
  {
    symbol: "Innoverse'36 Hackathon winner ",
    status: "Completed",
    date: "Feb 2025",
    desc: [
      "Led a team of 3 members in a Hackathon and won 2nd runner up",
      "Actively guided the team for 36 hours straight",
      "Built 'Finance Management & Budgeting tool'",
    ],
  },
  {
    symbol: "6th Technovation Hackathon Finalist",
    status: "Completed",
    date: "Jan 2025",
    desc: [
      "Led a team of 3 in building a Community Resource Management System",
      "Reached the finals — my first time as a hackathon finalist",
      "Though we didn’t win, the experience boosted my confidence and sharpened my leadership under pressure",
    ],
  },

  {
    symbol: "Smart India Hackathon Applicant",
    status: "Completed",
    date: "Sep 2024",
    desc: [
      "Submitted a solution for the Smart India Hackathon and participated in the internal university-level screening round",
      "Worked on the project 'Career Counselling and Guidance Programs' to help students explore lesser-known career paths",
      "Led the team in design and architecture discussions, which enhanced my project planning and collaboration skills",
      "Although we weren’t selected, the experience taught me valuable lessons about team dynamics, accountability, and the importance of aligned teamwork",
    ],
  },
  {
    symbol: "Winner of 'Space, Science & Technology' Quiz",
    status: "Completed",
    date: "Sep 2023",
    desc: [
      "Won 1st prize in Quiz on 'Space, Science & Technology' held in our university",
    ],
  },
  {
    symbol: "Winner of Essay Presentation on 'Space, Science & Technology' ",
    status: "Completed",
    date: "Sep 2023",
    desc: [
      "Won 2nd prize in Essay Presentation on 'Space, Science & Technology' held in our university",
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
