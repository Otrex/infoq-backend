const Scrapper = require("./core/scraper");
const { STORAGE_FOLDER_PATH } = require("./config");
const fs = require("fs");

const scrapper = new Scrapper(STORAGE_FOLDER_PATH);

const setup = () => {
  try {
    fs.rmSync(STORAGE_FOLDER_PATH, {
      recursive: true,
      force: true
    })
  } catch (err) {
    console.log(err)
  } finally {
    fs.mkdirSync(STORAGE_FOLDER_PATH);
  }
}

exports.scrapper = scrapper;
exports.setup = setup;