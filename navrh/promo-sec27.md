# Upoutávka – POZVÁNKA na 31. ročník konference (scénář, 14. 10. 2026, verze 3 – vyrenderováno)

**Upřesnění uživatele:** ne video o aplikaci, ale **pozvánka na konferenci** (program ještě není). Lehké, pozývací:
zveme vás · 31. ročník · Seč · termín · a máme pro vás připravenou aplikaci (co umí – jen krátce).
**Formát:** ~45–50 s, jen hudba, velké titulky; 16:9 (web, e-mail, plátno) + 9:16 (mobil, WhatsApp).
**Vizuál:** fleky bakterií, „31“, papírový podklad, fialová – stejně jako pozvánka a průvodce; voda / přehrada Seč.

| # | Obraz | Titulek | Délka |
|---|---|---|---|
| 1 | Fleky bakterií se vlní jako pod mikroskopem | „Nové metody a postupy při provozování ČOV“ | 7,2 s |
| 2 | Fleky se složí do velké **31** | „**31. ročník**“ · memoriál Ing. Jakuba S. Čecha, CSc. | 4,8 s |
| 3 | Klidná hladina / přehrada, špendlík na mapě | „Kongres hotel Jezerka, **Seč**“ | 4,8 s |
| 4 | Kalendář, zakroužkované dny | „**27.–28. dubna 2027**“ | 4,8 s |
| 5 | Ikony témat (přednášky, odborníci, partneři, večer) | „Přednášky. Diskuze. Setkání. **Večer s přáteli.**“ | 7,2 s |
| 5b | Dva medailonky + řádek o zakladatelích | „Odborný program připravují“ **Ing. Filip Wanner, Ph.D.** (ENERGIE AG BOHEMIA) a **Ing. Martin Srb, Ph.D.** (PVK) · „Navazujeme na tradici, kterou založili prof. Ing. Jiří Wanner, DrSc. a Ing. Vladimír Langer.“ · „Program 31. ročníku zveřejníme během zimy.“ | 7,2 s |
| 6 | Telefon s průvodcem Seč 27 (3 rychlé obrazovky) | „Tentokrát s **vlastní aplikací**: program, dotazy, aktuality, vše v telefonu.“ | 9,6 s |
| 7 | Logo 31 + VHOS, CzWA | „**Zveme vás.** Přihlášky brzy na vhos.cz“ · QR na průvodce | 7,2 s |
| 8 | Fleky se rozestoupí, klidné doznění hudby | „**Těšíme se na vás v Seči!**“ · VHOS, a.s. a CzWA | 4,8 s |

Celkem 57,6 s (násobky taktu 2,4 s). Hudba generovaná, optimistická, ne hlučná.
Postup jako u Floriána (`pkobelka/florian/promo/src-hasici/`: render(t) → Playwright → ffmpeg, hudba numpy).
Výstup `promo/` v tomto repu + stránka se sdílením (WhatsApp, Facebook, Kopírovat, Stáhnout).

**Pozor (uživatel):** nezmiňovat pondělní příjezd ani slavnostní večeři – jsou jen pro vybrané osoby (~40 lidí).

**Podle článků na LinkedInu (Petr):** pořadatelé = **VHOS, a.s. a CzWA** (ENERGIE AG BOHEMIA je generální partner →
ve videu ne, partneři 2027 ještě nejsou známi). Program připravují Filip Wanner a Martin Srb; Jiří Wanner + Vladimír Langer
jsou zakladatelé tradice.

**Soubory:** `promo/src/sec27.html` (šablona, `render(t)`), `promo/src/render.js` (snímky → ffmpeg), `promo/src/music_sec27.py`
(hudba → `music_sec27.wav`, necommitováno – vygeneruj znovu), výstup `promo/sec27-pozvanka.mp4` + `.jpg`, sdílení `promo/video.html`.
Re-render: `cd promo/src && python3 music_sec27.py && node render.js /tmp/x.mp4 && ffmpeg -i /tmp/x.mp4 -i music_sec27.wav -c:v copy -c:a aac -b:a 160k -af afade=t=out:st=55.6:d=2 -shortest -movflags +faststart ../sec27-pozvanka.mp4`
