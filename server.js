const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

// Connect Database
connectDB();

// Body Parser
app.use(express.json());

// Importing Routes
const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");
const contactRoutes = require("./routes/contacts");

// Routes Middleware
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/contacts", contactRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is Up and Running at PORT ${PORT}`);
});
