import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const port =process.env.PORT || 4000;


//middlewares
app.use(express.json());
app.use(cors());

// DB connection
connectDB("mongodb://localhost:27017/food-odering-app-2");

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on port: ${port}`);
});

export default async function handler(req, res) {
  try {
    // your logic here
    res.status(200).json({ success: true })
  } catch (error) {
    console.error('Function error:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}