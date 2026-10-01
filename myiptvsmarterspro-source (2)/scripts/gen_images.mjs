import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT = '/home/z/my-project/myiptvsmarterspro/public/images';
fs.mkdirSync(OUT, { recursive: true });

const NOTEXT = 'no text, no words, no letters, no watermark, no logos of real brands';

const JOBS = [
  // Brand
  ['logo-mark', '1024x1024', `Premium modern logo mark for an IPTV streaming service: a glossy play button triangle inside a rounded TV screen shape, split into French tricolor blue-white-red vertical accent stripes on the left edge, deep blue and vivid red gradient, subtle 3D depth, dark navy background, minimal, clean vector style, centered, ${NOTEXT}`],
  // Homepage
  ['hero', '1344x768', `Cozy modern French living room in the evening, large flat 4K smart TV on the wall displaying a colorful grid of streaming TV channels and a football match, comfortable sofa with red and blue accent cushions, warm ambient lighting, cinematic photography, premium streaming service advertisement style, high quality, detailed, ${NOTEXT}`],
  ['devices', '1344x768', `Flat lay of streaming devices on a clean light desk: large smart TV screen showing colorful channel grid, a small TV streaming stick, a smartphone playing live football, a tablet with cinema posters, a laptop, modern minimal product photography, soft shadows, light background with subtle French red and blue accent objects, ${NOTEXT}`],
  ['vod', '1344x768', `Wall of colorful generic cinema movie posters in a modern hallway, abstract vivid poster designs with gradients and silhouettes, moody gallery lighting, premium video on demand concept, cinematic photography, ${NOTEXT}`],
  ['sport', '1344x768', `Dramatic football stadium at night during a match, viewed from the stands, bright floodlights, green pitch with players as small silhouettes, vibrant atmosphere, crowd with red and blue flags, sports broadcasting style photography, ${NOTEXT}`],
  ['avatar', '1024x1024', `Friendly professional portrait of a 35 year old French male tech reviewer and streaming writer, short brown hair, light beard, wearing a dark navy casual shirt, warm smile, modern office with TV screens softly blurred behind, natural light, professional headshot photography, ${NOTEXT}`],
  // App tiles (6)
  ['app-smarters', '1024x1024', `Modern mobile app icon for an IPTV player application: rounded square icon, glossy TV screen symbol with a play button, rich blue and purple gradient, subtle glass reflection, flat design with slight 3D depth, centered on plain very dark background, ${NOTEXT}`],
  ['app-tivimate', '1024x1024', `Modern mobile app icon for an IPTV player application: rounded square icon, stylized play button with channel list bars, warm orange and deep amber gradient, subtle glass reflection, flat design with slight 3D depth, centered on plain very dark background, ${NOTEXT}`],
  ['app-ibo', '1024x1024', `Modern mobile app icon for an IPTV player application: rounded square icon, stylized TV with antenna waves, vivid violet and magenta gradient, subtle glass reflection, flat design with slight 3D depth, centered on plain very dark background, ${NOTEXT}`],
  ['app-flix', '1024x1024', `Modern mobile app icon for an IPTV player application: rounded square icon, stylized film reel with a play triangle, deep red and crimson gradient, subtle glass reflection, flat design with slight 3D depth, centered on plain very dark background, ${NOTEXT}`],
  ['app-smartone', '1024x1024', `Modern mobile app icon for an IPTV player application: rounded square icon, stylized number one in a circle of streaming dots, teal and emerald green gradient, subtle glass reflection, flat design with slight 3D depth, centered on plain very dark background, ${NOTEXT}`],
  ['app-xciptv', '1024x1024', `Modern mobile app icon for an IPTV player application: rounded square icon, stylized streaming signal waves over a screen, lime green and chartreuse gradient, subtle glass reflection, flat design with slight 3D depth, centered on plain very dark background, ${NOTEXT}`],
  // Article heroes (10)
  ['a-firestick', '1344x768', `Close-up of a black TV streaming stick remote control on a dark living room table next to a small streaming stick device, TV screen softly blurred in background showing colorful interface, moody tech photography, warm accent light, ${NOTEXT}`],
  ['a-androidtv', '1344x768', `Black Android TV set-top box with a compact remote control on a modern TV console, large smart TV behind showing a colorful channel grid interface, clean tech product photography, light room, ${NOTEXT}`],
  ['a-vs', '1344x768', `Two large smart TVs side by side in a modern studio, each displaying a different colorful streaming interface, split lighting blue on the left and orange on the right, versus comparison concept, premium tech photography, ${NOTEXT}`],
  ['a-smarttv', '1344x768', `Large modern smart TV mounted on a bright living room wall displaying a colorful app grid interface with content tiles, minimal Scandinavian interior, daylight, premium product photography, ${NOTEXT}`],
  ['a-iphone', '1344x768', `Hand holding a modern smartphone playing a live football match on a streaming app, comfortable sofa and blurred living room in the background, warm evening light, lifestyle tech photography, ${NOTEXT}`],
  ['a-pc', '1344x768', `Modern laptop on a clean desk displaying a streaming player application with channel list sidebar and a live match, mechanical keyboard, coffee cup, dark stylish workspace with red accent light, tech photography, ${NOTEXT}`],
  ['a-troubleshoot', '1344x768', `Person on a sofa holding a remote looking at a TV showing a loading spinner and buffering icon, frustrated but calm, evening living room, relatable tech troubleshooting scene, cinematic photography, ${NOTEXT}`],
  ['a-epg', '1344x768', `Large smart TV screen filling the frame showing a colorful electronic program guide grid with time rows and channel cells in blue and white, remote control in the foreground, clean tech photography, ${NOTEXT}`],
  ['a-code', '1344x768', `Concept image of a subscription activation: a TV screen with a glowing keypad and checkmark success symbol, a streaming stick and an envelope with a code card on a dark desk, blue and red glow, premium tech photography, ${NOTEXT}`],
  ['a-best', '1344x768', `Podium with three screens: a large golden trophy on a central smart TV displaying a football match, smaller TVs on the sides, dark premium stage with red and blue spotlights, award concept photography, ${NOTEXT}`],
];

async function main() {
  const zai = await ZAI.create();
  const ok = [], fail = [];
  for (const [name, size, prompt] of JOBS) {
    const file = path.join(OUT, `${name}.png`);
    if (fs.existsSync(file) && fs.statSync(file).size > 10000) {
      console.log(`SKIP (exists): ${name}`);
      ok.push(name);
      continue;
    }
    let done = false;
    for (let attempt = 1; attempt <= 3 && !done; attempt++) {
      try {
        const res = await zai.images.generations.create({ prompt, size });
        const b64 = res?.data?.[0]?.base64;
        if (!b64) throw new Error('empty response');
        const buf = Buffer.from(b64, 'base64');
        fs.writeFileSync(file, buf);
        console.log(`OK: ${name} (${(buf.length / 1024).toFixed(0)} KB)`);
        ok.push(name);
        done = true;
      } catch (e) {
        console.error(`ERR ${name} attempt ${attempt}: ${e.message}`);
        await new Promise(r => setTimeout(r, 1500 * attempt));
      }
    }
    if (!done) fail.push(name);
  }
  console.log(`\nDONE ok=${ok.length} fail=${fail.length} ${fail.join(',')}`);
  if (fail.length) process.exitCode = 1;
}
main().catch(e => { console.error('FATAL', e); process.exit(1); });
