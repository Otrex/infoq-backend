const {scrapper} = require("./utils");
const path = require("path");
const { STORAGE_FOLDER_PATH } = require("./config");
const router = require("express").Router();

router.get("/", (req, res) => res.send("Welcome to Scrapper"));

router.get("/d/:file", async (req, res, next) => {
  try {
    const { file } = req.params;
    return res.download(path.join(STORAGE_FOLDER_PATH, file), (err) => {
      if (err) {
        res.status(411).json({
          error: true,
          message: "resource not found"
        })
      }
    })
  } catch (error) {
    next(error)
  }
});

router.get("/scrape", async (req, res, next) => {
  try {
    let result;
    const { url } = req.query

    for (let i = 0; i <= 5; i++) {
      if (!scrapper.is_scrapping) {
        result = await scrapper.getVisual(url);
        break;
      }
    }

    if (!result) {
      return res.status(411).json({
        error: true,
        message: "resource is busy"
      })
    }

    return res.status(200).json({
      error: false,
      data: {
        keys: ["pdf", "png"]
          .map((e) => `${
            result
              .replace(STORAGE_FOLDER_PATH, "")
              .replace("/", "")
            }.${e}`),
      }
    });

  } catch (error) {
    next(error);
  }
})

module.exports = router;