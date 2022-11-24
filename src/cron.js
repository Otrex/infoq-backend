const cron = require("node-cron");
const path = require("path");
const fs = require("fs");

const { STORAGE_FOLDER_PATH } = require("./config");

cron.schedule('59 23 * * *', function() {
  console.log('---------------------');
  console.log('Running Cron Job');
  fs.rmSync(STORAGE_FOLDER_PATH, {
    recursive: true,
    force: true
  })

  fs.mkdirSync(STORAGE_FOLDER_PATH);
});