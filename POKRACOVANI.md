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
