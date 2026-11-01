# City job photos

Drop real install photos into a folder named after the city page's slug, e.g.

    attached_assets/cities/bellevue/01-warm-white-gables-and-wreath.webp

City pages pick these up automatically (first 6 per city, sorted by file name) and
show them under "Recent installs in {City}". The file name becomes the alt text, minus
the leading number. Cities without photos fall back to a rotating set of gallery photos.
Crop to 4:3 (the cards are 4:3), keep files under ~300 KB, strip GPS, and blur plates
and house numbers.

Then stamp the watermark: `node scripts/watermark-images.mjs` (every new photo, every time).
