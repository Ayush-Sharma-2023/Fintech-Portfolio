"use client";
import React, { useState } from "react";
import { Briefcase, Calendar, BadgeInfo } from "lucide-react";

const positions = [
  {
    role: "Software Developer Intern",
    company: "Sharda Tech",
    duration: "April-2025 - Present",
    skills: ["Mongo", "Next.JS", "React"],
    description: [
      "Developed RESTful services for internal tools.",
      "Managed authentication using JWT and Spring Security.",
      "Wrote optimized SQL queries and handled DB migrations."
    ],
  },


  {
    role: "Frontend Developer",
    company: "VidyaInterna Hub",
    duration: "Oct-2024 - Jan-2025",
    skills: ["Next.JS", "React", "Tailwind"],
    description: [
      "Developed RESTful services for internal tools.",
      "Managed authentication using JWT and Spring Security.",
      "Wrote optimized SQL queries and handled DB migrations."
    ],
  },
  {
    role: "Open Source Contributor",
    company: "GSSOC",
    duration: "Oct-2024 - Nov-2024",
    skills: ["Mongo", "Next.JS", "React"],
    description: [
      "Developed RESTful services for internal tools.",
      "Managed authentication using JWT and Spring Security.",
      "Wrote optimized SQL queries and handled DB migrations."
    ],
  },





  {
    role: "Frontend Developer",
    company: "RNPSoft Pvt. Ltd.",
    duration: "May-2024 - Aug-2024",
    skills: ["React.js", "CSS"],
    description: [
      "Built a dynamic dashboard using React.",
      "Worked with REST APIs for real-time updates.",
      "Contributed to UI/UX improvements using Tailwind CSS."
    ],
  },
];

export default function Positions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

 return (
  // <div className="max-w-3xl mx-auto px-4 text-white">
  <div className="max-w-full mx-auto px-4 text-white">
    <h1 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
      <Briefcase className="text-blue-400" /> Positions
    </h1>

    {positions.map((pos, idx) => (
      <div
        key={idx}
        className="mb-4 p-4 border-l-4 border-blue-500 bg-gray-900 shadow-md rounded"
      >
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-white">
              {pos.role} @ {pos.company}
            </h2>
            <p className="text-sm text-gray-400 flex items-center gap-1">
              <Calendar size={16} /> {pos.duration}
            </p>
            <p className="mt-1 text-sm text-gray-300 italic">
              Skills: {pos.skills.join(", ")}
            </p>
          </div>

          <button
            onClick={() => toggleAccordion(idx)}
            className="text-blue-400 hover:text-blue-300"
            title="More Info"
          >
            <BadgeInfo />
          </button>
        </div>

        {/* Accordion description */}
        {openIndex === idx && (
          <div className="mt-3 text-sm text-gray-200 space-y-2">
            {pos.description.map((line, i) => (
              <p key={i}>• {line}</p>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
);

}
