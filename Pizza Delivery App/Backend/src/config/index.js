import dotenv from "dotenv";
const config = {
  PORT: process.env.PORT || 3396,
  MONGODB_URL: process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/pizza",
};
export default config;
