
const fs = require("fs");
const path = require("path");
const https = require("https");

const icons = [
  { name: "html5", slug: "html5", color: "E34F26" },
  { name: "css3", slug: "css3", color: "1572B6" },
  { name: "javascript", slug: "javascript", color: "F7DF1E" },
  { name: "wordpress", slug: "wordpress", color: "21759B" },
  { name: "elementor", slug: "elementor", color: "92003B" },
  { name: "woocommerce", slug: "woocommerce", color: "96588A" },
  { name: "figma", slug: "figma", color: "F24E1E" },
  { name: "photoshop", slug: "adobephotoshop", color: "31A8FF" },
  { name: "illustrator", slug: "adobeillustrator", color: "FF9A00" }
];

const dir = path.join(__dirname, "public", "icons");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function downloadIcon(slug, color, filepath) {
  return new Promise((resolve, reject) => {
    https.get(`https://cdn.simpleicons.org/${slug}/${color}`, (response) => {
       const file = fs.createWriteStream(filepath);
       response.pipe(file);
       file.on("finish", () => { file.close(); resolve(); });
    }).on("error", reject);
  });
}

async function run() {
  console.log("Downloading icons...");
  for (const icon of icons) {
    const file = path.join(dir, `${icon.name}.svg`);
    try {
      await downloadIcon(icon.slug, icon.color, file);
      console.log(`Saved ${file}`);
    } catch (e) {
      console.error(`Failed ${icon.name}`, e);
    }
  }
  console.log("Done!");
}

run();

