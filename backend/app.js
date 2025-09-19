import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import trackerModel from "./models/tracker.js";
import userModel from "./models/user.js"; // ES module style, note the .js

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.get('/', (req, res) => {
    res.send("running here!");
});

app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already existed!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({ name, email, password: hashedPassword });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        const { password: pwd, ...userWithoutPassword } = user.toObject();

        res.status(201).json({ message: "Signup successful", user: userWithoutPassword, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Something went wrong!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        const { password: pwd, ...userWithoutPassword } = user.toObject();

        res.status(200).json({
            message: "Login successful",
            token,
            user: userWithoutPassword
        });

    } catch (err) {
        res.status(400).json({ message: "Something went wrong here" });
    }
});
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = decoded; // decoded contains user id
    next();
  });
};

// Protected route
app.get("/dashboard",authMiddleware, async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id).select("-password"); 
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});



// Save tracker entry
app.post("/tracker", authMiddleware, async (req, res) => {
  try {
    const { startDate, endDate, cycleLength, selectedSymptoms } = req.body;

    const tracker = await trackerModel.create({
      user: req.user.id,
      startDate,
      endDate,
      cycleLength,
      selectedSymptoms,
    });

    res.status(201).json(tracker);
  } catch (err) {
    res.status(500).json({ error: "Failed to save tracker data" });
  }
});

// Fetch all tracker entries for logged-in user
app.get("/tracker", authMiddleware, async (req, res) => {
  try {
    const trackerData = (await trackerModel.find({ user: req.user.id }))
    res.json(trackerData);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tracker data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
