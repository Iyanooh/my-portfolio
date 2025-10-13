// backend/server.js
const mongoose = require("mongoose");

const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// MongoDB connection
mongoose.connect("mongodb://mongo:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Simple route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend 👋" });
});

// Contact schema and model
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const Contact = mongoose.model("Contact", ContactSchema);

// Contact form POST route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.json({ success: false, error: "All fields required" });
    }
    await Contact.create({ name, email, message });
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});
