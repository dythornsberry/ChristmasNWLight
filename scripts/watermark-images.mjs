// Stamps "ChristmasNW.com" into every install photo the site uses, so a saved copy still carries it.
// Run after adding photos: node scripts/watermark-images.mjs
// Files are stamped in place once; attached_assets/.watermarked.json remembers them so a re-run skips them.
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const ASSETS = path.resolve('attached_assets');
const MANIFEST = path.join(ASSETS, '.watermarked.json');
const TEXT = 'ChristmasNW.com';
// Brand graphics and people, not install photos
const SKIP = [/logo/i, /box-truck/i, /-ram-/i, /dylan_owner/i, /favicon/i];

const hash = (buf) => crypto.createHash('sha256').update(buf).digest('hex');

const listFiles = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? listFiles(full) : [full];
  });

// Every @assets image the app imports, plus the city photo folders (loaded by glob)
function usedImages() {
  const used = new Set();
  for (const file of listFiles(path.resolve('client/src')).filter((f) => /\.(tsx?|jsx?)$/.test(f))) {
    for (const [, rel] of fs.readFileSync(file, 'utf8').matchAll(/@assets\/([^"'`\s]+\.(?:jpe?g|png|webp))/g)) {
      used.add(path.join(ASSETS, rel));
    }
  }
  const cities = path.join(ASSETS, 'cities');
  if (fs.existsSync(cities)) {
    listFiles(cities).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).forEach((f) => used.add(f));
  }
  return [...used].filter((f) => fs.existsSync(f) && !SKIP.some((re) => re.test(f))).sort();
}

function stampSvg(width, height) {
  const size = Math.max(13, Math.round(width * 0.03));
  const padX = Math.round(size * 0.7);
  const padY = Math.round(size * 0.45);
  const boxW = Math.round(size * 0.62 * TEXT.length + padX * 2);
  const boxH = size + padY * 2;
  const margin = Math.round(size * 0.8);
  const x = width - boxW - margin;
  // Cards crop photos to 4:3 from the center, so on tall photos stamp the bottom of that center band
  const visibleBottom = height > width * 0.75 ? (height + width * 0.75) / 2 : height;
  const y = Math.round(visibleBottom - boxH - margin);
  return Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect x="${x}" y="${y}" width="${boxW}" height="${boxH}" rx="${Math.round(size * 0.3)}" fill="#000" fill-opacity="0.55"/>
    <text x="${x + boxW / 2}" y="${y + boxH / 2}" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="${size}"
      fill="#fff" fill-opacity="0.92" text-anchor="middle" dominant-baseline="central">${TEXT}</text>
  </svg>`);
}

async function stamp(file) {
  const input = fs.readFileSync(file);
  const image = sharp(input).rotate();
  const { width, height } = await image.clone().toBuffer({ resolveWithObject: true }).then((r) => r.info);
  const stamped = image.composite([{ input: stampSvg(width, height) }]);
  const ext = path.extname(file).toLowerCase();
  const out =
    ext === '.png' ? await stamped.png({ compressionLevel: 9 }).toBuffer()
    : ext === '.webp' ? await stamped.webp({ quality: 80 }).toBuffer()
    : await stamped.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  fs.writeFileSync(file, out);
  return hash(out);
}

const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {};
let stampedCount = 0;
for (const file of usedImages()) {
  const rel = path.relative(ASSETS, file);
  if (manifest[rel] === hash(fs.readFileSync(file))) continue;
  manifest[rel] = await stamp(file);
  stampedCount++;
}
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
console.log(`Stamped ${stampedCount} image(s); ${Object.keys(manifest).length} total watermarked.`);
