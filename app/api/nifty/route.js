// /app/api/nifty/route.js
export async function GET() {
  const res = await fetch("https://query1.finance.yahoo.com/v8/finance/chart/%5ENSEI?interval=1m&range=1d");
  const data = await res.json();
  
  const lastClose = data.chart.result[0].meta.regularMarketPrice;

  return Response.json({ nifty: lastClose });
}
