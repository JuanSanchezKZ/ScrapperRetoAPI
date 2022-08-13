import mongoose from "mongoose";
import Candidate from "./models/profile";
async function connectDB() {
  const db = await mongoose.connect("mongodb://localhost/scrapper");
  console.log(
    "database is connected is connected to",
    db.connection.db.databaseName
  );
}

export async function executeQueries(data: object) {
  const candidates = new Candidate({
    candidate: data,
  });
  await candidates.save();
}

connectDB();
