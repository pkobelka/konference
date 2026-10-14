// Snímek po snímku: render(t) → screenshot → ffmpeg (deterministické). Použití: node render.js výstup.mp4
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const { spawn } = require('child_process'); const path=require('path');
const FPS = 30, out = process.argv[2] || 'video_noaudio.mp4';
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  await p.goto('file://' + path.resolve(__dirname, 'sec27.html') + '?rec=1');
  await p.waitForTimeout(1000); await p.evaluate(() => document.fonts.ready);
  const T = await p.evaluate(() => window.TOTAL), n = Math.round(T * FPS);
  const f = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '20', '-pix_fmt', 'yuv420p', out], { stdio: ['pipe', 'ignore', 'inherit'] });
  for (let i = 0; i < n; i++) {
    await p.evaluate(t => window.render(t), i / FPS);
    const buf = await p.screenshot({ type: 'jpeg', quality: 92 });
    if (!f.stdin.write(buf)) await new Promise(r => f.stdin.once('drain', r));
    if (i % 300 === 0) console.log(i, '/', n);
  }
  f.stdin.end(); await new Promise(r => f.on('close', r)); await b.close(); console.log('done', T);
})();
