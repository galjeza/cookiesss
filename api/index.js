const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

// Use CORS for all routes
app.use(cors());

app.post("/", (req, res) => {
  console.log("Cookies: ", req.body);
  res.send(req.body);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
