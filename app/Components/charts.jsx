"use client";
import React from "react";
import dynamic from "next/dynamic";
import OHLC from "./SymbolInfo";

// Dynamically import Chart only on client side
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function SemesterMarksCandlestick() {
  const series = [
    {
      // OHLC
      data: [
        { x: "Class 10", y: [7.0, 7.8, 6.9, 7.6] },
        { x: "Class 12", y: [7.6, 7.9, 7.4, 7.25] }, // slight red for realism
        { x: "Sem 1", y: [7.25, 7.7, 7.2, 7.55] },
        { x: "Sem 2", y: [7.55, 8.0, 7.45, 7.85] },
        { x: "Sem 3", y: [7.85, 8.2, 7.75, 8.15] },
        { x: "Sem 4", y: [8.15, 8.5, 8.1, 8.35] },
        { x: "Sem 5", y: [8.35, 8.7, 8.3, 8.55] },
        { x: "Sem 6", y: [8.55, 8.8, 8.4, 7.95] }, // minor red
        { x: "Sem 7", y: [7.95, 8.1, 7.85, 7.95] },
        { x: "Sem 8", y: [7.95, 8.05, 7.9, 7.95] },
      ],
    },
  ];

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
      toolbar: { show: false },
      background: "transparent", // ensures background inherits container color
    },
      zoom: {
    enabled: false, // optional: if zoom causes glitches
  },
    theme: {
      mode: "dark", // enables dark mode styling
    },
    title: {
      text: "Academic Performance Trend",
      align: "center",
      offsetY: 8,
      style: {
        fontSize: "18px",
        fontWeight: 600,
        color: "#ffffff", // title color
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#00b894",
          downward: "#d63031",
        },
        wick: { useFillColor: true },
      },
    },
    xaxis: {
      type: "category",
      title: {
        text: "Semester",
        style: { color: "#cccccc" },
      },
      labels: {
        style: { color: "#cccccc", fontSize: "12px" },
      },
    },
    yaxis: {
      opposite: true,
      title: {
        text: "GPA",
        style: { color: "#cccccc" },
      },
      labels: {
        style: { color: "#cccccc" },
      },
      min: 6,
      max: 10,
      tickAmount: 8,
    },
    tooltip: {
      theme: "dark", // dark background tooltip
      y: {
        formatter: (v) => v?.toFixed(2),
      },
    },
  };

  return (
    <>
   <div className="w-[900px] h-[400px] mx-auto overflow-hidden">
  <Chart
    options={options}
    series={series}
    type="candlestick"
    width={900}
    height={400}
  />
</div>

    </>
  );
}
