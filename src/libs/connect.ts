import mongoose from "mongoose";

async function mongodbConnect(): Promise<void> {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("db connection established");
  } catch (err) {
    console.log("Error connecting to the database: ", err);
  }
}

export default mongodbConnect;
