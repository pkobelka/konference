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

## Aplikace pořadatele – 1. dávka změn (13. 10. 2026, ve větvi, ZATÍM NENASAZENO)
Uživatel: priorita je teď **ubytování v aplikaci pořadatele (`index.html`)**, průvodce počká.
Hotovo a otestováno s testovacími daty (bez Firebase):
- **Slavnostní večeře VHOS** jako volba u večeře; ideál/maximum v Nastavení teď platí pro ni,
  běžná večeře (jídla 1–3) se počítá zvlášť; přehled, záložka Večeře, filtr, kontrola kapacity.
- **„Ubytování platí VHOS“** zůstává samostatně (zaměstnanci a hosté VHOS).
- **Bydlí v Kraskově (jen svoz)** – nehlásí „nemá pokoj“, KPI v přehledu, filtr, štítek.
- **Pohlaví Ž/M** u osoby; u pokoje zobrazeno; kontrola **smíšeného pokoje**.
- Kontrola **dvou různých firem na pokoji**.
- **Nárok partnerů** v Nastavení (max. pokojů / lidí podle kategorie) + kontrola (VHOS-placení se nepočítají).
- Pokoje: **počet volných lůžek a přistýlek** pro noc + rozbalovací **„Volná místa v obsazených
  pokojích“** (kolik volných lůžek, pro muže/ženu, kdo tam bydlí).
- Nové kategorie **Vystavující, YWP, Veřejnost**; u osoby **„Odkud přišel“** (pozvánka / partner /
  web / ručně); CSV export doplněn o Kraskov, pohlaví, zdroj.
- Změny jsou jen doplňující – stávající data ve Firebase se nemění.

**Otevřené otázky k nasazení:** (1) jsou ve Firebase už data 2027, nebo loňská? (2) nasadit rovnou
(sloučit do `main` → GitHub Pages), nebo nejdřív pull request ke kontrole?
**Další na řadě:** import exportu z webové e-přihlášky (Veřejnost), pak sjednocení se Seznamem přihlášených.

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

## Test na datech 2026 (13. 10. 2026)
- Uživatel nemá data 2027 → chce aplikaci vyzkoušet na **datech 2026**.
- Převodník Excel → JSON pro import (Nastavení → Import): skript mimo repozitář (osobní údaje),
  postup: list „komplet pokoje“ = 113 pokojů (A 35, B 22, C 40, D 16), přistýlky: apartmá 2,
  komfort 1, C běžné 1 / relax 2, D 0; list „pokoje 2026“ = 103 lidí (pokoj, sekce, firma,
  slavnostní/1–3/nechce, jen Po/Út, platí VHOS); „přednášející 26“ = jména, kontakty, Ž/M;
  „večeře 26“ = skupiny slavnostní večeře (VHOS, koncern, hosté, přednášející) a menu.
- **Pevná lůžka: všude odhad 2** (Excel uvádí A 78 / C 78 / D 34 – rozdíl ověřit v záložce Pokoje).
  Pohlaví jen u přednášejících a příjmení na -ová/-á.
- Aplikace na těchto datech hned našla nesrovnalosti Excelu 2026: pokoj C-609 5 lidí na 3 místa,
  2 lidé bez pokoje, 2 bez večeře, smíšené pokoje / dvě firmy na pokoji.
- Nové v Nastavení: **„Vymazat lidi, firmy a pokoje“** (potvrzení SMAZAT, předtím automatická záloha)
  – po testu smazat a začít čistě pro 2027.

### Moje pokoje vs. veřejnost (13. 10. 2026)
- Pořadatel obsazuje **jen pokoje žlutě označené** v Excelu (oranžové = dodatečně, také jeho);
  ostatní si rezervuje veřejnost sama mimo pořadatele. 2026: **61 mých pokojů** (A 15, B 15, C 31), 122 lůžek + 41 přistýlek.
- Aplikace: u pokoje **„můj pokoj“** (`vlastni`); záložka Pokoje ukazuje jen moje (tlačítko
  „Zobrazit i pokoje veřejnosti“ – ty jsou šedé, čárkované); počty a volná lůžka jen z mých;
  přehled „mých pokojů · lůžek + přistýlek“; ve výběru pokoje u osoby jsou moje nahoře, ostatní
  ve skupině „Pokoje veřejnosti“; kontrola „pokoj není mezi mými (žlutými)“.
  Když žádný pokoj nemá „můj“, chová se jako dřív (všechny jsou moje).
- Test 2026: 2 lidé (HAWLE) v pokoji C-605, který není žlutý → aplikace upozorní.

## Ještě chybí od uživatele
- Termín 2027 (2028 = **3.–5. dubna 2028**, příjezd v pondělí 3. 4.), program 2027, menu (oběd, jídla 1–3), program společenského večera.
- Časy svozu z Kraskova, parkování, plánky hotelu.
- Loga, texty a videa partnerů; fotky z minulých ročníků.

## Pravidla
- **Tykáme si, oslovovat „Peťo“** (uživatel Petr Kobelka si to přál 14. 10. 2026).
- Seznamy s e-maily a telefony **nikdy do GitHubu** ani do ukázek (repo je pro Pages veřejné).
- Komunikace česky; uživatel nejdřív sbírá podklady, pak se zapracovává najednou.

### Aplikace pořadatele do mobilu (13. 10. 2026)
- Přidán `manifest.webmanifest`, ikony `ikony/` (VHOS Seč s vlnkami), meta značky pro iPhone/Android
  → po nasazení jde „Přidat na plochu“ / „Nainstalovat aplikaci“, otevírá se bez lišty prohlížeče.
- Bez service workeru (offline cache) záměrně – data jsou živá z Firebase a stará verze by se nemusela obnovit.
- iPhone: přihlašovací odkaz z e-mailu se otevře v Safari, ne v ikoně na ploše → v aplikaci použít
  „Mám odkaz z e-mailu – vložit ručně“ (zkopírovat odkaz z mailu a vložit). Stačí jednou, přihlášení vydrží.

### Vizuál z původních fleků (13. 10. 2026)
- Z pozvánky 2026 vytaženo **17 původních fleků („bakterie“)** s průhledným pozadím →
  `obrazky/fleky/flek01–17.webp`; původní logo **„30“** → `obrazky/cislo30.webp`.
- Nově složené **„31“** ve stejném stylu (trojka z originálu, jednička z fleků 12 a 6) → `obrazky/cislo31.webp`.
- **Ikona aplikace = varianta E** (4 fleky: 10, 6, 16, 9 na světlém podkladu) – `ikony/` + favicon.
- Do budoucna použít fleky i v průvodci (záhlaví, zástupná loga, fotky).

### Nasazeno 13. 10. 2026
- Vše výše sloučeno do `main` a **nasazeno na https://pkobelka.github.io/konference/** (sestavení GitHub Pages úspěšné).
- Uživatel má **Android** → Chrome → ⋮ → Nainstalovat aplikaci / Přidat na plochu.
- Další krok uživatele: Nastavení → Import → `TEST_konference2026_import.json`, vyzkoušet, pak „Vymazat lidi, firmy a pokoje“.

### Stav k večeru 13. 10. 2026 – uživatel testuje na webu, „vypadá to dobře“
- Firebase pravidla pro `konference2027`, `konference2027_prihlasky`, `konference2027_verejne`
  uživatel přidal a publikoval (projekt moje-budky → Realtime Database → Rules).
- **Testovací data 2026 jsou naimportovaná ve Firebase** (103 lidí, 32 firem, 113 pokojů).
  Před ostrým rokem 2027 smazat: Nastavení → „Vymazat lidi, firmy a pokoje“ (napsat SMAZAT).
- Nasazeno navíc: **hledání nahoře** (lidé, firmy, pokoje, e-mail; klávesa /, šipky, Enter),
  stav účasti **„Jede“ → „Potvrdil“**.
- Pozor při importu: soubor „konference_zaloha_….json“ je záloha (prázdná), testovací je `TEST_konference2026_import.json`.

**Další kroky (návrh):**
1. Zpětná vazba uživatele z testování (co nesedí / chybí) → opravit.
2. Doplnit skutečné počty lůžek u pokojů (všude odhad 2; Excel: A 78, C 78, D 34).
3. **Import exportu webové e-přihlášky** (Seznam přihlášených .xls, list Veřejnost) – doplní nové,
   nezdvojí stávající, označí „web“; kdo chce ubytování, doplní pořadatel.
4. Sjednocení se Seznamem přihlášených (kategorie, fakturace) – jedna karta člověka.
5. Později: průvodce pro účastníky na web (fleky, 31, data 2027), osobní část.
- **Verze aplikace** je vidět vpravo nahoře (a na přihlašovací obrazovce): konstanta `VERZE` v `index.html`.
  **Při každém nasazení zvýšit** (1.2 · 13. 10. 2026 = vše výše). Historie: 1.0 původní, 1.1 pokoje/večeře/Kraskov/kontroly, 1.2 hledání + Potvrdil + verze.
- **Průvodce pro veřejnost nasazen jako ukázka:** https://pkobelka.github.io/konference/pruvodce/
  (`pruvodce/index.html` = `navrh/pruvodce.html` obalené hlavičkou; data podle pozvánky 2026, jen veřejné údaje).
  Při úpravě průvodce upravit `navrh/pruvodce.html` a znovu vygenerovat `pruvodce/index.html`.
