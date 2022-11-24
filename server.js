require("dotenv").config();

const express = require("express");
const router = require("./routes");

const app = express();

app.use("/", router);

app.use((err, req, res, next) => {
  if (err) {
    return res.status(500).json({
      error: true,
      message: "server error"
    })
  }
});

app.listen(3000, () => {
  console.log("Server has started....")
})