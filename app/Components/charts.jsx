"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => (
    <p className="text-white text-center mt-4">Loading chart...</p>
  ),
});

export default function SemesterMarksCandlestick() {
  const [isClient, setIsClient] = useState(false);

  // Define constant open, high, low for Sem 7
  // Define constant open, high, low for Sem 7
// Define constant open, high, low for Sem 7
// Generalized last candle values
const lastCandleOpen = 7.95;
const lastCandleHigh = 9.0;
const lastCandleLow = 7.0;
let lastClose = 8.0;

// Function to generate bounded close price with mild bullish drift
const getBoundedClose = () => {
  const bias = 0.01;
  const randomness = (Math.random() - 0.5) * 0.08;
  // let change = randomness + bias;
  let change = randomness ;

  let close = lastClose + change;
  close = Math.max(7.95, Math.min(close, 9.0));
  close = parseFloat(close.toFixed(2));
  lastClose = close;

  return close;
};

const initialData = [
  { x: "Class 10", y: [7.0, 7.8, 6.9, 7.6] },
  { x: "Class 12", y: [7.6, 7.9, 7.4, 7.25] },
  { x: "Sem 1", y: [7.25, 7.7, 7.2, 7.55] },
  { x: "Sem 2", y: [7.55, 8.0, 7.45, 7.85] },
  { x: "Sem 3", y: [7.85, 8.2, 7.75, 8.15] },
  { x: "Sem 4", y: [8.15, 8.5, 8.1, 8.35] },
  { x: "Sem 5", y: [8.35, 8.7, 8.3, 8.55] },
  { x: "Sem 6", y: [8.55, 8.8, 8.4, 7.95] },
  { x: "Sem 7", y: [lastCandleOpen, lastCandleHigh, lastCandleLow, getBoundedClose()] },
];

const [series, setSeries] = useState([{ data: initialData }]);

useEffect(() => {
  setIsClient(true);
  const interval = setInterval(() => {
    setSeries((prev) => {
      const updated = [...prev[0].data];
      const newClose = getBoundedClose();

      const lastIndex = updated.length - 1;
      const lastLabel = updated[lastIndex].x;

      updated[lastIndex] = {
        x: lastLabel,
        y: [lastCandleOpen, lastCandleHigh, lastCandleLow, newClose],
      };

      return [{ data: updated }];
    });
  }, 1000); // 1s interval

  return () => clearInterval(interval);
}, []);

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
      toolbar: { show: false },
        animations: {
    enabled: false, // 🔥 disables animation globally
  },
      background: "transparent",
    },
    zoom: { enabled: false },
    theme: { mode: "dark" },
    title: {
      text: "Academic Performance Trend",
      align: "center",
      offsetY: 8,
      style: {
        fontSize: "18px",
        fontWeight: 600,
        color: "#ffffff",
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
      theme: "dark",
      y: {
        formatter: (v) => v?.toFixed(2),
      },
    },
  };

  return (
    <div className="w-[800px] h-[400px]">
      {isClient ? (
        <Chart
          options={options}
          series={series}
          type="candlestick"
          width={800}
          height={400}
        />
      ) : (
        <p className="text-white text-center mt-10">Loading chart...</p>
      )}
    </div>
  );
}
