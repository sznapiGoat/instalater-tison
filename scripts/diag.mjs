import puppeteer from "puppeteer-core";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const BASE = process.env.BASE ?? "http://localhost:3399";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(BASE + "/", { waitUntil: "load" });
await page.evaluate(async () => {
  await new Promise((res) => {
    let y = 0;
    const step = () => {
      window.scrollTo(0, y);
      y += window.innerHeight * 0.8;
      if (y < document.body.scrollHeight) setTimeout(step, 120);
      else setTimeout(res, 600);
    };
    step();
  });
});
await new Promise((r) => setTimeout(r, 800));

const report = await page.evaluate(() => {
  const out = [];
  document.querySelectorAll("section, header > div, footer").forEach((el) => {
    const s = getComputedStyle(el);
    out.push({
      tag: el.tagName + "." + (el.className || "").toString().slice(0, 40),
      bg: s.backgroundColor,
    });
  });
  const hidden = [];
  document.querySelectorAll("*").forEach((el) => {
    const s = getComputedStyle(el);
    if (parseFloat(s.opacity) < 0.2 && el.textContent && el.textContent.trim().length > 3) {
      hidden.push({
        tag: el.tagName,
        cls: (el.className || "").toString().slice(0, 60),
        text: el.textContent.trim().slice(0, 50),
        opacity: s.opacity,
      });
    }
  });
  const header = document.querySelector("header > div");
  return {
    headerBg: header ? getComputedStyle(header).backgroundColor : null,
    headerClass: header ? header.className : null,
    hidden: hidden.slice(0, 12),
    sections: out.slice(0, 8),
  };
});
console.log(JSON.stringify(report, null, 1));
await browser.close();
