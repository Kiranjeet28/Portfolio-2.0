const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const textures = [
  'public/textures/cube.png',
  'public/textures/rings.png',
];

const targetSize = 256; // Default lower resolution

textures.forEach((texturePath) => {
  const ext = path.extname(texturePath);
  const base = path.basename(texturePath, ext);
  const dir = path.dirname(texturePath);
  const output = path.join(dir, `${base}-scaled${ext}`);

  sharp(texturePath)
    .resize(targetSize, targetSize, { fit: 'inside' })
    .toFile(output)
    .then(() => {
      console.log(`Scaled: ${texturePath} -> ${output}`);
    })
    .catch((err) => {
      console.error(`Error scaling ${texturePath}:`, err);
    });
});
