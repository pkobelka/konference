// Leták → PDF (A5) + náhled PNG. Spouštět z kořene repa: node letak/pdf.js
const { chromium } = require('/opt/node22/lib/node_modules/playwright'); const path = require('path');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 560, height: 794 }, deviceScaleFactor: 3 });
  await p.goto('file://' + path.resolve(__dirname, 'iphone.html')); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
  await p.pdf({ path: path.resolve(__dirname, 'seč27-letak-iphone.pdf'), width: '148mm', height: '210mm', printBackground: true });
  await p.addStyleTag({ content: 'html{background:#f6f4ef}.page{margin:0!important;box-shadow:none!important}' });
  await (await p.$('.page')).screenshot({ path: path.resolve(__dirname, 'seč27-letak-iphone.png') });
  await b.close();
})();
