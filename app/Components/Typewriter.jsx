"use client";
import React, { useEffect, useState } from "react";

export default function Typewriter({ text, speed = 10 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className="whitespace-pre-line">{displayed}</p>;
}
