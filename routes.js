const Scrapper = require("./scraper");
const router = require("express").Router();

const STORAGE_FOLDER_PATH = "snaps";
const scrapper = new Scrapper(STORAGE_FOLDER_PATH);

router.get("/", (req, res) => res.send("Welcome to Scrapper"));

router.get("/d/:file", async (req, res, next) => {
  try {
    const { file } = req.params;
    return res.download(file, (err) => {
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