import express from "express";
import { placeOrder, getOrders } from "../controllers/orderController.js";
const router = express.Router();

router.post("/place", placeOrder);
router.get("/list", getOrders);

export default router;