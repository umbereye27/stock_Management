const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/productRouter");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.DB)
  .then(() => console.log("DB connected Successfully!"))
  .catch((err) => console.log("error!", err));

app.use("/api/products", router);

module.exports = app;
