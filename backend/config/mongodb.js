import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI.trim();
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 8000
    });

    console.log("✅ Database Connected Successfully");
  } catch (err) {
    console.error("❌ Database Connection Failed:", err.message);
    process.exit(1);
  }
};

export default connectDB;
