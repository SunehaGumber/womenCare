// models/tracker.js
import mongoose from "mongoose";

const trackerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  cycleLength: { type: Number, required: true },
  selectedSymptoms: [String], // array of symptoms
}, { timestamps: true });

const trackerModel = mongoose.model("tracker", trackerSchema);

export default trackerModel;

