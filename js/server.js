const express = require("express");
const app = express();

app.get("/projects", (req, res) => {
  res.json([
    { id: 1, title: "Project Lumina", status: "On Track" },
    { id: 2, title: "Nexus Branding", status: "Needs Review" }
  ]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});