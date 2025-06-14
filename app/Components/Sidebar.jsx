"use client";
import React, { useState } from "react";
import {
  Info,
  ExternalLink,
  ShoppingCart,
  X,
  DollarSign,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const projects = [
  {
    name: "Finance Management and Budgeting tool",
    ticker: "NSE",
    tech: "Next.js, Tailwind, API ",
    description: (
      <>
        A Platform to calculate Tax by comparing Old Tax Regime vs New Tax
        Regime <br />
        (As per Budget FY25-26) <br />
        and Analyze various investment assets and MF
      </>
    ),

    link: "https://github.com/Ayush-Sharma-2023/Finance_Management_Platform",
  },
  {
    name: "Option Chain Analyzer",
    ticker: "OCA",
    tech: "Node.js, React",
    description:
      "Analyze options with live greeks, OI data, and PCR trends for NIFTY/BANKNIFTY.",
    link: "https://github.com/ayush/option-chain",
  },
];

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
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
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-24 z-50 bg-gray-800 text-white p-2 rounded-r transition-all ${
          sidebarOpen ? "left-[20rem]" : "left-0"
        }`}
      >
        {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0  w-[320px] left-0 h-full bg-gray-900 text-white p-4 shadow-xl z-40 transition-all duration-300 ${
          sidebarOpen ? "w-64 translate-x-0" : " -translate-x-full"
        } overflow-hidden`}
      >
        <h2 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
          📈 Watchlist
        </h2>

        <div className="space-y-4">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="relative bg-gray-800 p-3 rounded group hover:bg-gray-700 transition-colors"
            >
              <div>
                <h3 className="font-semibold text-md">{proj.name}</h3>
                <p className="text-xs text-gray-400">
                  {proj.ticker} | {proj.tech}
                </p>
              </div>

              {/* Hover icons */}
              {/* Icon buttons - always visible now */}
              <div className="absolute top-2 right-2 flex space-x-2">
                {/* <button onClick={() => openDrawer(proj)} title="Buy">
                  <DollarSign
                    size={16}
                    className="text-green-400 hover:text-green-300"
                  />
                </button> */}
                {/* <button onClick={() => openDrawer(proj)} title="Sell">
                  <ShoppingCart
                    size={16}
                    className="text-red-400 hover:text-red-300"
                  />
                </button> */}
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

      {/* Right-side Project Info Drawer */}
      {drawerOpen && selectedProject && (
        <div className="fixed top-0 right-0 h-full w-[24rem] bg-gray-900 text-white shadow-2xl z-50 transition-all duration-300 ">
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

            {/* Project Description */}
            <div className="text-sm">
              <p className="text-gray-400 mb-1">📄 Company Overview</p>
              <p className="text-gray-200 leading-snug">
                {selectedProject.description}
              </p>
            </div>

            {/* "GitHub as Investor Relations" */}
            <div className="text-sm">
              <p className="text-gray-400 mb-1">🔗 Investor Relations</p>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                View GitHub Repo
              </a>
            </div>

            {/* Optional: "Market Sentiment" */}
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
