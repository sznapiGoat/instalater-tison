import puppeteer from "puppeteer-core";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const BASE = process.env.BASE ?? "http://localhost:3441";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 700 });
await page.goto(BASE + "/topeni", { waitUntil: "load" });
await new Promise((r) => setTimeout(r, 500));

// zavřený stav
await page.screenshot({ path: ".shots/nav-closed.png" });

// rozbalený stav přes klik (ověří i klávesnicovou cestu)
const btn = await page.$('nav[aria-label="Hlavní"] button[aria-haspopup="true"]');
if (!btn) throw new Error("tlačítko Služby nenalezeno");
await btn.click();
await new Promise((r) => setTimeout(r, 500));
const expanded = await page.$eval('nav[aria-label="Hlavní"] button[aria-haspopup="true"]', (b) => b.getAttribute("aria-expanded"));
console.log("aria-expanded po kliknutí:", expanded);
await page.screenshot({ path: ".shots/nav-open.png" });

await page.keyboard.press("Escape");
await new Promise((r) => setTimeout(r, 300));
console.log("aria-expanded po Escape:", await page.$eval('nav[aria-label="Hlavní"] button[aria-haspopup="true"]', (b) => b.getAttribute("aria-expanded")));
await browser.close();
