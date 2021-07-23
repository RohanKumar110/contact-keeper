const express = require("express");
const app = express();

// Importing Routes
const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");
const contactRoutes = require("./routes/contacts");

// Routes Middleware
app.use("api/auth", authRoutes);
app.use("api/users", usersRoutes);
app.use("api/contacts", contactRoutes);

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the Contact Keeper API" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is Up and Running at PORT ${PORT}`);
});
