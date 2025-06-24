"use client";
import React, { useState } from "react";
import { Info, ExternalLink, X, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    name: "Finance Management & Budgeting tool",
    ticker: "NSE",
    tech: "Next.js, Tailwind, API",
    desc: "Tool to manage budget ",
    description: (
      <>
        A Platform to calculate Tax by comparing Old Tax Regime vs New Tax
        Regime <br />
        (As per Budget FY25-26) <br />
        and Analyze various investment assets and MF
      </>
    ),
    repolink:
      "https://github.com/Ayush-Sharma-2023/Finance_Management_Platform",
    link: "https://ayush-sharma-2023.github.io/Finance_Management_Platform/",
  },
  {
    name: "Auto Attendance Tracker",
    ticker: "NSE",
    tech: "JavaScript, DOM, Browser Extension",
    description: (
      <>
        A browser extension that scans your online attendance table using DOM
        parsing,
        <br />
        calculates how many classes you can safely skip or must attend to
        maintain a 75% threshold,
        <br />
        and dynamically injects an interactive planner back into the same page.
        <br />
        ⚡ Loved and used by hundreds of students for its efficiency and
        accuracy.
        <br />
        Works on https://ezone.sharda.ac.in/ezone-2022/admin/studentlogin
      </>
    ),
    link: "https://github.com/Ayush-Sharma-2023/attendance-extension",
    repolink: "https://github.com/Ayush-Sharma-2023/attendance-extension",
  },
];

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const openDrawer = (project) => {
    setSelectedProject(project);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setSelectedProject(null);
    setDrawerOpen(false);
  };

  return (
    <>
      {/* Toggle Button - top-left */}
    <button
  onClick={toggleSidebar}
  className="fixed top-4 left-8 z-50 bg-gradient-to-br from-blue-800 to-blue-600 text-white px-4 py-2 
  rounded-xl flex items-center gap-2 hover:scale-105 hover:shadow-blue-500/50 transition-all shadow-lg group hover:cursor-pointer"
>
  {sidebarOpen ? (
    
    <ChevronUp size={18} />
  ) : (
    <>
      <span className="text-sm font-medium "> Watchlist</span>
      <ChevronDown size={18} />
    </>
  )}
</button>


      {/* Dropdown Sidebar from top-left */}
      <div
        className={`fixed top-0 left-0 w-[22rem] bg-gray-900 text-white shadow-xl z-40 transition-transform duration-300 ${
          sidebarOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-4 max-h-[calc(100vh-18rem)] overflow-y-auto">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2 pl-20">
            Watchlist
          </h2>

          <h2 className="p-2">Upcoming Financial tools and Projects </h2>

          <div className="space-y-4">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="relative bg-gray-800 p-3 rounded hover:bg-gray-700 
                transition-colors hover:cursor-pointer"
                onClick={() => openDrawer(proj)}
              >
                <div>
                  <h3 className="font-semibold text-md pr-9">{proj.name}</h3>
                  <p className="text-xs text-gray-400">
                    {/* {proj.ticker} | {proj.tech} */}
                    {proj.desc}
                  </p>
                </div>

                {/* Icon buttons */}
                <div className=" pt-2  flex space-x-2">
                  <button onClick={() => openDrawer(proj)} title="Info">
                    <Info
                      size={16}
                      className="text-blue-400 hover:text-blue-300"
                    />
                  </button>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open Repo"
                  >
                    <ExternalLink
                      size={16}
                      className="text-yellow-400 hover:text-yellow-300"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Drawer Info Panel */}
      {drawerOpen && selectedProject && (
        <div className="fixed top-0 right-0 h-full w-[24rem] bg-gray-900 text-white shadow-2xl z-50 transition-all duration-300">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-700 bg-gray-800">
            <div>
              <h3 className="text-lg font-bold tracking-wide">
                {selectedProject.name}
              </h3>
              <p className="text-sm text-gray-400">
                🏷️ Ticker:{" "}
                <span className="text-blue-300">{selectedProject.ticker}</span>
              </p>
            </div>
            <button onClick={closeDrawer}>
              <X className="text-gray-400 hover:text-red-400" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-4">
            {/* Tech Stack */}
            <div className="text-sm">
              <p className="text-gray-400 mb-1">📊 Sector</p>
              <p className="text-white font-medium">{selectedProject.tech}</p>
            </div>

            {/* Description */}
            <div className="text-sm">
              <p className="text-gray-400 mb-1">📄 Company Overview</p>
              <p className="text-gray-200 leading-snug">
                {selectedProject.description}
              </p>
            </div>

            {/* GitHub */}
            <div className="text-sm">
              <p className="text-gray-400 mb-1">🔗 Investor Relations</p>
              <a
                href={selectedProject.repolink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                View GitHub Repo
              </a>
            </div>

            {/* Status */}
            <div className="text-sm">
              <p className="text-gray-400 mb-1">📈 Sentiment / Status</p>
              <p className="text-green-400">
                Bullish – Strong demand for this skillset
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
