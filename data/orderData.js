export default {
  orders: [
    {
      orderId: 100001,
      symbol: "AAPL",
      quantity: 10,
      orderType: "buy",
      status: "Success",
      timestamp: "2025-03-05T12:00:00Z",
    },
    {
      orderId: 100002,
      symbol: "GOOGL",
      quantity: 5,
      orderType: "sell",
      status: "Pending",
      timestamp: "2025-03-05T12:05:00Z",
    },
    {
      orderId: 100003,
      symbol: "TSLA",
      quantity: 2,
      orderType: "buy",
      status: "Completed",
      timestamp: "2025-03-05T12:10:00Z",
    },
    {
      orderId: 100004,
      symbol: "MSFT",
      quantity: 8,
      orderType: "sell",
      status: "Cancelled",
      timestamp: "2025-03-05T12:15:00Z",
    },
    {
      orderId: 100005,
      symbol: "AMZN",
      quantity: 3,
      orderType: "buy",
      status: "Success",
      timestamp: "2025-03-05T12:20:00Z",
    },
  ],
};
