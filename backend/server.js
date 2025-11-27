import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import adminRouter from "./routes/adminRoute.js";

mongoose.set('strictQuery', false);

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);

app.get("/", (req, res) => {
  res.send("🏥 HMS API Working");
});

await connectDB();

app.listen(port, () => {
  console.log(`🚀 Server started on PORT:${port}`);
});
