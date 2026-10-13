# Kde jsme skončili – Konference Seč 2027

Stav k 13. 10. 2026. Pro pokračování v novém rozhovoru stačí napsat:
**„Pokračujeme s konferencí, přečti si POKRACOVANI.md a POZNAMKY.md.“**

Všechno je ve větvi `claude/adoring-knuth-vpd164` repozitáře `pkobelka/konference`.

## Odkazy na ukázky (soukromé, sdílení přes tlačítko Sdílet na stránce)

| Co | Odkaz | Soubor |
|---|---|---|
| **Průvodce pro všechny účastníky** (bez přihlášení) | https://claude.ai/artifact/8Pd4XvrWtu5nHH1p91T4NH | `navrh/pruvodce.html` |
| Ukázka aplikace s osobní částí (pokoj, večeře, přihláška) | https://claude.ai/artifact/PxUmJWfjsqRH8bri8sjY57 | `navrh/ukazka-aplikace.html` |
| Prezentace pro kolegy (11 snímků) | https://claude.ai/artifact/2RU8MSAEmcrPKiNHts5yz1 | `navrh/prezentace/` |

Soubory v repozitáři jsou zdroj. Úprava = upravit soubor a znovu zveřejnit na stejný odkaz.

## Co je hotové

### Průvodce pro účastníky (`navrh/pruvodce.html`) – hlavní výstup posledního dne
Veřejná PWA bez přihlášení, mobil / tablet / notebook (od 820 px menu nahoře).
Obsah podle **pozvánky 2026** (skutečný program a partneři):
- **Domů:** hlavní panel (30. ročník, čísla), karta **Dnes** (datum, živé hodiny, svátek,
  počasí v Seči přes Open-Meteo – v náhledu se nenačte, na webu ano), karta **Právě teď**
  (co běží podle harmonogramu, do kolika, co následuje; v ukázce posuvník času),
  dlaždice, generální partneři, aktuality.
- **Program:** Po / Út / St, bloky s předsedajícím, hledání, podrobnosti k obědu, přestávkám
  a společenskému večeru („doplní pořadatel“), zvýraznění běžícího bodu.
  - **? Dotaz** k přednášce – vidí všichni, „+1 Mám stejný“, řazení podle zájmu.
  - **Pohled předsedajícího** u bloku – velké písmo, odškrtnutí „Přečteno“.
  - **✎ Poznámka** – soukromá poznámka (místo hvězdičky – lidé sedí na všech přednáškách).
- **Partneři:** generální / hlavní / odborní / mediální (iniciály místo log), profil + odkaz
  na přednášky partnera; běžící pás log nahoře.
- **Fotky:** alba 2027 / 2026 / archiv, prohlížení na celou obrazovku (šipky, přejetí prstem) –
  zatím zástupné plochy, fotky nahraje pořadatel.
- **Doprava:** svoz Kraskov ⇄ Jezerka (časy „doplníme“), adresa, GPS, mapy.
- **Info:** nepovinný **Můj profil** (jméno, firma → dotazy se podepíšou samy, jen v telefonu),
  poplatky, ČKAIT, sborník, kontakty.
- V ukázce se dotazy, poznámky a profil ukládají jen v daném zařízení.

### Ukázka s osobní částí (`navrh/ukazka-aplikace.html`)
Přihláška v aplikaci (pole podle přihlášky hostů), kód + PIN, „pokoj přidělujeme“,
Můj pobyt (pokoj, spolubydlící, večeře A/B/C, QR, zprávy pořadateli), reklamní plochy
partnerů, plánek areálu, historie konference, „Seč 2028“.
*Pozor:* Kraskov je tam omylem jako ubytování od pořadatele – ve skutečnosti jen svoz.

### Podklady od uživatele – zpracováno do POZNAMKY.md (bez osobních údajů)
- `Komplet_2026_pro_AI.xlsx` – pokoje (sekce A–D, „k“ = komfort 2+1), přednášející, slavnostní
  večeře VHOS, jídla 1–3, vystavovatelé, rozpočet.
- `Seznam_přihlášených.xls` – export z webu (Veřejnost automaticky; vystavující, VHOS a hosté,
  přednášející, YWP ručně), 424 lidí / 34 firem v roce 2026.
- Přihláška hostů a přihláška YWP CzWA (Word), pozvánka 2026 (PDF), 30 let konference (PDF).
- **Samotné soubory nejsou uložené** (obsahují osobní údaje). Pro další práci s daty je
  bude potřeba nahrát znovu.

## Co dál (návrh pořadí)

1. **Aplikace pořadatele (`index.html`) – evidence a kontroly**, sjednotit dvě dnešní evidence
   (Seznam přihlášených + Komplet) do jedné karty člověka:
   kategorie, zdroj (web / ručně / partner / pozvánka), fakturace, noci, pokoj a lůžko,
   slavnostní večeře VHOS vs. jídlo 1–3, Ž/M, VIP „sám“, Kraskov = jen svoz.
   Kontroly: přeplněný pokoj, komfort 2+1, dvě firmy na pokoji, slíbený pokoj bez lůžka,
   volná místa, kapacita slavnostní večeře (38 / 42 / 46), import exportu z webu.
2. **Průvodce na web** (GitHub Pages): manifest + ikona + offline, dotazy sdílené přes Firebase,
   pohled předsedajícího jen pro předsedající, data 2027 (program, partneři, loga, menu,
   časy svozu, fotky).
3. Osobní část (přihlášení kódem, potvrzovací e-maily) – až po bodech 1 a 2.

## Ještě chybí od uživatele
- Termín 2027 a 2028, program 2027, menu (oběd, jídla 1–3), program společenského večera.
- Časy svozu z Kraskova, parkování, plánky hotelu.
- Loga, texty a videa partnerů; fotky z minulých ročníků.

## Pravidla
- Seznamy s e-maily a telefony **nikdy do GitHubu** ani do ukázek (repo je pro Pages veřejné).
- Komunikace česky; uživatel nejdřív sbírá podklady, pak se zapracovává najednou.
