import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import { Server } from "socket.io";
import { createServer } from "http";
import { connectToDatabase } from "./db/database.js";

import authRoutes from "./routes/User.js";
import marketRoutes from "./routes/Market.js";
import orderRoutes from "./routes/Order.js";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })); // Rate limiter

// Routes
app.use("/api/v1/users", authRoutes);
app.use("/api/v1/market", marketRoutes);
app.use("/api/v1/orders", orderRoutes);

// WebSocket Connection
io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("subscribeToMarketData", (symbol) => {
    console.log(`Subscribed to market data for: ${symbol}`);
    // Placeholder for broker WebSocket integration
    socket.emit("marketData", { symbol, price: Math.random() * 100 });
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
connectToDatabase();
app.get("/", (req, res) => {
  res.send("Welcome to the Stock Trading API");
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
