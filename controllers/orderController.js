import orderData from "../data/orderData.js";

export const placeOrder = async (req, res) => {
  try {
    const { symbol, quantity, orderType } = req.body;
    const order = {
      orderId: Math.floor(Math.random() * 1000000),
      symbol,
      quantity,
      orderType,
      status: "Success",
      timestamp: new Date().toISOString(),
    };
    orderData.orders.push(order);
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Order placement failed" });
  }
};

export const getOrders = async (req, res) => {
  try {
    res.json(orderData.orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders" });
  }
};