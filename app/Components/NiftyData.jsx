import React, { useEffect } from "react";

function NiftyWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "NSE:NIFTY",
      width: "100%",
      height: 50,
      colorTheme: "dark",
      isTransparent: true,
      locale: "en"
    });
    document.getElementById("tv-widget").appendChild(script);
  }, []);

  return <div id="tv-widget" className="w-[200px] h-[60px]" />;
}

export default NiftyWidget;
