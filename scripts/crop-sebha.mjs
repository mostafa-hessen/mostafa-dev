import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const DIR = path.join(process.cwd(), 'assets', 'projects', 'sebha');
const OUT = path.join(DIR, 'cropped');

/** Crop rules: remove status bar, Android nav, browser chrome */
function cropBox(filename, width, height) {
  const lower = filename.toLowerCase();
  const isWhatsApp = lower.includes('whatsapp');

  if (isWhatsApp) {
    return {
      left: Math.round(width * 0.02),
      top: Math.round(height * 0.055),
      width: Math.round(width * 0.96),
      height: Math.round(height * 0.82)
    };
  }

  // PNG mobile UI screenshots — light trim + hide bottom safe area under nav
  return {
    left: Math.round(width * 0.03),
    top: Math.round(height * 0.02),
    width: Math.round(width * 0.94),
    height: Math.round(height * 0.9)
  };
}

async function processFile(file) {
  const input = path.join(DIR, file);
  const meta = await sharp(input).metadata();
  const { width, height } = meta;
  const box = cropBox(file, width, height);

  const base = path.parse(file).name;
  const ext = meta.format === 'jpeg' ? 'jpg' : 'png';
  const outputName = `${base}.${ext}`;
  const output = path.join(OUT, outputName);

  let pipeline = sharp(input).extract(box);

  if (ext === 'jpg') {
    pipeline = pipeline.jpeg({ quality: 88, mozjpeg: true });
  } else {
    pipeline = pipeline.png({ compressionLevel: 9 });
  }

  await pipeline.toFile(output);
  console.log(`OK ${file} -> cropped/${outputName} (${width}x${height} -> ${box.width}x${box.height})`);
  return outputName;
}

async function main() {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

  const files = fs.readdirSync(DIR).filter((f) => /\.(png|jpe?g)$/i.test(f) && !f.startsWith('.'));

  const mapping = {};
  for (const file of files) {
    const out = await processFile(file);
    mapping[file] = `assets/projects/sebha/cropped/${out}`;
  }

  console.log('\nMapping for projects-data.js:');
  console.log(JSON.stringify(mapping, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
