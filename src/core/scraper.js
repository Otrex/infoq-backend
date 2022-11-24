const puppeteer = require('puppeteer')
const path = require("path");

class Scrapper {
  is_scrapping = false;

  constructor(folder_path = ".") {
    this.STORAGE_PATH = folder_path;
  }

  async getVisual(URL) {
    try {
      this.is_scrapping = true;
      const browser = await puppeteer.launch()
  
      const page = await browser.newPage()
      await page.goto(URL)
  
      const file_name = path.join(this.STORAGE_PATH, `${new Date().getTime()}-file`);

      await page.screenshot({ path: `${file_name}.png` })
      await page.pdf({ path: `${file_name}.pdf` })
  
      await browser.close()
      return file_name;

    } catch (error) {
      throw Error("resource could not be created");
    } finally {
      this.is_scrapping = false;
    }
  }

}

module.exports = Scrapper;