- **Průvodce – nový vzhled podle pozvánky (13. 10. večer):** zelená pryč (uživatel: „šílená“) → papírový
  podklad, tmavé písmo, nadpisy IBM Plex Mono (jako pozvánka), akcent fialová z fleků; v záhlaví logo **31**,
  hero s 6 fleky (na PC mřížka vpravo), partneři = kolečka z fleků s iniciálami, fotky = fleky.
  **31. ročník**, termín zatím „duben 2027 · přesný termín upřesníme“ (konstanta `TERMIN`) – **čeká na datum od uživatele**.
  Program je dál ukázka podle 2026 (poznámka v Programu). Počasí na webu funguje živě (ověřil uživatel).
- **Termín 31. ročníku: 27.–28. 4. 2027** (úterý–středa, příjezd v pondělí 26. 4.) – v průvodci (TERMIN, DATES pro „Právě teď“).
  *Pozn.: aplikace pořadatele má termín v Nastavení – testovací data mají 2026.*
- **Loga partnerů** vyříznuta ze zadní strany pozvánky 2026 (42 log: pořadatelé, generální, hlavní,
  odborní, mediální) → `obrazky/loga/*.webp` + `loga.json` (název → soubor). Průvodce je používá
  v pásu log, stěně partnerů, profilu a u generálních na Domů; firmy bez loga mají flek s iniciálami.
- Počasí má nadpis „Počasí v Seči“; v kartě „Právě teď“ tlačítko „Napsat dotaz k této přednášce“.

### Konec dne 13. 10. 2026 – uživatel si prochází
- Odkazy: aplikace pořadatele https://pkobelka.github.io/konference/ (v1.2) ·
  průvodce https://pkobelka.github.io/konference/pruvodce/
- **Průvodce – další krok:** dotazy k přednáškám zatím jen v zařízení → napojit na Firebase
  (uzel např. `konference2027_dotazy`, čtení/zápis pro všechny, mazání jen pořadatel; pohled předsedajícího
  jen pro předsedající/pořadatele) + pravidla do Firebase.
- Čeká se na zpětnou vazbu uživatele k aplikaci pořadatele i průvodci.
- **Průvodce – export poznámek:** v Programu s filtrem „✎ Poznámky“ tlačítka **🖨 Vytisknout / PDF**
  (čistý tiskový výpis: přednáška, den, čas, autoři, poznámka), **⬇ Stáhnout text** (.txt), **✉ Poslat e-mailem**.
  Záhlaví průvodce: „31. ročník · Seč · 27.–28. dubna 2027“.
- **Průvodce – Info:** karta **Organizační garant** (Petr Kobelka, VHOS, a.s., 602 356 496,
  petr.kobelka@vhos.cz – dle pozvánky, na přání uživatele) s tlačítky Zavolat / Napsat SMS / Napsat e-mail;
  u Informací doplněno jméno Eva Jančáková (dle pozvánky).
- **Průvodce – budík k přednášce (⏰):** u každé přednášky tlačítko „Budík“ → kolik minut předem (5/10/15/30)
  a jak upozornit: **zvuk + vibrace** (když je průvodce otevřený), **upozornění v telefonu** (Notification,
  přes minimální `pruvodce/sw.js`, jen pro oznámení, nic necachuje), **📅 do kalendáře** (.ics s připomenutím
  VALARM – nejspolehlivější, funguje i při zavřeném průvodci). Tlačítko „Vyzkoušet“. Časy programu se počítají
  jako pražské (duben = UTC+2) podle `DATES` 2027. Bez serveru: zvuk/oznámení jen když prohlížeč průvodce drží
  otevřený nebo na pozadí; plně zavřená aplikace → jen kalendář. (Push ze serveru by vyžadoval Firebase Cloud Messaging.)
- **Průvodce – redesign v2 (13. 10. večer, na přání „top grafický design“):** Domů = **plakát** (velké logo 31,
  název jen jednou, štítky termín/místo, **odpočet dní**, koláž fleků; záhlaví na Domů skryté, na ostatních
  stránkách záhlaví = název stránky), **bento dlaždice** (Dnes + hodiny + svátek / Počasí v Seči / čísla /
  Právě teď), rychlé volby s fleky, **plovoucí spodní lišta** se skleněným efektem (na PC menu nahoře).
- **Váha partnerů:** pás log rozdělený štítky kategorií; **generální = zlatý rámeček a největší logo,
  hlavní = stříbrný, odborní/mediální menší**; stejné rámečky na stránce Partneři a u generálních na Domů.
- **Verze průvodce** (konstanta `VERZE` v `navrh/pruvodce.html`, při každém nasazení zvýšit): **0.9 · 13. 10. 2026**
  – štítek „Ukázka · v0.9“ na plakátu a v záhlaví, celé číslo dole v Info.
- **Průvodce 0.10:** pás log nahrazen **scénou partnerů** – štítky Generální / Hlavní / Odborní / Mediální,
  vždy jeden svítí (zlatě / stříbrně / fialově / černě) a pod ním jen jeho loga; střídá se samo
  (generální 7 s, hlavní 6 s, odborní projedou lištou, mediální 6 s), klepnutím na štítek ručně (pauza 20 s).
  **„Budík“ přejmenován na „Upozornit“** (🔔 Upozornit / „Upozorním 10 min předem“, okno „Upozornit na přednášku“).
- **Průvodce 0.11:** upozornění na přednášku – kromě tlačítek 5/10/15/30 min i **vlastní počet minut** (1–240), uloží se k přednášce a ukáže na tlačítku („Upozorním 20 min předem“).
- **Rozhodnutí k dotazům (uživatel souhlasí s doporučením):** žádná zvláštní práva pro přednášející –
  **dotazy vidí všichni** bez přihlášení, „Pohled předsedajícího“ přístupný všem (jen jiné zobrazení);
  **mazání nevhodných dotazů jen pořadatel** v aplikaci pořadatele. **Poznámky zůstávají soukromé** (jen v zařízení).
  → Při napojení na Firebase: uzel `konference2027_dotazy` (čtení i přidání pro všechny, +1 hlasy, mazání jen přihlášený pořadatel).

### Osobní karty „Moje registrace“ (14. 10. 2026) – admin 1.3, průvodce 0.12
- Cíl uživatele: **sjednotit všechny cesty přihlášení** (≈70 % ubytovací formulář pro veřejnost; zbytek formulář/odkaz
  rozeslaný hostům, přednášejícím, vystavujícím, YWP; partneři svým odkazem) → vše končí jako osoba v adminu →
  **každý v průvodci vidí jen svoje** (kdy/kde spí, s kým, večeře, svoz) + program pro všechny.
- Admin: každá osoba má klíč `karta`; uzel **`konference2027_karty/KLIC`** = jen jméno, firma, kategorie, stav,
  noci, pokoj+sekce, spolubydlící (jména), sám, Kraskov, večeře. **Bez e-mailu, telefonu, poznámky.**
  Synchronizace sama 1,5 s po každé změně (zapisuje jen rozdíly; smazaná osoba → karta smazána).
  V kartě osoby: Kopírovat odkaz / Otevřít / ✉ Poslat e-mailem (předvyplněný mail). Nastavení → „Osobní karty“:
  počet, stav, **CSV s odkazy pro hromadný e-mail**. Zdroj rozšířen: „Ubytovací formulář (veřejnost)“, „Formulář pro hosty“.
- Průvodce: odkaz `…/pruvodce/?k=KLIC` → klíč uložen v telefonu (adresa se hned vyčistí), karta načtena
  přes REST z Firebase, drží se offline, obnoví se při návratu do aplikace. Domů = malá karta, Info = celá
  + „Požádat o změnu“ (SMS / e-mail garantovi) + „Odebrat z telefonu“. Bez odkazu: vložit odkaz ručně / „Ukázat ukázku“.
  Jméno a firma z karty se samy doplní do profilu (podpis dotazů).
- **Uživatel musí přidat pravidlo do Firebase** (vedle ostatních):
  ```
  "konference2027_karty": {
    ".read":  "auth != null && root.child('florian_login_email').child(auth.token.email.toLowerCase().replace('.', ',')).exists()",
    ".write": "auth != null && root.child('florian_login_email').child(auth.token.email.toLowerCase().replace('.', ',')).exists()",
    "$klic": { ".read": true }
  }
  ```
  (seznam karet čte jen pořadatel, jednu kartu kdokoli, kdo zná její klíč).
- **14. 10.: uživatel pravidlo pro `konference2027_karty` přidal; spolubydlící na kartě ponechat (souhlas).**
- Další krok: formuláře pro veřejnost a hosty zapisovat přímo do Firebase (dnes import / ruční zadání).

