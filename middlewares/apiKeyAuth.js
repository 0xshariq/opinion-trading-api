import { ApiKey } from "../models/ApiKey.js";

const apiKeyAuth = async (req, res, next) => {
  const apiKey = req.headers["x-api-key"] || req.query.apiKey;
  if (!apiKey) return res.status(403).json({ message: "API Key required" });

  const keyExists = await ApiKey.findOne({ key: apiKey });
  if (!keyExists) return res.status(403).json({ message: "Invalid API Key" });
  
  next();
};

export default apiKeyAuth;