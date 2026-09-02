import puppeteer from "puppeteer-core";
import fs from "node:fs";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const BASE = process.env.BASE ?? "http://localhost:3311";
const OUT = process.env.OUT ?? "./.shots";
const targets = (process.env.PAGES ?? "/,/topeni,/kontakt,/o-nas,/neexistuje").split(",");
const width = Number(process.env.W ?? 1440);
const height = Number(process.env.H ?? 900);
const full = process.env.FULL !== "0";

fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});
const page = await browser.newPage();
const errors = [];
page.on("console", (m) => {
  if (m.type() === "error" || m.type() === "warning") errors.push(`[${m.type()}] ${m.text()}`);
});
page.on("pageerror", (e) => errors.push(`[pageerror] ${e.message}`));
await page.setViewport({ width, height, deviceScaleFactor: 1 });

for (const t of targets) {
  await page.goto(BASE + t, { waitUntil: "load", timeout: 60000 });
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = "auto";
    await new Promise((res) => {
      let y = 0;
      const step = () => {
        window.scrollTo(0, y);
        y += window.innerHeight * 0.35;
        if (y < document.body.scrollHeight) setTimeout(step, 160);
        else setTimeout(() => { window.scrollTo(0, 0); res(); }, 400);
      };
      step();
    });
  });
  await new Promise((r) => setTimeout(r, 700));
  const name = (t === "/" ? "home" : t.replace(/\//g, "-").replace(/^-/, "")) + `-${width}`;
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: full });
  console.log("shot", name);
}

console.log("CONSOLE ISSUES:", errors.length ? "\n" + [...new Set(errors)].join("\n") : "none");
await browser.close();
