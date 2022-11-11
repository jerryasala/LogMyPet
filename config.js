import { config } from "dotenv";
config();

export default {
  MONGO_URL: process.env.MONGO_URL,
  PORT: process.env.PORT,
};