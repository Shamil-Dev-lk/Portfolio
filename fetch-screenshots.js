
const fs = require("fs");
const path = require("path");
const https = require("https");

const projects = [
  { id: 1, url: "https://web25.blogdu.de/" },
  { id: 2, url: "https://food26.blogdu.de/" },
  { id: 3, url: "https://lms26.blogdu.de/" },
  { id: 4, url: "https://1hour.blogdu.de/" },
  { id: 5, url: "https://motors.blogdu.de/" },
  { id: 6, url: "https://diginewz.blogdu.de/" },
  { id: 7, url: "https://foodbook.blogdu.de/" },
  { id: 8, url: "https://houzez.blogdu.de/" },
  { id: 9, url: "https://pharma.blogdu.de/" },
  { id: 10, url: "https://shamil-dev-lk.github.io/nps-inventory-system/login/" },
  { id: 11, url: "https://shamil-dev-lk.github.io/cooperative-society/" }
];

const dir = path.join(__dirname, "public", "projects");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    // using microlink for high quality desktop screenshots
    const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
    
    https.get(apiUrl, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307 || response.statusCode === 308) {
         // Handle redirect which microlink uses when embed=screenshot.url
         https.get(response.headers.location, (res) => {
             const file = fs.createWriteStream(filepath);
             res.pipe(file);
             file.on("finish", () => { file.close(); resolve(); });
         }).on("error", reject);
      } else {
         const file = fs.createWriteStream(filepath);
         response.pipe(file);
         file.on("finish", () => { file.close(); resolve(); });
      }
    }).on("error", reject);
  });
}

async function run() {
  console.log("Downloading screenshots...");
  for (const p of projects) {
    const file = path.join(dir, `project-${p.id}.jpg`);
    if (!fs.existsSync(file)) {
      console.log(`Downloading ${p.url}...`);
      try {
        await downloadImage(p.url, file);
        console.log(`Saved ${file}`);
      } catch (e) {
        console.error(`Failed ${p.url}`, e);
      }
    } else {
       console.log(`Skipping ${p.url} (already exists)`);
    }
  }
  console.log("Done!");
}

run();