### 14. 10. 2026 – admin 1.4, průvodce 0.13
- **Pokoje po nocích:** kdo spí jen v pondělí, nezabírá pokoj v úterý (obsazenost se po nocích počítala už dřív).
  Nově: kontroly „smíšený pokoj / jiná firma / chce spát sám“ jen mezi lidmi, kteří tam spí **stejnou noc**;
  v nabídce pokojů u osoby u každého noc v závorce („Novák (Po)“) a obsazenost po nocích, když se liší („Po 1/2, Út 0/2“);
  v Pokojích u vybrané noci rozbalovací seznam **„Pokoje volné v noci X, ale obsazené jinou noc – lze použít znovu“**;
  na osobní kartě jen spolubydlící ze stejných nocí, u částečných noc v závorce.
- **Odborní partneři:** uživatel nejdřív chtěl rozdělit do skupin, pak si to rozmyslel → **zůstává pruh, zrychlen**
  (≈ 20 s na průjezd místo ≈ 38 s). Varianta se skupinami po 9 byla vyzkoušená (na mobilu 3–4 řádky, pás skákal výškou).
- **Průvodce 0.14:** bloky v Programu ve **výrazném rámečku** – tyrkysový okraj 2 px, záhlaví bloku jako plný pruh
  (název, předsedající, Pohled předsedajícího), přednášky bloku uvnitř; přestávky a body mimo blok zůstávají venku.

