// Service worker průvodce: upozornění budíku + práce bez signálu.
// Stránka: nejdřív síť (vždy nejnovější verze), bez signálu poslední uložená.
// Obrázky, ikony a písma: z mezipaměti, na pozadí se obnoví. Firebase a počasí se necachují (data drží stránka sama).
const CACHE = "pruvodce-v4";
const PRED = [
  "./",
  "program.js",
  "manifest.webmanifest",
  "../ikony/favicon-32.png",
  "../ikony/favicon-64.png",
  "../ikony/apple-touch-icon.png",
  "../ikony/ikona-192.png",
  "../obrazky/cislo31.webp",
  "../obrazky/qr-pruvodce.svg",
  "../obrazky/fleky/flek01.webp",
  "../obrazky/fleky/flek02.webp",
  "../obrazky/fleky/flek03.webp",
  "../obrazky/fleky/flek04.webp",
  "../obrazky/fleky/flek05.webp",
  "../obrazky/fleky/flek06.webp",
  "../obrazky/fleky/flek07.webp",
  "../obrazky/fleky/flek08.webp",
  "../obrazky/fleky/flek09.webp",
  "../obrazky/fleky/flek10.webp",
  "../obrazky/fleky/flek11.webp",
  "../obrazky/fleky/flek12.webp",
  "../obrazky/fleky/flek13.webp",
  "../obrazky/fleky/flek14.webp",
  "../obrazky/fleky/flek15.webp",
  "../obrazky/fleky/flek16.webp",
  "../obrazky/fleky/flek17.webp",
  "../obrazky/loga/asio-tech.webp",
  "../obrazky/loga/avk.webp",
  "../obrazky/loga/bd-sensors.webp",
  "../obrazky/loga/comac-cal.webp",
  "../obrazky/loga/czwa.webp",
  "../obrazky/loga/disa.webp",
  "../obrazky/loga/endress-hauser.webp",
  "../obrazky/loga/energie-ag-bohemia.webp",
  "../obrazky/loga/envi-pur.webp",
  "../obrazky/loga/fontana.webp",
  "../obrazky/loga/gdf.webp",
  "../obrazky/loga/hach.webp",
  "../obrazky/loga/hanna-instruments.webp",
  "../obrazky/loga/hawle.webp",
  "../obrazky/loga/huber.webp",
  "../obrazky/loga/in-eko-team.webp",
  "../obrazky/loga/ivodarenstvi-cz.webp",
  "../obrazky/loga/kaeser.webp",
  "../obrazky/loga/kapka.webp",
  "../obrazky/loga/kemifloc.webp",
  "../obrazky/loga/krohne.webp",
  "../obrazky/loga/ksb.webp",
  "../obrazky/loga/kunst.webp",
  "../obrazky/loga/lk-pumpservice.webp",
  "../obrazky/loga/loga.json",
  "../obrazky/loga/mivalt.webp",
  "../obrazky/loga/moderni-obec.webp",
  "../obrazky/loga/mov.webp",
  "../obrazky/loga/pct.webp",
  "../obrazky/loga/pft.webp",
  "../obrazky/loga/schneider-electric.webp",
  "../obrazky/loga/sensus.webp",
  "../obrazky/loga/shs.webp",
  "../obrazky/loga/sovak.webp",
  "../obrazky/loga/stavebniserver-com.webp",
  "../obrazky/loga/technoaqua.webp",
  "../obrazky/loga/technoma.webp",
  "../obrazky/loga/vae-controls.webp",
  "../obrazky/loga/vak-jablonne-n-o.webp",
  "../obrazky/loga/vhos.webp",
  "../obrazky/loga/vodni-hospodarstvi.webp",
  "../obrazky/loga/wilo.webp",
  "../obrazky/loga/zemsky.webp"
];
self.addEventListener("install", e => {
  self.skipWaiting();
  // po jednom – chybějící soubor nezastaví zbytek
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(PRED.map(u => c.add(new Request(u, { cache: "reload" })).catch(() => {})))));
});
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(k => Promise.all(k.filter(n => n.startsWith("pruvodce-") && n !== CACHE).map(n => caches.delete(n)))).then(() => self.clients.claim())
));
const STRANKA = new URL("./", self.registration.scope).href;
function zeSite(req, ms) {   // síť s časovým limitem (slabý signál v sále)
  return new Promise((ok, ko) => {
    const t = setTimeout(() => ko(new Error("timeout")), ms);
    fetch(req).then(r => { clearTimeout(t); ok(r); }, er => { clearTimeout(t); ko(er); });
  });
}
async function zKese(m, req) {   // uložený sborník: pdf.js chce jen kusy (Range) → vrátit 206 s výřezem
  const rng = /bytes=(\d+)-(\d*)/.exec(req.headers.get("range") || "");
  if (!rng) return m;
  const b = await m.blob(), od = +rng[1], po = Math.min(rng[2] ? +rng[2] : b.size - 1, b.size - 1);
  return new Response(b.slice(od, po + 1), { status: 206, headers: { "Content-Type": "application/pdf", "Content-Length": String(po - od + 1), "Content-Range": `bytes ${od}-${po}/${b.size}`, "Accept-Ranges": "bytes" } });
}
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const u = new URL(req.url);
  if (/\.pdf$/i.test(u.pathname) || u.href.startsWith("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/")) {   // sborník uložený do telefonu („Uložit do telefonu“)
    e.respondWith(caches.open("sbornik-v1").then(c => c.match(req.url, { ignoreSearch: true })).then(m => m ? zKese(m, req) : fetch(req)));
    return;
  }
  if (req.mode === "navigate" && u.origin === location.origin && u.pathname.startsWith(new URL(STRANKA).pathname)) {
    e.respondWith(zeSite(req, 5000).then(r => {
      if (r.ok) { const k = r.clone(); caches.open(CACHE).then(c => c.put(STRANKA, k)); }
      return r;
    }).catch(() => caches.match(STRANKA).then(r => r || fetch(req))));
    return;
  }
  if (u.origin === location.origin && u.pathname.endsWith("/program.js")) {   // program: nejdřív síť, bez signálu uložený
    e.respondWith(zeSite(req, 4000).then(r => { if (r.ok) { const k = r.clone(); caches.open(CACHE).then(c => c.put(req, k)); } return r; })
      .catch(() => caches.match(req, { ignoreSearch: true })));
    return;
  }
  const staticke = (u.origin === location.origin && /\.(webp|png|svg|jpg|jpeg|webmanifest|js|css)$/i.test(u.pathname)) ||
    u.hostname === "fonts.googleapis.com" || u.hostname === "fonts.gstatic.com";
  if (!staticke) return;
  e.respondWith(caches.open(CACHE).then(c => c.match(req).then(m => {
    const sit = fetch(req).then(r => { if (r.ok || r.type === "opaque") c.put(req, r.clone()); return r; });
    if (m) { e.waitUntil(sit.catch(() => {})); return m; }
    return sit;
  })));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window" }).then(l => l.length ? l[0].focus() : self.clients.openWindow("./")));
});
