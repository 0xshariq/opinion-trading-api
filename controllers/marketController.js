import marketData from "../data/marketData.js";

export const getMarketPrice = async (req, res) => {
  try {
    const { symbol } = req.params;
    const data = marketData[symbol] || { symbol, price: (Math.random() * 100).toFixed(2) };
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching market data" });
  }
};