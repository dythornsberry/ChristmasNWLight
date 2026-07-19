// One-off: regenerate a small favicon.ico (16/32/48) from client/public/favicon.png
import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFile } from "node:fs/promises";

const src = "client/public/favicon.png";
const sizes = [16, 32, 48];
const pngs = await Promise.all(
  sizes.map((size) => sharp(src).resize(size, size).png().toBuffer())
);
const ico = await pngToIco(pngs);
await writeFile("client/public/favicon.ico", ico);
console.log(`favicon.ico written: ${ico.length} bytes`);
