const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to homepage" });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
