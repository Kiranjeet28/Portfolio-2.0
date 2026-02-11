const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp'];
const SCALE_FACTOR = 0.5; // 50% scaling

function findImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findImages(filePath));
    } else if (IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase())) {
      results.push(filePath);
    }
  });
  return results;
}

async function scaleImage(filePath) {
  const ext = path.extname(filePath);
  const base = filePath.slice(0, -ext.length);
  const outPath = `${base}-scaled${ext}`;
  const image = sharp(filePath);
  const metadata = await image.metadata();
  await image
    .resize(Math.round(metadata.width * SCALE_FACTOR), Math.round(metadata.height * SCALE_FACTOR))
    .toFile(outPath);
  console.log(`Scaled: ${filePath} -> ${outPath}`);
}

async function main() {
  const publicDir = path.join(__dirname, 'public');
  const images = findImages(publicDir);
  for (const img of images) {
    await scaleImage(img);
  }
  console.log('All textures scaled.');
}

main().catch(console.error);
