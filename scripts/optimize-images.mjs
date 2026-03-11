import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ATTACHED_ASSETS = path.resolve('attached_assets');
const UNUSED_DIR = path.join(ATTACHED_ASSETS, '_unused');
const PUBLIC_DIR = path.resolve('client/public');
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 80;
const PNG_QUALITY = 80;
const TARGET_MAX_KB = 200;

// Read used images list
const usedImagesRaw = fs.readFileSync('/tmp/used_images.txt', 'utf-8').trim().split('\n');
const usedBasenames = new Set(usedImagesRaw.map(f => path.basename(f)));

const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif']);

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!IMAGE_EXTS.has(ext)) return;

  const stats = fs.statSync(filePath);
  const originalKB = stats.size / 1024;
  const basename = path.basename(filePath);

  try {
    let pipeline = sharp(filePath);
    const metadata = await pipeline.metadata();

    // Resize if wider than MAX_WIDTH
    if (metadata.width && metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
    }

    let outputBuffer;
    if (ext === '.png') {
      outputBuffer = await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toBuffer();
    } else if (ext === '.webp') {
      outputBuffer = await pipeline.webp({ quality: JPEG_QUALITY }).toBuffer();
    } else if (ext === '.avif') {
      outputBuffer = await pipeline.avif({ quality: JPEG_QUALITY }).toBuffer();
    } else {
      // jpg/jpeg
      outputBuffer = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
    }

    const newKB = outputBuffer.length / 1024;

    // Only write if we actually reduced size
    if (newKB < originalKB) {
      fs.writeFileSync(filePath, outputBuffer);
      console.log(`  Compressed: ${basename} ${originalKB.toFixed(0)}KB -> ${newKB.toFixed(0)}KB (${((1 - newKB / originalKB) * 100).toFixed(0)}% smaller)`);
    } else {
      console.log(`  Skipped: ${basename} (already optimal at ${originalKB.toFixed(0)}KB)`);
    }
  } catch (err) {
    console.error(`  ERROR: ${basename}: ${err.message}`);
  }
}

async function moveUnused() {
  if (!fs.existsSync(UNUSED_DIR)) {
    fs.mkdirSync(UNUSED_DIR, { recursive: true });
  }

  const allFiles = fs.readdirSync(ATTACHED_ASSETS);
  let movedCount = 0;

  for (const file of allFiles) {
    if (file === '_unused' || file === 'generated_images') continue;
    const ext = path.extname(file).toLowerCase();
    // Move unused images AND zip files
    if ((IMAGE_EXTS.has(ext) || ext === '.zip') && !usedBasenames.has(file)) {
      const src = path.join(ATTACHED_ASSETS, file);
      const dest = path.join(UNUSED_DIR, file);
      if (fs.statSync(src).isFile()) {
        fs.renameSync(src, dest);
        movedCount++;
      }
    }
  }

  // Check generated_images subdirectory
  const genDir = path.join(ATTACHED_ASSETS, 'generated_images');
  if (fs.existsSync(genDir)) {
    const genFiles = fs.readdirSync(genDir);
    for (const file of genFiles) {
      const fullRelPath = `generated_images/${file}`;
      const fullBasename = file;
      // Check if either the basename or the full relative path is used
      const isUsed = usedBasenames.has(fullBasename) ||
                     usedImagesRaw.some(u => u.includes(fullBasename));
      if (!isUsed) {
        const src = path.join(genDir, file);
        const dest = path.join(UNUSED_DIR, file);
        if (fs.statSync(src).isFile()) {
          fs.renameSync(src, dest);
          movedCount++;
        }
      }
    }
  }

  console.log(`\nMoved ${movedCount} unused files to _unused/`);
}

async function optimizeOGImage() {
  const ogPath = path.join(PUBLIC_DIR, 'og-image.png');
  if (!fs.existsSync(ogPath)) {
    console.log('No og-image.png found');
    return;
  }
  const stats = fs.statSync(ogPath);
  const originalKB = stats.size / 1024;

  const outputBuffer = await sharp(ogPath)
    .resize(1200, 630, { fit: 'cover' })
    .png({ quality: 80, compressionLevel: 9 })
    .toBuffer();

  const newKB = outputBuffer.length / 1024;
  fs.writeFileSync(ogPath, outputBuffer);
  console.log(`\nOG Image: ${originalKB.toFixed(0)}KB -> ${newKB.toFixed(0)}KB`);
}

async function main() {
  console.log('=== Christmas NW Image Optimization ===\n');

  // Step 1: Move unused files
  console.log('Step 1: Moving unused images...');
  await moveUnused();

  // Step 2: Compress all remaining images in attached_assets
  console.log('\nStep 2: Compressing images in attached_assets/...');
  const files = fs.readdirSync(ATTACHED_ASSETS).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return IMAGE_EXTS.has(ext) && f !== '_unused';
  });

  for (const file of files) {
    await optimizeImage(path.join(ATTACHED_ASSETS, file));
  }

  // Also compress generated_images if any remain
  const genDir = path.join(ATTACHED_ASSETS, 'generated_images');
  if (fs.existsSync(genDir)) {
    const genFiles = fs.readdirSync(genDir).filter(f => IMAGE_EXTS.has(path.extname(f).toLowerCase()));
    for (const file of genFiles) {
      await optimizeImage(path.join(genDir, file));
    }
  }

  // Step 3: Optimize OG image
  console.log('\nStep 3: Optimizing OG image...');
  await optimizeOGImage();

  // Step 4: Compress favicon/logo PNGs in public
  console.log('\nStep 4: Compressing public PNGs...');
  for (const file of ['favicon.png', 'apple-touch-icon.png', 'logo.png']) {
    const filePath = path.join(PUBLIC_DIR, file);
    if (fs.existsSync(filePath)) {
      await optimizeImage(filePath);
    }
  }

  console.log('\n=== Done! ===');
}

main().catch(console.error);
