import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => console.log("Database Connected ✅"));
    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
  } catch (err) {
    console.log("MongoDB Connection Error ❌:", err);
    process.exit(1);
  }
};

export default connectDB;