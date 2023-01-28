const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
      width: 640,
      height: 480,
    });
    await page.goto("http://localhost:3000/#/");
    await page.waitForSelector("#root:not(:empty)");
    await page.screenshot({ path: "example.png" });
    await page.pdf({ path: "home.pdf", format: "a4" });
    // Get the "viewport" of the page, as reported by the page.
    const dimensions = await page.evaluate(() => {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        deviceScaleFactor: window.devicePixelRatio,
      };
    });
    console.log("Dimensions:", dimensions);
    await browser.close();
  } catch (error) {
    console.log(error);
  }
})();
