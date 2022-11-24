require("dotenv").config();
require("./src/cron");

const express = require("express");
const router = require("./src/routes");
const { setup } = require("./src/utils");

const app = express();

app.use("/", router);

app.use((err, req, res, next) => {
  if (err) {
    console.log(err)
    return res.status(500).json({
      error: true,
      message: "server error",
      err,
    })
  }
});

app.listen(3000, () => {
  setup();
  console.log("Server has started....")
})