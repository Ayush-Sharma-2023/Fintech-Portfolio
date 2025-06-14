"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import Chart only on client side
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => <p className="text-white text-center mt-4">Loading chart...</p>,
});

export default function SemesterMarksCandlestick() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const series = [
    {
      data: [
        { x: "Class 10", y: [7.0, 7.8, 6.9, 7.6] },
        { x: "Class 12", y: [7.6, 7.9, 7.4, 7.25] },
        { x: "Sem 1", y: [7.25, 7.7, 7.2, 7.55] },
        { x: "Sem 2", y: [7.55, 8.0, 7.45, 7.85] },
        { x: "Sem 3", y: [7.85, 8.2, 7.75, 8.15] },
        { x: "Sem 4", y: [8.15, 8.5, 8.1, 8.35] },
        { x: "Sem 5", y: [8.35, 8.7, 8.3, 8.55] },
        { x: "Sem 6", y: [8.55, 8.8, 8.4, 7.95] },
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
    <div className="w-[800px] h-[400px]  ">
      {isClient ? (
        <Chart options={options} series={series} type="candlestick" width={800} height={400} />
      ) : (
        <p className="text-white text-center  mt-10">Loading chart...</p>
      )}
    </div>
  );
}
