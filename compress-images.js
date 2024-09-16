const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public/images'); // Your images directory
const outputDir = path.join(__dirname, 'public/optimized-images'); // Output directory for WebP images

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  const inputFilePath = path.join(inputDir, file);
  const outputFilePath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

  if (fs.statSync(inputFilePath).isFile() && /\.(jpe?g|png)$/i.test(file)) {
    sharp(inputFilePath)
      .toFormat('webp', { quality: 80 }) // Adjust quality as needed
      .toFile(outputFilePath)
      .then(() => console.log(`Converted ${file} to WebP`))
      .catch(err => console.error(`Error converting ${file}:`, err));
  }
});
