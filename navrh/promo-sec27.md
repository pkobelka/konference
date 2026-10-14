# Upoutávka „Seč 27 – průvodce konferencí“ – návrh scénáře (14. 10. 2026)

**Cíl:** aby si účastníci průvodce otevřeli a přidali na plochu. **Kde se pustí:** v pozvánkovém e-mailu (odkaz na
stránku s videem), na webu vhos.cz / czwa.cz, na **plátně v sále o přestávkách**, ve WhatsAppu / na Facebooku.
**Formát:** 60 s, jen hudba (bez mluveného slova – syntetický hlas zněl u Floriána roboticky), titulky velkým písmem.
Dvě verze: **16:9** (plátno, web) a **9:16 na výšku** (mobil, sdílení). Vizuál = fleky bakterií, „31“, papírový podklad,
fialová; obrazovky = **skutečné screenshoty průvodce** (Playwright, data 2027, ukázková karta „Jana Ukázková“).

| # | Scéna | Obraz | Titulek | Délka |
|---|---|---|---|---|
| 1 | Úvod | fleky bakterií se „rozplývají“ jako pod mikroskopem, skládají se do **31** | „31. ročník. Seč. Duben 2027.“ | 7,2 s |
| 2 | Odhalení | logo 31 + název, telefon vyjede zespodu | „Celá konference. **V kapse.**“ | 4,8 s |
| 3 | Moje registrace | telefon: karta Moje registrace (noci, pokoj, spolubydlící, večeře) | „Kde spím. S kým. **Co si dám k večeři.**“ | 9,6 s |
| 4 | Program | Právě probíhá + průběh, posun na další přednášku, 🔔 Upozornit 10 min předem | „Co právě běží. **Co bude dál.**“ | 9,6 s |
| 5 | Dotazy | 🎤 namluvení → text se sám napíše → u souseda naskočí **①** → předsedající „▶ Přehrát do sálu“ | „Zeptejte se. **Klidně hlasem.**“ | 9,6 s |
| 6 | Na cestu | Počasí v Seči → Navigovat do hotelu → 📣 aktualita „Svoz z Kraskova…“ | „Počasí, cesta, novinky. **Hned.**“ | 7,2 s |
| 7 | Partneři | pás log (generální zlatě, hlavní stříbrně, odborní ve dvou řadách) | „Díky našim partnerům.“ | 4,8 s |
| 8 | Výzva | velký **QR kód** + 3 kroky (naskenovat → Přidat na plochu → hotovo), datum a místo | „Naskenujte. **Přidejte na plochu.** Hotovo.“ · 27.–28. 4. 2027 · Kongres hotel Jezerka, Seč | 9,6 s |

Celkem ≈ 62 s (délky = násobky taktu 2,4 s → střihy na dobu). Hudba: svižná, optimistická, generovaná (jako
`florian/promo/music_v2.py` / `music_hasici.py`), akord na scénu, drop při odhalení „31“.

**Postup (převzít z Floriána):** `pkobelka/florian/promo/src-hasici/` – šablona HTML s funkcí `render(t)`,
`build.py` (assety jako data-URI), `render.js` (Playwright snímek po snímku 30 fps → ffmpeg), hudba numpy → WAV,
mux přes imageio-ffmpeg. Výstup do `promo/` v tomto repu: `sec27-promo.mp4` (16:9), `sec27-promo-vysku.mp4` (9:16),
přehrávač + stránka `promo/video.html` se sdílením (WhatsApp, Facebook, Kopírovat, Stáhnout) a OG náhledem.

**Otázky na uživatele:** pustit i na plátno v sále (pak verze bez zvuku smyčkou)? Zmínit partnery jménem, nebo jen loga?
Ukázat pokoj/spolubydlícího (jde o zajištěné hosty) – nebo pro veřejnost spíš „Moje registrace“ obecně?