### Konec dne 14. 10. 2026 – stav k pokračování
- Nasazeno: **aplikace pořadatele 1.4** (https://pkobelka.github.io/konference/) a **průvodce 0.14**
  (https://pkobelka.github.io/konference/pruvodce/). Ukázka v Claude: artifact 8Pd4XvrWtu5nHH1p91T4NH.
- Osobní karty ověřil uživatel naživo: **103 karet, funguje**. Pravidlo `konference2027_karty` ve Firebase je.
- Uživatel spokojen („dobrá práce“). Otevřené body na příště:
  1. Formuláře pro veřejnost (ubytovací, ~70 %) a pro hosty/přednášející/vystavující/YWP zapisovat **přímo do Firebase**
     → osoba se založí sama (zdroj web / hoste), pořadatel jen přidělí pokoj → karta se aktualizuje.
  2. Potvrzovací e-mail s osobním odkazem (dnes ručně tlačítkem ✉ nebo CSV pro hromadnou korespondenci).
  3. Skutečné počty lůžek u pokojů (všude odhad 2).
  4. Průvodce: dotazy přes Firebase (`konference2027_dotazy`), program 2027, menu, časy svozu.
  5. Před ostrým rokem 2027 smazat testovací data 2026 (Nastavení → Vymazat, napsat SMAZAT) – karty se smažou s nimi.
- **Průvodce 0.15 – oprava:** pruh odborných partnerů stál (animace najetí `stgIn` přebila animaci pruhu `tick`),
  na mobilu bylo vidět jen první 4 loga. Najetí u odborných je teď jen prolnutí, pruh jede (~20 s, projedou všichni).
- **Průvodce 0.16:** dlaždice „Dnes“ (velké hodiny) zrušena – zabírala moc místa. Dnešní den, čas a svátek jsou
  malým písmem v plakátu **vedle odpočtu** („Dnes st 14. 10. · 5:25, svátek má …“). Počasí v Seči je jeden řádek
  přes celou šířku (teplota vlevo, 3 dny vpravo); na PC vedle čísel (přednášky/partneři/body).
- **Průvodce 0.17 – namluvený dotaz (nápad uživatele):** v okně dotazu tlačítko **🎤 Složitý dotaz? Namluvte ho**
  (max 1 min, MediaRecorder opus ~24 kb/s ≈ 180 kB/min). Současně **přepis řeči na text** (Web Speech API, cs-CZ –
  Chrome/Android, Safari/iPhone; zvuk jde rozpoznávací službě prohlížeče) rovnou do pole dotazu → dá se opravit,
  ostatní si dotaz **přečtou**. Když přepis není k dispozici, uloží se „🎤 Namluvený dotaz (bez přepisu)“.
  V **Pohledu předsedajícího** u namluvených dotazů velké tlačítko **▶ Přehrát do sálu** (⏸ Zastavit, ▶ Přehrát znovu)
  – předsedající pustí telefon/notebook do mikrofonu nebo ozvučení.
  Zatím jen v zařízení (jako ostatní dotazy). **Pro ostrý provoz:** uzel `konference2027_dotazy` + nahrávky do
  Firebase Storage (nebo base64 do RTDB, ~250 kB na dotaz), mazání jen pořadatel; v Claude ukázce mikrofon nejde, jen na webu.
- **Průvodce 0.18:** řádek s počasím zrušen → v plakátu u štítků termínu a místa **tlačítko „🌤️ 11° · Počasí v Seči“**
  (teplota se doplní po načtení); klepnutí otevře okno s počasím teď + 3 dny (ikona, max/min, popis).
  Na mobilu je tlačítko vedle termínu a zkrácené na „Počasí“, aby nezabíralo další řádek; na PC „Počasí v Seči“.
- **Hodnocení přednášek (👍 „Zaujalo mě“) – ODLOŽENO**, uživatel to probere s kolegy. Návrh pro případ, že se bude dělat:
  anonymně, 1 hlas z telefonu (jde vzít zpět), počty vidí jen pořadatel (přednášející případně jen své číslo),
  veřejně po konferenci jen Top 3 / „Přednáška ročníku podle účastníků“. Varianta b) počty hned všem – riziko
  (partneři, malý obor, ranní bloky). Technicky přes Firebase spolu s dotazy.
- **Průvodce 0.19:** „Dnes st 14. 10. · čas · svátek má …“ v plakátu ve **výrazném rámečku** (fialový okraj,
  světlé neprůhledné pozadí s rozmazáním, stín) – přes fleky bakterií bylo špatně čitelné.
- **Průvodce 0.20 – červená čísla nových dotazů (přání uživatele):** u tlačítka „? Dotaz“ u přednášky, u dne (Po/Út/St),
  na záložce **Program** ve spodní liště a u „Napsat dotaz“ v kartě Právě teď. Číslo = dotazy, které člověk ještě neviděl
  (`S.seen[id]` v telefonu); otevřením okna dotazů zmizí, vlastní dotaz se počítá jako viděný.
  Připravena `noveDotazy(stare)` – po příchodu nového dotazu ukáže upozornění „Nový dotaz k přednášce: …“.
  **Aby to fungovalo mezi telefony, je potřeba napojit dotazy na Firebase** (`konference2027_dotazy`) – další krok průvodce.

### Dotazy živě přes Firebase (14. 10. 2026) – průvodce 0.21, admin 1.5
- Uzel **`konference2027_dotazy`**: `q/{přednáška}/{klíč}` = {t, a, c, ts, dev, h, au:true?} · `au/{klíč}` = data:URL nahrávky
  (stahuje se až při přehrání – nestahuje se všem) · `v/{přednáška}/{klíč}/{zařízení}` = true (+1 Mám stejný).
- Průvodce: živé napojení přes **REST + EventSource** (bez Firebase SDK), zařízení má náhodné `dev` v localStorage.
  Nový dotaz od kohokoli → všem ① u přednášky/dne/záložky Program + upozornění „Nový dotaz k přednášce…“; otevřené okno
  dotazů i Pohled předsedajícího se překreslí samy. Vlastní dotaz = „váš dotaz“ (bez +1). „Přečteno“ si předsedající
  odškrtává jen u sebe. Bez připojení / bez pravidla zůstává ukázka s lokálními daty (Claude ukázka).
- Admin: Nastavení → **„Dotazy k přednáškám z průvodce“** – živý seznam, Smazat (dotaz + nahrávka + hlasy),
  „Smazat všechny dotazy (po zkoušce)“ (napsat SMAZAT). Obnovuje jen tuto sekci, rozepsané Nastavení nezmizí.
- Otestováno: falešný Firebase server (REST+SSE) a dva „telefony“ – dotaz, +1, namluvený dotaz, přehrání u předsedajícího.
- **14. 10.: uživatel pravidlo `konference2027_dotazy` přidal a publikoval** (pozor: při vkládání chyběla `},` za blokem karet – opraveno).
- **Pravidlo do Firebase** (ORG = stejný výraz jako u ostatních uzlů, `auth != null && root.child('florian_login_email')…exists()`):
  ```
  "konference2027_dotazy": {
    ".read": true,
    ".write": ORG,
    "q": { "$talk": { "$qid": {
      ".write": "!data.exists() || ORG",
      ".validate": "newData.hasChildren(['t','a','c','ts','dev']) && newData.child('t').isString() && newData.child('t').val().length <= 1000 && newData.child('a').isString() && newData.child('a').val().length <= 120 && newData.child('ts').isNumber() && newData.child('ts').val() <= now + 60000 && $talk.matches(/^[a-z]{2}[0-9]{1,3}$/)"
    }}},
    "au": { "$qid": {
      ".write": "!data.exists() || ORG",
      ".validate": "newData.isString() && newData.val().length <= 900000 && newData.val().beginsWith('data:audio/')"
    }},
    "v": { "$talk": { "$qid": { "$dev": {
      ".write": true,
      ".validate": "newData.val() === true && $dev.length <= 40"
    }}}}
  }
  ```
- **Průvodce 0.22:** štítek termínu = tlačítko **„+ do kalendáře“** (Google Kalendář – předvyplněná celodenní událost
  27.–28. 4. 2027; nebo .ics pro Apple/Outlook s připomenutím den předem večer, popis: příjezd v pondělí 26. 4.).
  Štítek místa = tlačítko **„➜ navigovat“**: adresa **Ústupky 278, 538 07 Seč** (dle kongresypardubickykraj.cz, firmy.cz),
  GPS, odkazy Google Mapy (navigace autem na souřadnice), Mapy.cz, Waze, Kopírovat adresu. Stejné okno i z Dopravy.
- **14. 10.: dotazy přes Firebase ověřeny uživatelem naživo** – dotaz z jednoho zařízení se objevil na druhém i s ①.
- Průvodce 0.23: oprava tvaru „1 dotaz / 2 dotazy / 5 dotazů“ v kartě Právě teď.

### Nová ikona „31“ (14. 10. 2026) – admin 1.6, průvodce 0.24
- Uživatel vybral **variantu A**: dnešní „31“ z fleků, ale v jedničce **malá mezera mezi praporkem a dříkem** (jako mezery
  mezi díly trojky). Trojka zbavena bílého podkladu (průhledná).
- Nové soubory: `obrazky/cislo31.webp` (plakát průvodce i logo v záhlaví), `ikony/favicon-32.png`, `favicon-64.png`,
  `apple-touch-icon.png` (180, bílý čtverec), `ikona-192/512.png` (zaoblený bílý čtverec), `ikona-maskable-512.png`.
  Stejné ikony mají aplikace pořadatele, průvodce i partnerská přihláška (`prihlaska/` měla ikonu 🎤 – nahrazena).
- **Sestavení průvodce teď skriptem:** `./navrh/sestav-pruvodce.sh` (místo dlouhého printf; přidává i favicon-32).
- Ve 32/16 px jsou bakterie jen barevné tečky – na ploše telefonu (180–512 px) vypadá ikona dobře.
- **Průvodce 0.25 se jmenuje „Seč 27“** (přání uživatele; nejdřív napsal „Seč 26“, potvrdil 27 podle roku konání).
  Titulek stránky, vlastní `pruvodce/manifest.webmanifest` (name „Seč 27 – průvodce konferencí“, short_name „Seč 27“
  = název pod ikonou), `apple-mobile-web-app-title`. Aplikace pořadatele zůstává „Konference“ (ať se na ploše nepletou).
- **Průvodce 0.26–0.27:** odborní partneři jedou ve **dvou řadách** (každá polovina log, obě stejným směrem – přání uživatele),
  menší okénka (výška 38 px, logo 26 px); průjezd ~11 s, pak se scéna přepne na mediální.
- **Průvodce 0.28:** sborník v PDF bude ke stažení **už během konference** (ne až po ní) – upraveno v Aktualitách i v Info.

### Aktuality od pořadatele (14. 10. 2026) – admin 1.7, průvodce 0.29
- Aktuality už nejsou napevno na Domů: píšou se v aplikaci pořadatele, nová záložka **„Průvodce“** (zveřejnit /
  upravit / smazat; sem přesunuty i **Dotazy** z Nastavení + odkaz na průvodce). Uzel **`konference2027_aktuality`**
  `{klíč: {h, p, ts, autor}}`.
- Průvodce: aktuality v **Info** nahoře („📣 Aktuality od pořadatele“, nejnovější nahoře, štítek **Nové**),
  **červené číslo nepřečtených u záložky Info** a u dlaždice Informace na Domů, upozornění „📣 Nová zpráva: …“
  když přijde během otevřeného průvodce. Přečteno = otevření Info (`pr_aktseen`). Bez připojení ukázkové 4 zprávy.
- **Pravidlo do Firebase:**
  ```
  "konference2027_aktuality": {
    ".read": true,
    ".write": "auth != null && root.child('florian_login_email').child(auth.token.email.toLowerCase().replace('.', ',')).exists()"
  }
  ```

### Ubytování „sám v hotelu“ (14. 10. 2026) – admin 1.8, průvodce 0.30
- Upřesnění uživatele: kdo se registruje **sám přes ubytovací link hotelu Jezerka** (veřejnost, ~70 %), má pokoj
  domluvený s hotelem – **pořadatel číslo pokoje nezná**. Pořadatel zná jen ty, které sám ubytoval (svoje žluté pokoje).
- Admin: u osoby nová volba **Ubytování: „zajišťuji já (přidělím pokoj)“ / „rezervuje si sám v hotelu (link Jezerka)“**
  (`o.ubyt` = "ja" | "hotel"; bez volby se odvodí: zdroj „Ubytovací link hotelu Jezerka“ a bez pokoje = sám v hotelu).
  Kontrola „spí, ale nemá pokoj“ je pro ně vypnutá; nová kontrola „rezervuje si sám, ale má můj pokoj“.
  Seznam lidí: štítek **hotel sám**; Přehled: dlaždice „rezervují si sami v hotelu (pokoj neznám)“ s filtrem; CSV/hledání.
- Karta v průvodci: místo pokoje/spolubydlících řádek **„🏨 Ubytování v hotelu Jezerka – rezervovali jste si ho přímo
  u hotelu, číslo pokoje a klíč dostanete na recepci“**; noci (pokud je pořadatel zná), večeře a stav normálně.

### Stav k 14. 10. 2026 (dopoledne) – vše uloženo a nasazeno
- Admin **1.8** (https://pkobelka.github.io/konference/), průvodce **0.30 „Seč 27“** (…/pruvodce/), ukázka artifact 8Pd4XvrWtu5nHH1p91T4NH.
- Firebase pravidla hotová: konference2027, _prihlasky, _verejne, _karty, _dotazy, _aktuality. **Aktuality ověřeny naživo** (zpráva z adminu → ② u Info, štítek Nové) 14. 10. 10:25.
- **Nápad uživatele: fotka organizačního garanta** (Petr Kobelka) do karty „Organizační garant“ v Info – doporučeno ano
  (lidé ho poznají u registrace). Čeká se na fotku (portrét, ideálně čtverec, světlé pozadí); dát do `obrazky/garant.webp`
  zmenšenou (~300 px), kolečko s flekovým rámečkem.
- Další na řadě: aplikace pořadatele (lůžka, import e-přihlášky, formuláře přímo do Firebase, hromadné e-maily s odkazy).

### Záložka „Poznámky“ v aplikaci pořadatele (14. 10. 2026) – admin 1.9
- Přání uživatele: místo, kam si zapíše, **co komu slíbil / kdo o co žádá** (lidé ho „bombardují“ kvůli pokojům).
  Název „Domluveno“ se mu nelíbil → **„Poznámky“**, poslední záložka. Forma se ještě domluví (zatím jednoduché).
- Data `konference2027/poznamky/{klíč}` = {kdo, co, ts, hotovo, hotovo_ts} – pod stávajícím uzlem, **bez nového pravidla**.
- Kdo + co, Uložit/Upravit/Smazat, zaškrtnout **vyřízeno**, filtr Nevyřízené/Vyřízené/Vše, hledání;
  oranžové číslo u záložky = nevyřízené. Je i v záloze (JSON) – „Vymazat lidi, firmy a pokoje“ poznámky nemaže.
- Možné rozšíření: propojit poznámku s člověkem (odkaz na osobu), termín „slíbil jsem do…“, připomenutí.

### ▶ KDE POKRAČOVAT (stav 14. 10. 2026, ~11 h)
- Nasazeno: **admin 1.9** (https://pkobelka.github.io/konference/), **průvodce 0.30 „Seč 27“** (…/pruvodce/),
  ukázka v Claude: artifact 8Pd4XvrWtu5nHH1p91T4NH. Všechna Firebase pravidla hotová (vč. _karty, _dotazy, _aktuality).
- Ověřeno naživo uživatelem: osobní karty (103), dotazy mezi zařízeními, aktuality s číslem u Info.
- Uživatel po testu smaže testovací aktuality a dotaz (záložka Průvodce v adminu).
- Čeká na uživatele: **fotka garanta** do Info; rozhodnutí o hodnocení přednášek (a/b) po poradě s kolegy.
- **Další práce = aplikace pořadatele:** skutečné počty lůžek, import e-přihlášky (list Veřejnost),
  formuláře přímo do Firebase (veřejnost / hosté / přednášející / vystavující / YWP), hromadné e-maily s osobním odkazem,
  rozšíření Poznámek (propojení s osobou, termín „slíbil jsem do…“).
- Sestavení průvodce: `./navrh/sestav-pruvodce.sh`; při každém nasazení zvýšit `VERZE` (admin i průvodce).

### Import e-přihlášek z webu – PDF (14. 10. 2026) – admin 1.10
- Uživatel poslal ukázky: **e-přihláška z webu = PDF „order_ČÍSLO.pdf“** (firma, č. objednávky, IČ/DIČ, účet,
  kontaktní osoba, tabulka přihlášených osob: titul před, jméno, titul za, e-mail, telefon, člen/nečlen + cena,
  poznámka) a **papírová přihláška YWP** (sken, rukou psaná – strojově nečitelná → zadat ručně).
  PDF s osobními údaji **nejsou v repozitáři** (jen v uploads této relace).
- Admin → **Přihlášky → „📄 Import e-přihlášek z webu (PDF)“**: přetáhnout / vybrat víc PDF → čtení v prohlížeči
  (pdf.js 3.11.174 z cdnjs, nic se nikam neposílá) → náhled (firma nová/existující podle IČ nebo názvu, lidé
  nový/už v seznamu podle e-mailu nebo jména, poznámka) → „Založit vybrané“.
  Založí: osoba {titul_pred, jmeno, prijmeni, titul_za, email, tel, firma, kat verejnost, stav **Potvrdil**,
  zdroj web, objednavka, clen, pozn_partner = poznámka}; poznámka „bez ubytování“ → **nespí**, jinak „hotel sám“.
  Nová firma {nazev, ico, dic, kontakt, kat ostatni}. Opakovaný import stejného PDF nic nezdvojí.
- Zdroj „web“ přejmenován na **„Web – e-přihláška (ubytování si rezervují sami v hotelu)“** (e-přihláška = registrace,
  ubytování přes link hotelu). Kontrola „není vyplněno, jestli spí“ se u „hotel sám“ nehlásí (noci nezná pořadatel).
- Osoba má nově pole **Titul před / Titul za** a u importovaných rámeček „🧾 E-přihláška z webu č. … · člen/nečlen“.
- Testováno na obou PDF uživatele (převodník i v /tmp/claude-0/t/pdfp/parse.js).

### Upřesnění uživatele ke kategoriím (14. 10. 2026) – admin 1.11, průvodce 0.31
- **Letos budou všechny přihlášky/tiskopisy editovatelné** (vyplní se v počítači) → import bude spolehlivý.
  **Čeká se na prázdné šablony** (YWP, hosté, přednášející…) – pokud to budou vyplnitelná PDF, číst i pole formuláře
  (pdf.js `getAnnotations()` → fieldName/fieldValue), ne jen text.
- **Dvě skupiny:**
  1. **Veřejnost** – přihlásí se přes link zveřejněný na stránkách hotelu Jezerka (přihlašovací formulář), VHOS jim
     **nic nezajišťuje** (ubytování si řeší sami); chceme, aby si stáhli průvodce s běžnými informacemi.
  2. **Přednášející, hosté, YWP (+ další)** – zajišťuje pořadatel; v průvodci vidí vše **včetně čísla pokoje**,
     spolubydlících a **pondělní večeře**, pokud přijedou už v pondělí.
- Úpravy: „hotel sám“ se odvodí i z **kategorie Veřejnost** (ne jen ze zdroje web); na kartě „hotel sám“ bez vybrané
  večeře se řádek Večeře neukazuje (veřejnosti večeři nezajišťujeme).

### Import vyplněných formulářů Word/PDF (14. 10. 2026) – admin 1.12
- Uživatel poslal **šablony přihlášek (Word .docx)**: **hosté, přednášející, vystavovatel (2 osoby + firma), YWP CzWA**.
  Jsou to obyčejné tabulky „popisek: | hodnota“ (žádná pole formuláře). Šablony nejsou v repozitáři.
- Admin → Přihlášky → **„📄 Import přihlášek (PDF z webu, Word/PDF formuláře)“** bere .pdf i .docx (víc najednou):
  e-přihláška z webu (PDF s „Přihláška na konferenci - číslo“) → Veřejnost, hotel sám (jako dřív);
  **formulář** (Word přes JSZip 3.10.1 z cdnjs, nebo stejný formulář uložený jako PDF) → druh podle nadpisu
  (PRO PŘEDNÁŠEJÍCÍ / VYSTAVUJÍCÍ / YWP / HOSTÉ) → kategorie prednasejici / vystavujici / ywp / host, zdroj
  „Přihláška – formulář (Word/PDF)“, ubytování **zajišťuji já**, Poznámka (strava) → pozn_partner; firma se sídlem,
  fakturační adresou a e-mailem (YWP). Vystavovatel: více osob („Další účastník“). Starý .doc → hláška „ulož jako .docx/PDF“.
- Otestováno na vyplněných kopiích šablon s vymyšlenými údaji (host.docx, prednasejici.pdf, vystavovatel.docx, ywp.docx)
  + e-přihláška z webu najednou → 6 lidí, 5 firem, správné kategorie.
- **Připomínky k šablonám pro uživatele:** datum 14.–15. 4. 2026 → 27.–28. 4. 2027; název („ČOV“ vs „ODPADNÍCH VOD“);
  YWP má jako garanta F. Wannera; chybí řádky pro ubytování (noci Po/Út), pondělní večeři a stravu (kromě hostů).

### Šablony přihlášek 2027 (14. 10. 2026) – admin 1.13
- Na přání uživatele upraveny jeho 4 šablony Word (hosté, přednášející, vystavovatel, YWP): **datum 27.–28. 4. 2027**,
  název sjednocen na **„… PŘI PROVOZOVÁNÍ ČOV“**, doplněny řádky **Noc 26./27. 4. · Noc 27./28. 4. · Večeře 26. 4.**
  (šedá nápověda „ano / ne“), u přednášejících a YWP **Strava** a **Bydlet s**, u hostů Bydlet s (strava už je v Poznámce),
  u vystavovatele noci + večeře u obou účastníků. Všechny na **1 stranu** (nižší řádky), validace docx OK.
  Soubory: scratchpad `sablony/out/Konference_VHOS_prihlaska_*_2027.docx` (poslány uživateli, nejsou v repu).
  YWP má dál jako garanta Ing. F. Wannera – nezměněno, čeká na odpověď uživatele.
- Import čte nové řádky: ano/ne → noci (1. a 2. noc podle pořadí v Nastavení), obě „ne“ → nespí, večeře „ne“ → vecere ne,
  „ano“ → poznámka „Chce večeři 26. 4. – vybrat menu“; strava a „bydlet s“ → poznámka z přihlášky. Šedé nápovědy se odstraní.
  Stejný člověk dvakrát v jedné dávce (Word i PDF) se založí jen jednou.

### Ikona pořadatele odlišená (14. 10. 2026) – admin 1.14
- Uživatel chce na mobilu rozlišit aplikace: **účastníci = čistá „31“ na bílém** (beze změny), **pořadatel (admin 1.15) = stejná „31“
  na bílém + uprostřed malé kolečko VHOS s vlnkou** (vyříznuté z `obrazky/loga/vhos.webp`, bílý lem) → `ikony/*-org-*.png`.
  (První pokus s modrým rámečkem se mu nelíbil.)
  Manifest pořadatele: name „Seč 27 – pořadatel“, short_name **„Pořadatel“**, theme #005472. Podoba „pak ji změníme“ – prozatímní.
- YWP: garant **Ing. Filip Wanner je správně** (potvrdil uživatel) – v šabloně YWP ponecháno.

### ▶ KDE POKRAČOVAT (stav 14. 10. 2026 odpoledne)
- Nasazeno: **admin 1.15 „Pořadatel“** (https://pkobelka.github.io/konference/, ikona 31 + kolečko VHOS),
  **průvodce 0.31 „Seč 27“** (…/pruvodce/, čistá 31). Ukázka v Claude: artifact 8Pd4XvrWtu5nHH1p91T4NH.
- Firebase pravidla: konference2027, _prihlasky, _verejne, _karty, _dotazy, _aktuality – vše hotové a ověřené naživo.
- Import přihlášek (Přihlášky → Import): e-přihlášky z webu (PDF) + formuláře Word/PDF (hosté, přednášející,
  vystavovatel, YWP) vč. nocí/večeře/stravy ze šablon 2027 (poslány uživateli; YWP garant F. Wanner = správně).
- Čeká na uživatele: fotka garanta do Info; hodnocení přednášek (a/b) po poradě; smazat testovací aktuality/dotazy.
- Další práce (aplikace pořadatele): skutečné počty lůžek, hromadné e-maily s osobním odkazem (karta v průvodci),
  rozšíření Poznámek (propojení s osobou, termín), před ostrým provozem smazat testovací data 2026.
- **Průvodce 0.32 – Kontakty v Info** (podle pozvánky 2026 + přihlášek): karty osob s rolí, Zavolat/SMS/E-mail –
  **Organizační garant** Petr Kobelka (technický ředitel, VHOS; „ubytování, večeře, organizace na místě“),
  **Odborný garant** Ing. Filip Wanner, Ph.D. (ENERGIE AG BOHEMIA, 724 576 097, filip.wanner@energieag.cz; „program,
  přednášky, YWP CzWA“), **Odborný garant** prof. Ing. Jiří Wanner, DrSc. (VŠCHT, bez kontaktu), **Informace a přihlášky**
  Eva Jančáková (461 357 111, konference@vhos.cz), **Fakturace** Danuše Kaderková (vedoucí ÚTV UCE, 461 357 151,
  danuse.kaderkova@vhos.cz). Data v konstantě `KONTAKTY` v navrh/pruvodce.html. Poplatek doplněn o „Platba“.
  Popisky oblastí („ubytování, večeře…“, „program, přednášky…“) jsou návrh – uživatel může upravit.
- **Průvodce 0.33:** u Petra Kobelky bez „technický ředitel“ (přání); **prof. Jiří Wanner vypuštěn** z kontaktů i z „O konferenci“ –
  uvádět jen **Ing. Filipa Wannera** jako odborného garanta.

### iPhone / instalace do telefonu + QR (14. 10. 2026) – průvodce 0.34, admin 1.16
- Problém uživatele: **instalace na iPhone** (i u jeho jiných aplikací Aquakontrol, Florián) – iOS nemá tlačítko
  Instalovat, jde to jen ze **Safari → Sdílet → Přidat na plochu**; z Gmailu/Messengeru/FB (vnitřní prohlížeč) vůbec.
- Řešení v průvodci: banner **„📲 Průvodce do telefonu“** na Domů (dá se skrýt) + okno s návodem podle zařízení:
  iPhone = 3 kroky s ikonou Sdílet a Přidat na plochu; ve vnitřním prohlížeči (FBAN/Messenger/Instagram/WhatsApp/GSA…)
  nebo Chrome/Firefox na iOS varování + **Zkopírovat odkaz** (s osobním klíčem); Android = **tlačítko Nainstalovat**
  (beforeinstallprompt, jedno klepnutí), jinak kroky ⋮ → Nainstalovat; počítač = QR kód.
  Info: karta **„Průvodce do telefonu · pro kolegy“** s QR, Přidat na plochu, **Sdílet odkaz** (navigator.share).
- **iPhone a osobní karta:** ikona na ploše má na iOS vlastní úložiště → pro iOS se **nenačítá manifest** (vkládá se JS
  jen mimo iOS, v `sestav-pruvodce.sh`) a **klíč `?k=` zůstává v adrese** (při uložené kartě se doplní) → „Přidat na plochu“
  vezme adresu i s klíčem a karta se v ikoně načte.
- QR kódy (ověřeno čtečkou jsQR): `obrazky/qr-pruvodce.svg/.png` (průvodce); QR aplikace pořadatele poslán uživateli.
  Admin → Průvodce: QR + stažení PNG/SVG pro pozvánku, plakát, plátno.
- **Uživatel teď vše zkontroluje (počítač, telefon) a pak řekne, co dál.** První fáze podle něj hotová („možná i víc“).
- **Univerzální pomocník `instalace.js`** (kořen repa, samostatný, bez závislostí) – pro VŠECHNY aplikace uživatele
  (přání: „musíme to dát do všech“ – Konference, Florián, Aquakontrol…). Vložení jedním řádkem:
  `<script src="instalace.js" data-nazev="…" data-barva="#…" data-qr="…png" defer></script>`; lišta dole „📲 … na plochu“
  (zavřít = 14 dní klid), návod podle zařízení (iPhone Safari 3 kroky / vnitřní prohlížeč → Zkopírovat odkaz /
  Android Nainstalovat jedním klepnutím / počítač QR), `window.instalaceNavod()` pro tlačítko v menu.
  **Admin 1.17** ho používá (QR `obrazky/qr-poradatel.png`). Průvodce má vlastní verzi v designu (0.34).
- Repozitáře uživatele: pkobelka/**florian** (poslední push 30. 9.), pkobelka/**aquactrl** (push 14. 10. 10:35 – možná
  právě rozpracované jinou relací), AquaControll (private, starší), volby, mojebudky, vhos… → vložení do nich
  domluvit s uživatelem (nasazení do jejich main mění živé aplikace).
- **Pomocník instalace vložen do dalších aplikací (14. 10. 2026):**
  - **Florián** (pkobelka/florian) v1.253 – tlačítko „📲 Nainstalovat na plochu“ otevírá okno z `instalace.js`
    (místo `alert`), bez spodní lišty (`data-lista="0"`, mapa), SW florian-v256. **Nasazeno do main** (Merge: …), STAV.md doplněn.
  - **AquaCtrl** (pkobelka/aquactrl; uživatel: název je „AquaCtrl“) v124 – lišta „📲 AquaCtrl na plochu“ až po 20 s
    (`data-pozdeji="1"`), barva #0b5cae, SW aquactrl-v124. Na pokyn uživatele **PR #54 sloučen do main** (squash, nasazeno).

### ▶ KDE POKRAČOVAT (konec 14. 10. 2026)
- Vše nasazeno: admin **1.17 „Pořadatel“**, průvodce **0.34 „Seč 27“**, Florián **1.253**, AquaCtrl **v124** (PR #54).
- **Další nápad uživatele: upoutávka = POZVÁNKA na 31. ročník** (ne video o aplikaci – program ještě není): zveme vás,
  Seč, 27.–28. 4. 2027, krátce „máme pro vás aplikaci“. Scénář v2: `navrh/promo-sec27.md` (7 scén, ~46 s, 16:9 + 9:16);
  postup převzít z `pkobelka/florian/promo/src-hasici/` (render(t) → Playwright snímky → ffmpeg, hudba numpy).
  **HOTOVO (14. 10.):** video `promo/sec27-pozvanka.mp4` (57,6 s, 1920×1080, hudba) + stránka pro sdílení
  `promo/video.html` → https://pkobelka.github.io/konference/promo/video.html. Zdroje v `promo/src/` (viz scénář v3).
  Podle LinkedIn článků Petra: pořadatelé **VHOS, a.s., CzWA a Energie AG Bohemia** (potvrzeno; loga všech tří; termín programu nepsat);
  program připravují Filip Wanner + Martin Srb, zakladatelé tradice Jiří Wanner + Vladimír Langer.
  Případně dál: verze 9:16; prezentace 8–10 slidů z článků (návrh Copilota poslal Petr 14. 10. – historie, lidé,
  partneři 2026, budoucnost; „Společně netvoříme jen konferenci. Společně vytváříme tradici.“).
- Uživatel testuje instalaci na iPhonu / Androidu (pomocník `instalace.js` ve všech aplikacích).
- **Pravidlo (uživatel, 14. 10.):** veřejně (upoutávka, obecné texty průvodce) **nezmiňovat pondělní příjezd ani
  slavnostní večeři VHOS** – jen pro vybrané osoby (~40). Průvodce 0.35: odstraněno z Info (Termín), z kalendáře
  (popis události i poznámka). **Průvodce 0.36:** pondělí odstraněno i z veřejného Programu (DAYS/PROG/DATES) a ze svozu
  v Dopravě; číslování přednášek začíná od 2 (`let n=2`), aby klíče ut7… i dotazy ve Firebase zůstaly stejné.
  Pondělí (noc, večeře) vidí jen vybraní hosté na své osobní kartě; pořadatel ho má v aplikaci pořadatele.

### ⚠️ Pravidla Firebase jsou teď v repu mojebudky (14. 10. 2026)
- Celá databáze **moje-budky** má JEDNA pravidla, nasazovaná z `pkobelka/mojebudky/database.rules.json` (workflow
  `firebase-deploy.yml` při každé změně souboru v main) – **přepíše všechno, co je jen v konzoli**.
- 14. 10. 12:41 nasazení #184 (AquaCtrl `aquactrl_osoby`) smazalo ručně vložená pravidla konference → admin hlásil
  `permission_denied at /konference2027`. Oprava se souhlasem uživatele: **PR pkobelka/mojebudky#185** (squash) přidal
  všech 6 bloků `konference2027`, `_prihlasky`, `_verejne`, `_karty`, `_dotazy`, `_aktuality` (znění jako v konzoli).
- **Pravidlo do budoucna:** nová/změněná pravidla konference psát do `mojebudky/database.rules.json` (PR), ne do konzole.
- **Průvodce 0.37:** horní menu na počítači bylo „vůbec nevýrazné“ → položky jako dlaždice (rámeček, stín, tučné tmavé
  písmo, fialové ikony), najetí myší zvýrazní, **aktivní = plná fialová**, čísla (①) v rohu dlaždice. Mobil: ikony a popisky dole tmavší.

### ▶ KDE POKRAČOVAT (14. 10. 2026, odpoledne) – PROMO VIDEO HOTOVÉ
- **Video pozvánky v4** (60 s, 1920×1080, hudba): `promo/sec27-pozvanka.mp4`, náhled `.jpg`, sdílení
  https://pkobelka.github.io/konference/promo/video.html (Sdílet soubor / WhatsApp / Facebook / Kopírovat / Stáhnout).
  Petr: „perfekt“. Poslední úprava: řádky „Přednášky. Diskuze. Setkání. Večer s přáteli.“ schodovitě (margin-left i*140px).
- Scény: Zveme vás → 31. ročník → Seč (Kongres hotel Jezerka, **bez „Železné hory“**) → 27.–28. dubna 2027 →
  Přednášky/Diskuze/Setkání/Večer → Odborný program připravují Filip Wanner + Martin Srb **pod dohledem prof. Jiřího
  Wannera**, který tradici založil s Ing. Vladimírem Langerem; „Program 31. ročníku právě připravujeme.“ (termín nepsat) →
  Konference v telefonu („Aplikace do mobilu, tabletu i počítače. Vše po ruce…“; telefon: Domů s dlaždicemi, neutrální
  Program se šedými pruhy, Aktuality, Počasí, Navigace) → Zveme vás + QR + loga 31 · VHOS · CzWA · Energie AG Bohemia →
  „Těšíme se na vás **na Seči**!“
- **Pořadatelé (potvrdil Petr): VHOS, a.s., CzWA a Energie AG Bohemia s.r.o.** Ostatní partneři 2027 neznámí → nezobrazovat.
- Postup úprav: `promo/src/sec27.html` → náhled → `node render.js` + ffmpeg mux (příkaz v `navrh/promo-sec27.md`);
  hudba `python3 music_sec27.py` (WAV se necommituje). Snímky průvodce se mockují Playwrightem (skripty ve scratchpadu,
  vzor `/tmp/claude-0/t/shots2.mjs` – po restartu kontejneru pryč; postup popsán v promo-sec27.md v4).
- LinkedIn články Petra (3): 21. století / lidé za konferencí / partneři. Copilot navrhl prezentaci 8–10 slidů
  (historie, lidé, partneři, budoucnost; „Společně netvoříme jen konferenci. Společně vytváříme tradici.“) – nabídnuto, čeká.
- Petr zkouší instalaci průvodce na iPhonu (Safari → Sdílet → Přidat na plochu; osobní odkaz ?k= přidat až otevřený).
- Možné další: verze videa 9:16; prezentace; dál admin (počty lůžek, hromadné e-maily s osobními odkazy, smazat testovací data).
- **Rozpracováno (nevyrenderováno):** scéna Seč = „Seč“ + obrázek 31 z fleků (cislo31.webp, 190 px, světlá záře);
  modrý plovoucí flek (#5) přesunut na [660,95] – dřív plaval přes „ČOV“ a za „31“. Petr si video ještě pouští,
  „něco malilinko nepasuje“ → čeká se na jeho postřehy, pak jeden render.
- **Úvod (Petr: „aby to bylo úderné“):** scéna 1 = 9,6 s – velké „Zveme vás / na konferenci“ (124 px) drží do 3,6 s,
  pak se zmenší (scale→.22, nahoru) do malého nadpisu a naskočí název konference. Celkem 62,4 s; hudba DROP=B[1].
- **Úvod v2:** velké „Zveme vás / na konferenci“ se jen zmenší (scale .4, stejné písmo) a zůstane nad názvem – bez
  přepnutí na malé verzálky (Petr: „problikne do jiného formátu, není to pěkné“). Scéna garantů vystředěná.
  „vás“ malé (obecné oslovení), „Vás“ jen v osobních dopisech – na dotaz Petra.
- **Úvod zkrácen** (Petr: „zveme vás je tam moc dlouho“): velké Zveme vás ~2 s, scéna 1 = 7,2 s, video 60 s.
- **Scéna 31:** fleky se seřadí do **kruhu** kolem „31“ (mezera dole pro „31. ročník“) a kruh se rozšíří (elipsa
  rx 430→760, ry 320→390), fleky zmenšené na ~135 px – dřív se stahovaly pod „31“ a nebylo to výrazné.
- **Štítky v telefonní scéně (Petr):** „Online aktuální informace přímo do mobilu“ · „Dotazy k přednáškám do diskuze“ ·
  „Průběžně – písemně i hlasem“ · Poznámky · Program · Počasí · Navigace do hotelu · Moje registrace (blok posunut výš, chip 27 px).
- **Závěr (Petr):** „Těšíme se na vás na Seči!“ → pod tím datum zvlášť (58 px, fialová) → řádek log VHOS · CzWA · Energie AG.
- **Loga (Petr):** bílé karty se zaoblenými rohy (img.lg, radius 22 px, stín); VHOS největší, CzWA menší, Energie AG střední
  – v závěru i ve scéně „Zveme vás“.
- **Scéna Zveme vás:** „31“ přesunuto z řady log do volného místa vpravo od „Zveme vás.“ (300 px).
- **Datum ve videu:** „27. – 28.“ s mezerami kolem pomlčky (užší, margin -.12em); větší mezera pod „Zveme vás.“ (64 px).
- **Garanti:** Martin naskočí 1,8 s po Filipovi (časová pauza, ať jména vyniknou).
- **Přihlášky ve videu nezmiňovat** (Petr: budou asi až v lednu) – řádek „Přihlášky brzy na www.vhos.cz“ odstraněn.
- Pod „Zveme vás.“ nic (Petr: „těšíme se 2× po sobě není ono“) – těšíme se jen v závěru.
- **Scéna Zveme vás (Petr):** „Zveme vás...“ (3 tečky) + „31“ vpravo + QR; po chvilce jen velké logo VHOS (130 px) uprostřed, výš (top 560). Tři loga až v závěru.
- **Stav 14. 10. večer:** video pozvánky je hotové (Petr: „nádhera“), poslední render s logem VHOS uprostřed a výš.
  Petr: „tohle přece musíš doladit sám“ → drobnosti v rozložení dolaďovat samostatně (kontrolní mřížka náhledů
  všech scén před renderem).
- **Hudba:** stejný úder („boom“) jako u „31“ i při naskočení názvu konference (2,85 s) – na přání Petra.
- Úder u názvu: v mobilu nebyl slyšet (jen hluboký boom) → přidán krátký basový akord E (stab) – teď stejně výrazný jako u „31“.
- Úder u názvu (Petr: „teď jako výstřel, předtím hluboký“): šum (snap) ztlumen na 25 %, akord jen basy (E1/E2/H2), měkký nástup 45 ms → hluboký dunivý úder.
- **Úder u názvu zrušen** (Petr: „předtím, jen u 31, to bylo lepší“) – zůstává jen původní hluboký úder u „31“.
- **Zvuk v prvním okně:** přesná kopie zvuku z odhalení „31“ (úder + nástup basy a melodie, 1,9 s, dozvuk) vložena na 2,83 s (naskočení názvu) – ne samotný úder (ten zněl jako výstřel).
- **Hudba v1 okně (finál):** kopie zrušena; arpeggio + basa nastoupí už s úderem při naskočení názvu (START=2,8 s), u „31“ druhý úder do hrající hudby – po úderu není ticho.
- **Verze NA VÝŠKU** `promo/sec27-pozvanka-vyska.mp4` (1080×1920, stejná hudba): šablona `sec27.html?v=1` (třída .vert,
  CSS přepisy pozic, fleky přepočítané, kruh u 31 menší), render `node render.js out.mp4 v`. Odkaz ke stažení na video.html.
- „Kongres hotel Jezerka“ ve scéně Seč 31 větší (52 px, tučně) – obě verze.
- **Garanti – časování:** Filip +0,6 s, Martin +2,3 s, řádek „pod dohledem J. Wannera… s V. Langerem“ +3,2 s,
  „Program 31. ročníku právě připravujeme“ až +5,5 s (delší pauza; scéna dál 7,2 s).

### ▶ KDE POKRAČOVAT (14. 10. 2026, večer) – PROMO HOTOVÉ
- Video pozvánky hotové ve 2 verzích: na šířku `promo/sec27-pozvanka.mp4` (1920×1080) a na výšku
  `promo/sec27-pozvanka-vyska.mp4` (1080×1920), 60 s, hudba s úderem u názvu i u „31“. Sdílení:
  https://pkobelka.github.io/konference/promo/video.html (tlačítko i pro verzi na výšku). Petr: „perfektní“.
- Úpravy: `promo/src/sec27.html` (verze na výšku = `?v=1`, CSS `.vert`), render `node render.js out.mp4 [v]`,
  hudba `python3 music_sec27.py`, mux ffmpeg (příkaz v navrh/promo-sec27.md). Před renderem vždy mřížka náhledů
  všech scén a drobnosti rozložení dolaďovat samostatně.
- Pravidla videa: nezmiňovat přihlášky (budou asi v lednu), pondělí, slavnostní večeři, partnery 2027, termín programu.
  Pořadatelé VHOS, a.s., CzWA, Energie AG Bohemia. „Těšíme se“ jen v závěru.
- Další možné: prezentace z LinkedIn článků (8–10 slidů), dál organizační aplikace (lůžka, hromadné e-maily, testovací data).
- Úder i při naskočení „Seč 31“ (B[2]+0,8 = 12,8 s) – Petr: „jsem nadšený“. Údery: název 2,8 s · 31 7,2 s · Seč 31 12,8 s.
- „TERMÍN“ zarovnán doprava nad „28.“ (byl ve fleku) – obě verze.
- Štítky v telefonní scéně naskakují po 1,1 s (dřív 0,7 s), ať se dají přečíst.

### Doprava (14. 10. 2026) – průvodce 0.38, pořadatel 1.18
- Svoz jen na **úterní společenský večer**: tam Hotel Kraskov → Seč (zastávka) → Jezerka, zpět opačně; časy a místo
  zastávky v Seči „doplníme“. Tlačítko **„Mám zájem o dopravu“** (jméno, firma, nástup Kraskov/Seč, tam i zpět/jen tam/
  jen zpět, 1–5 osob, poznámka) → POST do Firebase `konference2027_doprava/z` (změna = nový záznam s `zmena`=klíč starého;
  v telefonu se pamatuje). Navigace zvlášť na Jezerku a do Kraskova (Kraskov bez souřadnic – hledá se podle názvu).
- Pořadatel → záložka Průvodce → „🚌 Zájem o svoz“: součty osob podle nástupu a směru + seznam, mazání.
- Pravidla: mojebudky PR #186 (sloučeno se svolením Petra) – veřejně jen zápis nového záznamu s kontrolou polí.
- Video: „Novinka 31. ročníku“ v bílém štítku (34 px), v telefonní scéně vše postupně (nadpis 1,1 s, 2 řádky 2,0/2,9 s, štítky od 3,9 s po 0,9 s); snímky průvodce přefoceny (nová Doprava).
- Časy svozu (Petr): odjezd z Kraskova 19:00 (přes Seč), zpět z Jezerky 1:30 – průvodce 0.39.

### ▶ KDE POKRAČOVAT (14. 10. 2026, pozdě večer)
- Nasazeno: průvodce **0.39** (Doprava: svoz jen na úterní společenský večer, Kraskov 19:00 → Seč → Jezerka, zpět 1:30;
  „Mám zájem o dopravu“ → Firebase `konference2027_doprava/z`; navigace Jezerka i Kraskov), pořadatel **1.18**
  (záložka Průvodce → „🚌 Zájem o svoz“ se součty), pravidla mojebudky **#186** (nasazeno OK).
- Video pozvánky: obě verze hotové (na šířku + na výšku), „Novinka 31. ročníku“ v bílém štítku, telefonní scéna postupně.
- **Čeká na Petra:** místo zastávky v Seči (má adresu i mapu) → doplnit do Dopravy (text „upřesníme“ → místo + navigace
  na zastávku, případně 3. tlačítko navigace) a do formuláře/aktualit. Petr si zkusí odeslat testovací zájem o dopravu a
  ověří ho v aplikaci pořadatele (pak smazat).

### Projekce dotazů na plátno (14. 10. 2026) – průvodce 0.40
- Pohled předsedajícího → „📽 Promítat dotazy na plátno“ / u dotazu „📽 Promítnout“ → celoobrazovková projekce (#proj):
  nahoře blok, přednáška, přednášející, počítadlo; uprostřed dotaz obřím písmem (auto-fit); hlasový dotaz = tlačítko
  „🔊 Přehrát do sálu“ (bez přepisu velký reproduktor); dole autor, čas, „+N se ptá taky“, Předchozí/Přečteno/Další,
  celá obrazovka, 🌓 tmavé/světlé (pamatuje se), ✕. Klávesy ← → mezerník R F D Esc. Živě se obnovuje (ne při přehrávání).
- Přímý odkaz pro PC v sále: `…/pruvodce/?pr=<bid>` (např. utb4) otevře pohled předsedajícího daného bloku.
- Možné doladit: tlačítko/odkaz pro přednášejícího v aplikaci pořadatele (seznam odkazů ?pr= pro každý blok), test na reálném projektoru.
- **Průvodce 0.41 (Petr: předsedající má jen mobil + mikrofon, projektor je na notebooku přednášejícího):** pohled
  „🔎 Velkým písmem“ funguje hlavně jako čtečka v mobilu – dotaz přes celý displej přečte do mikrofonu, hlasový pustí 🔊
  a podrží telefon u mikrofonu. Na PC u projektoru stejný pohled přes plátno (např. v diskuzi). Mobilní rozložení doladěno.
- Nápad na později (nestavěno): „dálkové promítání“ – předsedající vybere dotaz v mobilu a ten se ukáže v okně prohlížeče
  na počítači u projektoru (přes Firebase; potřebovalo by zabezpečení, např. PIN bloku, a nové pravidlo v mojebudky).
- Video: scéna „Přednášky / Diskuze / Setkání / Večer s přáteli“ bez teček (Petr). Na výšku písmo 66 px.

### ▶ KDE POKRAČOVAT (14. 10. 2026, konec dne) – vše uloženo a nasazeno
- **Nasazeno:** průvodce **0.41**, pořadatel **1.18**, video pozvánky na šířku i na výšku (poslední: scéna Přednášky /
  Diskuze / Setkání / Večer s přáteli bez teček), pravidla Firebase mojebudky #186 (konference2027_doprava).
- **Pravopis ve videu ověřen (Petr se ptal):** „na Seči!“ bez mezery před vykřičníkem, „27. – 28. dubna 2027“ (2. pád),
  „Duben 2027“ v kalendáři (1. pád) – vše správně, neměnit.
- **Web a mezipaměť:** GitHub Pages i prohlížeč drží soubory až ~10 min. Po nasazení posílat soubory pod NOVÝM jménem
  (kopie ve scratchpadu) a na web dávat odkaz s `?nova=1` – jinak Petr vidí starou verzi.
- **Čeká na Petra:**
  1. místo zastávky svozu v Seči (má adresu i mapu) → doplnit do Dopravy (text + navigace na zastávku) a do formuláře;
  2. test zájmu o dopravu v průvodci → ověřit v aplikaci pořadatele → smazat;
  3. test „Dotazy velkým písmem“ v mobilu předsedajícího a přehrání hlasového dotazu do mikrofonu.
- **Nápady na později:** dálkové promítání dotazů (mobil předsedajícího → plátno, přes Firebase + PIN bloku; potřebuje
  nové pravidlo v mojebudky), přehled odkazů `?pr=<blok>` v aplikaci pořadatele, prezentace z LinkedIn článků,
  dál admin (počty lůžek, hromadné e-maily s osobními odkazy, smazat testovací data 2026 před ostrým provozem).

### Upoutávka na web (14. 10. 2026)
- `upoutavka/index.html` → https://pkobelka.github.io/konference/upoutavka/ – samostatné okno k vložení na web VHOS
  (iframe): fleky, 31, „Zveme vás na konferenci“, název, datum + místo, **odpočet do zahájení** (dny/hodiny/minuty,
  27. 4. 2027 8:00; během konference „Právě probíhá“, po ní „Děkujeme“), „Těšíme se na vás!“ + pořadatelé,
  tlačítka Video pozvánka a Průvodce. Široká = banner (výška 240 px), úzká = sloupec (360×540) – přes container query.
- Ukázka vložení s kódem: https://pkobelka.github.io/konference/upoutavka/ukazka.html

### ▶ KDE POKRAČOVAT (14. 10. 2026, úplný konec dne)
- Hotovo a nasazeno: video pozvánky (šířka + výška), průvodce 0.41 (Doprava, zájem o svoz, dotazy velkým písmem),
  pořadatel 1.18 (zájem o svoz), **upoutávka na web** `upoutavka/` (iframe, odpočet) + ukázka vložení `upoutavka/ukazka.html`.
- Čeká na Petra: zastávka v Seči (adresa/mapa), test zájmu o dopravu, test dotazů velkým písmem v mobilu,
  předat kód iframe správci webu vhos.cz.
- Nápady: dálkové promítání dotazů (PIN + pravidlo mojebudky), odkazy `?pr=<blok>` v aplikaci pořadatele,
  prezentace z LinkedIn článků, admin (lůžka, hromadné e-maily, smazat testovací data 2026).

### Připomínky k videu (15. 10. 2026) – A. z VHOS
- **Ochranná zóna log** (manuál VHOS: volná plocha kolem loga = průměr „koule“): loga už nejsou v těsných bílých
  rámečcích, ale v bílé ploše s okrajem ≈ výšce loga (`.lgbox`, `--z`): scéna Zveme vás VHOS 108 px + zóna 100 px,
  závěr všechna 3 loga v jedné bílé ploše (zóna 80 px; na výšku pod sebou). QR na výšku posunut níž (top 1330).
- **Odrážky v telefonní scéně** (rychlé, malé v mobilu): písmo 27 → 42 px (na výšku 40 px), pod sebou, ve 2 skupinách
  po 4 (1. skupina zmizí, na její místo 2.), odstup 1,4 s. Scéna 6 prodloužena 12 → 16,8 s, celé video **64,8 s**
  (hudba `music_sec27.py` má nové délky; mux: `afade st=62.8`). Snímky telefonu po 3,1 s.

### Průvodce 0.42 (15. 10. 2026) – VHOS jako hlavní pořadatel
- Petr: „Já jsem VHOS, ať je to vidět.“ → v hlavním panelu Domů nahoře **velké logo VHOS** v bílé ochranné zóně
  (`.pvh`, odkaz www.vhos.cz), pod panelem karta „Pořádá VHOS, a.s. ve spolupráci s“ + loga CzWA a ENERGIE AG BOHEMIA (`.org`).
  Malé logo VHOS i v záhlaví ostatních stránek (`#vhimg`; v mobilu pod 440 px se tam schová štítek „Ukázka“).
- **Upraveno (Petr):** VHOS z hlavního panelu zase pryč („takhle se mi to nelíbí“) – Petr pošle, kam VHOS chce (CSS `.pvh`
  zatím ponecháno). Karta pod panelem: „Pořádá VHOS, a.s. ve spolupráci s“ **CzWA + znak odborné skupiny ČR MOV**
  (Energie AG je generální partner, ne spolupořadatel). Malé VHOS v záhlaví ostatních stránek zatím zůstává.
- Petr možná pošle „vlnku“ nebo „kouli“ z grafiky VHOS → použít jako dekor (záhlaví, karty).
- Info → Pořadatelé má stále text „VHOS, a.s. ve spolupráci s CzWA, odborná skupina ČR MOV“ (z pozvánky 2026) – ověřit s Petrem.
