# Poznámky k aplikaci – Konference Seč 2027 (VHOS)

Pracovní název aplikace: **Konference Seč 2027**

## O konferenci (z podkladů uživatele, 13. 10. 2026)

- Název: **Nové metody a postupy při provozování ČOV**, memoriál Ing. Jakuba S. Čecha, CSc.
- 2026 = jubilejní **30. ročník** (14.–15. 4. 2026), **2027 = 31. ročník** (duben, termín upřesní).
- Místo: **Kongres hotel Jezerka, Seč** (od 2022; dříve Moravská Třebová 1996–2019).
- Formát: **1,5 dne**, 16–20 vyzvaných přednášek, **30–40 vystavujících firem**, ~**450 účastníků** (rekord 2025).
- Příjezd a večeře v pondělí, konference úterý–středa (dle termínu 2026: út–st).
- Zaštiťují: VHOS, a.s. (skupina ENERGIE AG BOHEMIA), CzWA, SOVAK ČR (moderace legislativy).
- Dlouholetý generální partner: VAE CONTROLS, s.r.o.
- Historie (pro záložku Info): 1993 výstava „Voda a my“; 1996 1. ročník (57 účastníků);
  1998 jméno memoriálu + spolupráce s AČE ČR; 2000 dohoda AČE ČR a SR; 2004 legislativní
  sekce; 2007 400 účastníků; 2020–21 online bloky (2021: 190); 2022 přesun do Seče
  a rebranding na konferenci; 2025 rekord 450; 2026 30. ročník.
  *Podklad vznikl v NotebookLM – před zveřejněním fakta ověřit.*
- Témata 2026: legislativa (směrnice o čištění městských odpadních vod, NIS2, CERD, AI),
  technologie (MABR, srážení fosforu, terciární čištění), energetika (aerace, soft senzory,
  emise skleníkových plynů, mikropolutanty).

### Přihláška hostů (vzor 2026, Word)
Pole: titul před / za, jméno, příjmení, firma, sídlo, IČO, DIČ, kontaktní e-mail,
kontaktní telefon, poznámka (strava: bezlepková, vegetariánská…).
Zasílá se na konference@vhos.cz; kontakt: organizační garant.
→ Zapracováno do přihlášky v ukázce (verze 8). Chybí v ní: příjezd, ubytování, večeře
A/B/C – v ukázce doplněno navíc.

Průběžně sbírané nápady a požadavky z rozhovorů. Zatím se nic nestaví – nejdřív
sepíšeme, jak to celé funguje, pak upřesníme otevřené otázky a teprve potom tvoříme.

Poslední aktualizace: 12. 10. 2026

---

## 1. Přihlášení účastníka

- Každý přihlášený účastník vyplní: jméno, **e-mail**, **telefon**.
- Role účastníka: **přednášející**, **vystavující partner**, **host** (případně další).
- Podle role se liší:
  - zda mu **zajišťujeme hotel** / nezajišťujeme,
  - zda mu **zajišťujeme večeři** / nezajišťujeme.
- Účastník uvede, **kdy přijede** (pondělí / úterý) – podle toho se řídí večeře
  a pravděpodobně i noci v hotelu.

## 2. Potvrzení e-mailem

- Po přihlášení přijde **automatický potvrzovací e-mail**:
  - že je v pořádku zaevidován na konferenci,
  - role (partner, přednášející, host…),
  - ubytování: hotel, **číslo pokoje**, s kým je na pokoji,
  - večeře ano/ne + vybrané jídlo,
  - „těšíme se na vás“ a další doprovodný text (doladí se).
- V potvrzení bude **jedinečný ID kód** účastníka (např. `VHOS27-0142`).
  - Když chce účastník něco změnit nebo se na něco zeptat, odpoví na e-mail
    a kód je v předmětu → hned je jasné, o koho jde.
  - Kód se hodí i do telefonu („mám kód 0142“).

### Průběh e-mailů (upřesněno)

1. **Po vyplnění přihlášky** → hned potvrzení: zaregistrován, kód, večeře;
   ubytování buď „pokoj č. X s …“, nebo **„pokoj zatím přidělujeme, dáme vědět“**;
   info, že může kdykoli napsat s kódem na adresu konference.
2. **Po přidělení pokoje** → druhý mail „ubytování zajištěno: pokoj X s …“.
   Volba: posílat hned, nebo až na tlačítko „rozeslat“ (bezpečnější při přehazování).
3. **Kdykoli** → mail s kódem → automatická odpověď podle aktuálního stavu.
- Texty = **šablony** s doplňovanými údaji (jméno, pokoj, spolubydlící, večeře…);
  napíše je pořadatel, případně navrhne Claude.

## 2a. Automatická odpověď na e-mail s kódem (nápad uživatele)

- Každý přihlášený má vlastní kód podle kategorie, např. `HOST27-0142`,
  `PARTNER27-0087`.
- Účastník pošle e-mail s kódem na speciální adresu konference
  (např. `konference.vhos@…`) → **obratem automaticky přijde odpověď**:
  kde spí, pokoj, s kým, večeře (slavnostní / běžná + jídlo), další info.
- Obsah odpovědi si nastaví pořadatel.
- **Pojistka:** odpovídat jen když mail přijde z e-mailu zaregistrovaného
  u daného kódu (kódy jdou uhodnout). Jinak zdvořilé odmítnutí + kopie pořadateli.
- Varianty: stačí napsat „INFO“ bez kódu (pozná se podle adresy odesílatele);
  dotaz v mailu se přepošle pořadateli.
- Technicky: automat nad e-mailovou schránkou (např. Google Apps Script, zdarma).
  SMS / WhatsApp možné, ale placené.

## 3. Vlastní odkaz pro každého účastníka (nápad – uživatele nadchl)

- Každý účastník dostane v e-mailu **osobní tajný odkaz** (stejný princip jako
  dnešní přihláška partnerů `prihlaska/?k=…`), bez hesla.
- Na své stránce vidí: registraci, pokoj, spolubydlícího, večeři, program,
  adresu, parkování, kontakt na pořadatele.
- Může si sám změnit vybrané věci (např. večeře ano/ne, telefon, dieta);
  co smí měnit sám a co jen přes pořadatele, se určí.
- Pořadatel dostane upozornění na každou změnu + co z ní plyne
  („uvolnilo se lůžko“, „o 1 večeři méně – nahlásit restauraci“).
- Možný bonus: **QR kód** pro registraci na místě (kdo dorazil, výdej jmenovky).
- Odkaz lze kdykoli zneplatnit a poslat nový.

## 1a. Kategorie účastníků a partnerů

- Lidé se dělí na: **partnery**, **hosty konference**, **VHOS**, **přednášející**
  a další (kategorie uživatel ještě upřesní).
- Partneři se dělí na: **generální**, **hlavní**, **odborné**, **mediální** (a další).
- Zvlášť se evidují přihlášky tzv. **hostů**.
- Kdo spí **sám** a kdo **s někým** – rozhoduje pořadatel.
- *Pozn.: dnešní aplikace už kategorie firem má: generální, hlavní, odborní,
  mediální, VHOS, Koncern, AČE, ostatní – ověřit, zda seznam sedí.*

## 1b. Přihláška firmy (partnera)

- Každý **odborný partner / firma** dostane k dispozici **1 pokoj pro až 3 účastníky**.
  - *Ověřit: platí to i pro generální / hlavní partnery, nebo mají víc?*
- Firma dostane **elektronickou přihlášku**, kam vyplní své lidi:
  jméno, telefon, e-mail atd. (vzor přihlášky uživatel poskytne).
- Údaje z přihlášky se převezmou do **karty účastníka**.
- Pořadatel do karty doplní, **zda má pokoj, nebo ne**.
- *Pozn.: partnerská přihláška `prihlaska/?k=…` už existuje – porovnat se vzorem.*

## 1c. Karta účastníka a rychlé vyhledání

- Když se někdo zeptá „mám pokoj?“, pořadatel napíše jméno a hned vidí vše:
  **firma, e-mail, telefon, číslo pokoje, večeře** a další (postupně doplnit).
- *Pozn.: vyhledávání podle jména/firmy/e-mailu/pokoje už aplikace má –
  ověřit, že ukáže vše potřebné na jednom místě.*

## 3a. Mobilní aplikace – PWA (nápad uživatele)

- Osobní stránka účastníka jako **progresivní webová aplikace**: „Přidat na plochu“,
  ikonka Konference Seč 2027, bez App Store / Google Play, iPhone i Android.
- Obsah: pokoj, spolubydlící, večeře, kód, program, mapa, parkování, kontakt.
- Funguje **offline** (údaje uložené v mobilu), vždy aktuální po připojení.
- Možnosti navíc: **notifikace** (večeře za 30 min, změna programu; na iPhonu
  jen po přidání na plochu), QR kód pro registraci, program se zvýrazněním
  vlastní přednášky, tlačítko „Napsat pořadateli“.
- I aplikace pro pořadatele může být PWA (rychlé vyhledání na místě).

**Obsah mobilní aplikace (doplněno):**
- **Program** konference – po dnech, sály, přednášející; vlastní přednáška
  zvýrazněná; změny programu se projeví hned.
- **Poznámky** – účastník si může psát vlastní poznámky (např. k přednáškám),
  uložené v jeho mobilu.
- **Informace** – místo konání (Seč), adresa, mapa, parkování, check-in,
  Wi-Fi, kontakty na pořadatele, praktické info.
- **Aktuality** – pořadatel napíše zprávu v aplikaci pro pořadatele
  („večeře se posouvá na 19:30“) a všem se zobrazí, volitelně i jako notifikace.
  Případně cílit jen na skupinu (partneři, přednášející, ubytovaní…).
- *Upřesnit: jak se dnes program tvoří a kdo ho spravuje; zda poznámky jen
  osobní, nebo i sdílené (např. podklady k přednáškám ke stažení).*

**Chat / diskuse k přednáškám (nápad uživatele):**
- U každé přednášky v programu vlastní **diskuse**.
- Doporučení: hlavně **otázky na přednášejícího** (jako Slido) – účastníci
  píšou dotazy, ostatní je mohou „palcem nahoru“ podpořit, moderátor vidí
  nejžádanější a může je pustit na plátno; přednášející může odpovědět
  i písemně po přednášce.
- Navíc **obecný chat konference** (domluva na kafe, kdo jede vlakem…).
- U zprávy je vidět jméno a firma (účastník je přihlášený svým odkazem –
  žádní anonymové zvenku).
- **Moderace:** pořadatel může zprávu skrýt / smazat, případně chat vypnout.
- Technicky: Firebase umí zprávy v reálném čase, bez nákladů navíc.
- *Upřesnit: anonymní dotazy povolit? Zůstane diskuse po konferenci přístupná?*

**Rozšíření (doplněno uživatelem):**
- **Otázky na plátno:** zvláštní stránka pro projektor v sále – ukazuje
  dotazy k právě běžící přednášce, nejžádanější nahoře; moderátor v mobilu
  vybere, kterou otázku zvýraznit / označit jako zodpovězenou.
- **Živé reakce během přednášky:** účastník reaguje na konkrétní přednášku
  hned, jak běží (dotaz, komentář, 👍 / 👏), případně rychlá anketa
  („Používáte u vás…? ano/ne“) s výsledky na plátně.
- **Přímá komunikace s přednášejícím:** soukromá zpráva přednášejícímu
  (vidí ji jen on), přednášející odpoví v aplikaci i po konferenci.
- **Dotazy k vlastní přihlášce:** po přihlášení může účastník napsat
  pořadateli dotaz k své registraci (pokoj, večeře, změna) – pořadatel
  vidí dotazy u karty účastníka a odpovídá v aplikaci.
  - **Hlavní kanál komunikace s účastníky = aplikace, ne e-mail** (přání uživatele).
  - Admin: přehled „nové / nevyřízené dotazy“, konverzace u karty účastníka.
  - Upozornění: adminovi na nový dotaz (notifikace / e-mail), účastníkovi
    na odpověď (notifikace, případně e-mail „máte odpověď v aplikaci“).
  - Záloha pro ty, kdo aplikaci nepoužívají: e-mail s kódem (viz 2a),
    ideálně by se zařadil do stejné konverzace.
- **Dokumentace:** všechny dotazy a odpovědi se uloží → po konferenci
  export (PDF / tabulka) jako zápis z diskuse, případně příloha ke sborníku.

**Sborník a materiály ke stažení (nápad uživatele):**
- **Sborník konference** (PDF) ke stažení v aplikaci.
- U jednotlivých přednášek **prezentace / podklady** ke stažení
  (přednášející je nahraje sám, nebo pořadatel).
- Volba: přístupné hned, nebo až po přednášce / po konferenci;
  jen pro účastníky, nebo veřejně.
- Po konferenci aktualita „Sborník je ke stažení“ + notifikace.
- *Upřesnit: v jaké podobě sborník dnes vzniká, kdo ho připravuje, velikost souborů.*
- Technicky na stávajícím GitHub Pages + Firebase, bez nákladů navíc.

**Další obsah (doplněno uživatelem):**
- **Připomenutí přednášky:** u přednášky v programu tlačítko 🔔 → účastník si
  nastaví, kdy chce upozornit (5 / 10 / 15 min předem…). Zároveň vzniká
  „Můj program“ (oblíbené přednášky).
  - Technicky: plánované notifikace potřebují malou serverovou část
    (např. Firebase Cloud Functions – pravděpodobně v bezplatném limitu,
    ale vyžaduje tarif Blaze s kartou) – ověřit. Záloha: připomínka do kalendáře
    v mobilu (soubor .ics), funguje všude bez serveru.
- **Seznam partnerů:** podle kategorií (generální, hlavní, odborní, mediální),
  logo, popis, web, kontakt, číslo stánku.
- **Příspěvky firem:** partneři mohou umístit příspěvky, prezentace, nabídky
  (nahraje pořadatel, nebo firma sama přes svůj přístup – rozhodnout).

**Mapa hotelu / cesta na pokoj (nápad uživatele):**
- U „můj pokoj“ zobrazit **plánek hotelu** s vyznačeným pokojem
  (budova / sekce, patro, kudy od recepce).
- Dnešní aplikace už u pokojů eviduje **sekci a patro** → dobrý základ.
- Rozšířit na **plánek celého areálu**: sály přednášek, výstava se stánky
  partnerů (klik na stánek → profil firmy), restaurace, parkování, recepce.
- Potřeba: plánky / půdorysy od hotelu (stačí obrázek nebo PDF).

**Videa a reklama partnerů (doplněno uživatelem):**
- **Stěna log partnerů:** loga firem podle kategorií → klik na logo → profil
  firmy s **videospotem** (přehraje se), popisem, prezentacemi, kontaktem.
- **Videospoty firem** v profilu partnera.
  - Technicky: videa nahrát na **YouTube / Vimeo** a do aplikace jen vložit
    (velká videa přímo ve Firebase = zbytečné náklady, pomalé načítání).
- **Reklamní bannery** v aplikaci (např. na úvodní stránce, v programu).
  - Viditelnost podle kategorie: **generální** nejvíc (úvod, každá stránka),
    hlavní méně, odborní v seznamu partnerů → další hodnota pro partnery.
  - Možnost „přednáška / blok s podporou partnera XY“.
- **Statistiky pro partnery:** kolikrát si lidé zobrazili profil / video /
  klikli na web → po konferenci report pro partnera (argument pro příští ročník).
- *Upřesnit: kdo dodá videa, formát, zda reklama bude součástí partnerských balíčků.*

**Obsah si připraví partneři sami (upřesnění uživatele):**
- Blok **Odborní partneři** (a další kategorie): klik na logo → **nabídka firmy**,
  kterou si firma zpracuje sama: reklamní spoty, videospoty, obrázky,
  **smyčka** (běží dokola – automaticky, nebo ji uživatel pustí).
- Pořadatel to partnerům **nabídne jako službu** („poběží v aplikaci konference“).
- Návrh řešení:
  - Firma nahraje obsah přes **svůj odkaz** (rozšířit stávající přihlášku
    `prihlaska/?k=…` o sekci „Prezentace v aplikaci“): logo, text, obrázky,
    odkaz na video (YouTube/Vimeo).
  - Pořadatel obsah **schválí** před zveřejněním.
  - Připravit pro partnery **jednoduché zadání**: formáty, rozměry, délka
    videa, termín dodání.
- Nápad navíc: stejná smyčka log a spotů může běžet i na **obrazovkách v sále /
  ve foyer** o přestávkách (stránka pro projektor / TV).

**Android vs. iPhone (obava uživatele – cca půl na půl):**
- PWA funguje na obou, jedna aplikace pro všechny (+ počítač).
- Rozdíly:
  - Android (Chrome): sám nabídne „Nainstalovat aplikaci“.
  - iPhone: nic nenabídne sám → v Safari **Sdílet → Přidat na plochu**.
    → Aplikace pozná iPhone a ukáže **návod s obrázky** (2 kroky).
  - Notifikace na iPhonu jen po přidání na plochu (iOS 16.4+).
- Kdo nic neinstaluje, má vše i v prohlížeči přes odkaz – jen bez notifikací.
- Před ostrým spuštěním otestovat na obou typech telefonů.

## 4. Ubytování a přidělování pokojů

- Hotel dá pořadateli **určitý počet pokojů s konkrétními čísly**.
- U některých pokojů je možnost **přistýlky**.
- Pořadatel sám **přiděluje účastníky na pokoje a konkrétní lůžka**
  (lůžko 1, lůžko 2, přistýlka).
- Účastník se dozví: „Spíte na pokoji 214 s kolegou XY.“
- Aplikace by měla hlídat:
  - nikdo, komu ubytování zajišťujeme, nezůstal bez lůžka,
  - nezůstalo obsazené / objednané lůžko, které nikdo nepotřebuje,
  - kdo spí s kým (např. kolegové ze stejné firmy),
  - **aby se omylem na jeden pokoj nedostali lidé ze dvou různých firem**,
  - **kde je na pokoji volné místo** (přehled volných lůžek / přistýlek).
- Nápad: přidělování přetažením myší.

**Kontrola pokojů (uživatel zdůraznil jako hlavní potřebu):**
- na pokoji pro 1 člověka omylem nejsou 2 a obráceně,
- každý přihlášený, komu jsme **slíbili pokoj**, má pokoj s konkrétním číslem.

*Stav v současné aplikaci (záložka **Kontroly**) – už hlídá:*
- ✅ spí na konferenci, ale nemá pokoj,
- ✅ pokoj je přeplněný (víc lidí než lůžek + přistýlek),
- ✅ chce spát sám, ale někdo s ním na pokoji je (a obráceně),
- ✅ nejede / nepotvrdil, ale má zajištěný pokoj,
- ✅ má pokoj, ale nemá zaškrtnutou noc,
- ✅ pokoj neexistuje v seznamu pokojů hotelu,
- ✅ duplicitní jména.

*Chybí doplnit:*
- ❌ na jednom pokoji lidé ze **dvou různých firem**,
- ❌ přehled **volných míst** na pokojích (k ověření, jak je to dnes vidět),
- ❌ „slíbený pokoj“ podle pravidla firmy (např. odborný partner = 1 pokoj
  pro max. 3 osoby) – kontrola, že firma nemá víc lidí / pokojů, než má nárok.

## 5. Večeře

V pondělí jsou **dvě různé večeře**:

1. **Slavnostní večeře** – jen pro **pozvané** (partneři, hosté…).
   - *Upřesnit: kdo přesně je pozván, má se volit jídlo, vztah k běžné večeři?*
2. **Běžná pondělní večeře pro ubytované** – výběr ze **tří jídel: A, B, C**.

- Večeři si může objednat jen ten, kdo přijede v pondělí; kdo přijede až
  v úterý, formulář mu ji nenabídne.
- Pro pořadatele: souhrn pro restauraci (A 23×, B 15×, C 8×) + seznam kdo má co,
  zvlášť pro slavnostní a běžnou večeři.

## 6. Další nápady do budoucna

- Automatické **připomínky** těm, kdo do termínu nevyplnili přihlášku.
- **Informační e-mail před akcí** (parkování, check-in, program).
- **Přehled pro pořadatele** – na jedné obrazovce co je v pořádku a co zbývá dořešit.
- Exporty (seznam pro hotel, pro restauraci, jmenovky).

## 7. Technické poznámky

- Dnešní aplikace už umí část: pokoje, večeře, partnery, hosty; přihláška
  partnerů sbírá telefon a e-mail.
- **Nové:** odesílání e-mailů – aplikace běží jen jako webová stránka
  (GitHub Pages + Firebase), bude potřeba doplnit službu na posílání mailů.

---

## Přihlašování do aplikace a bezpečnost

Postup (shrnutí uživatele):
1. Člověk vyplní přihlášku → automaticky dostane **jedinečný kód (ID)**.
2. Zároveň mu přijde e-mail s **odkazem na aplikaci** → klikne, vyzkouší,
   vidí, že je přihlášen, kde spí atd.
3. Kódem se pak může do aplikace hlásit (např. na jiném zařízení).

Bezpečnost:
- Obsah konference (program, informace, sborník) je **veřejný**, nic tajného.
- **Osobní údaje ale chráníme** (GDPR): telefon, e-mail, číslo pokoje, s kým kdo spí.
  Vidí je jen ten člověk sám a pořadatel.
- Samotný kód nestačí (jde uhodnout) → přihlášení **kód + e-mail**
  (aplikace pošle na e-mail přihlašovací odkaz), nebo rovnou tajný odkaz z mailu.
- Ostatní účastníci vidí o druhých nanejvýš jméno a firmu (u dotazů, v chatu).

Upřesnění uživatele:
- Aplikace má **dvě úrovně**:
  - **veřejná část bez přihlášení** – program, přednášky (kdo, kdy, kde),
    informace, aktuality, sborník;
  - **osobní část po přihlášení** – můj pokoj, spolubydlící, večeře, můj kód…
- ID účastníka = číslo, které funguje zároveň jako **variabilní symbol**
  pro platbu (ne všichni platí – platby dořešit později).
- ⚠️ **Problém (uživatel):** za firmu se přihlásí víc lidí, ale faktura (VS)
  je jedna → VS nemůže být osobní ID. **Doladit.**
  - Návrh: **VS = firma / faktura**, **osobní ID = VS + pořadí osoby**
    (např. VS `270142` → lidé `270142-1`, `270142-2`); kdo platí sám / neplatí,
    dostane vlastní číslo stejným systémem.
- Přihlášení: **osobní ID + e-mail** (nebo osobní ID + krátký PIN z potvrzovacího mailu),
  protože samotné ID jde uhodnout.

## Priority (návrh – projít s uživatelem)

Nápadů je hodně, stavět postupně:

1. **Základ (musí být):** přihláška, karta účastníka, kategorie, pokoje
   a jejich kontrola, večeře, potvrzovací e-mail s kódem.
2. **Komunikace:** automatické odpovědi na kód, mail o přidělení pokoje,
   osobní odkaz / mobilní aplikace s údaji, informace, aktuality.
3. **Obsah konference:** program, sborník a prezentace, dotazy k přednáškám,
   chat, poznámky, notifikace, QR registrace, připomenutí přednášek,
   dotazy pořadateli v aplikaci.
4. **Partneři:** seznam partnerů, příspěvky a prezentace firem, videospoty,
   bannery podle kategorie, statistiky pro partnery.

## Otevřené otázky (doladit později)

- Kdo je „host“ a kdo „host konference“ – je to totéž?
- Jaké všechny role existují a co přesně komu zajišťujeme (hotel / večeře / zdarma / za úplatu)?
- Kolik nocí hotel? Jen pondělí→úterý, nebo i jiné?
- Kdo přihlašuje – každý sám, nebo za firmu jeden člověk?
- Diety / alergie u večeře?
- Platby a fakturace partnerů?
- Co si smí účastník změnit sám a co jen přes pořadatele?
- Termíny (uzávěrka přihlášek, nahlášení počtů hotelu a restauraci).

---

## Ukázka (prototyp) – 12. 10. 2026

- Soubor `navrh/ukazka-aplikace.html`, zveřejněno jako náhled:
  https://claude.ai/artifact/PxUmJWfjsqRH8bri8sjY57
- Smyšlená data. Obsahuje: Domů (odpočet, banner generálního partnera, aktuality),
  Program (3 dny, připomenutí 5/10/15/30 min, dotazy s hlasováním, „na plátně“),
  Partneři (stěna log → profil s videosmyčkou), Areál (plánek, stánky, pokoj),
  Můj pobyt (přihlášení kód + PIN, pokoj, spolubydlící, večeře A/B/C, QR, zprávy pořadateli).
- Ukázkový přístup: kód 270142-1, PIN 4821.

### Doplněno do ukázky (verze 2)
- Záložka **Info** (dříve Areál): **možnosti ubytování** (konferenční hotel v Seči,
  **Hotel Kraskov** jako doplňkové ubytování, vlastní ubytování),
  **svoz autobusem Kraskov ⇄ Seč** (jízdní řád – smyšlené časy; kdo bydlí
  v Kraskově, uvidí svůj svoz v Můj pobyt + připomenutí před odjezdem),
  **Z historie** (Seč, přehrada, hrad Oheb; historii konference doplní pořadatel).
- **Víc reklamy partnerů:** hlavní partneři na úvodní stránce, reklama
  u přestávek v programu (zve na stánek), „partner svozu“.
- *Upřesnit: skutečné časy svozu, kdo bydlí v Kraskově, historie a fotky
  z minulých ročníků.*
- **Uložte si termín – Seč 2028:** karta na konci úvodní stránky a v Info
  (za historií), v ostré verzi s tlačítkem „Přidat do kalendáře“.
  *Doplnit přesný termín 2028.*

### Reklamní plochy pro partnery (uživatel: „hlavně tam musí být prostor pro reklamu“)

Přehled ploch v ukázce (verze 4) – podklad pro partnerské balíčky:

| Plocha | Kde | Návrh pro kategorii |
|---|---|---|
| Úvodní obrazovka při spuštění | celá obrazovka, 2–3 s | generální (exkluzivně) |
| Banner nahoře na úvodní stránce | Domů, smyčka | generální |
| Dlaždice „Hlavní partneři“ | Domů | hlavní |
| Partner dne | Program, nad přednáškami daného dne | hlavní / generální |
| Blok s podporou partnera | u konkrétní přednášky | hlavní / odborní |
| Reklama u přestávek („přijďte na stánek“) | Program | odborní |
| Partner večeře | Můj pobyt, karta večeře | hlavní |
| Partner dotazů z publika | okno Dotazy (i na plátně v sále) | odborní |
| Partner Wi-Fi | Info, praktické informace | odborní |
| Partner svozu | Info, jízdní řád autobusu | odborní |
| Reklama v Můj pobyt | pod ubytováním | odborní |
| Stěna log + profil s videem | Partneři | všichni (velikost dle kategorie) |
| Stánek na plánku výstavy | Info, plánek | vystavovatelé |
| Smyčka na obrazovkách v sále | foyer / sál o přestávkách | dle balíčku |
| Aktuality „ve spolupráci s“ | Domů, aktuality | mediální |
| Fotogalerie / ohlédnutí | Info, historie | mediální |

- **Pořadí kategorií (potvrzeno uživatelem): generální → hlavní → odborní → mediální.**
  Podle toho velikost a výraznost ploch.
- Každá plocha je klikací → profil partnera s videem / nabídkou.
- Statistika zobrazení a kliknutí pro každou plochu → report partnerovi.
- *Rozhodnout: které plochy budou v jakém balíčku a za kolik.*

### „Živý“ web (přání uživatele) – ukázka verze 6
- **Pás log** všech partnerů pod hlavičkou na každé stránce – plynule běží,
  při dotyku se zastaví, klik → profil.
- **Střídání reklam** v plochách (odborní partneři u přestávek, na Domů,
  v Můj pobyt) – každých ~4,5 s plynulá výměna.
- **Stěna log:** loga postupně naskakují, jedno vždy na chvíli „zazáří“.
- **Klik na logo / reklamu** → vyjede (rozbalí se) profil s videem a nabídkou.
- Kdo má v telefonu zapnuté omezení animací, uvidí vše bez pohybu.
- *Do budoucna: frekvence a pořadí střídání podle balíčku (generální častěji).*

## Prezentace pro kolegy (12. 10. 2026)
- https://claude.ai/artifact/2RU8MSAEmcrPKiNHts5yz1 – 11 snímků: dnešní stav, hlavní
  myšlenka, cesta účastníka, obsah aplikace, během konference, partneři,
  pořadatel, technika, postup po krocích, závěr s odkazem na ukázku.
- Zdroj snímků uložen v `navrh/prezentace/`.
- Doplnit: skutečný termín 2027 a 2028.

## Vstup do aplikace a přihláška (ukázka verze 7)
- Člověk přijde z webu konference → otevře / nainstaluje aplikaci.
- Na úvodní stránce volba: **„Už jsem přihlášen“** (kód + PIN) nebo
  **„Vyplnit přihlášku“** přímo v aplikaci.
- Přihláška: jméno, firma, e-mail, telefon, role, příjezd (Po / Út),
  ubytování (zajistit / sám), večeře A/B/C nebo nechci (jen při příjezdu v pondělí).
- Po odeslání: **hned kód + PIN**, potvrzení e-mailem, je rovnou přihlášen
  a vidí stav: registrace potvrzena, **„pokoj přidělujeme“**, večeře / bez večeře.
- Po přihlášení vidí na úvodní stránce svůj souhrn (pokoj, večeře).
- Co ještě není hotové, ukazuje **„Připravujeme“** (např. program na středu,
  sborník) + upozornění, až to bude.
- *Rozhodnout: přihláška jen v aplikaci, nebo i na webu VHOS (stejný formulář).
  Firmy (více lidí na jeden VS) dál přes partnerskou přihlášku.*

## Osobní údaje – pravidlo
- Seznamy účastníků (e-maily, telefony) **nikdy do GitHubu** (repo je pro GitHub Pages
  nejspíš veřejné) ani do ukázek. Patří jen do aplikace pořadatele (Firebase, Nastavení → Import).

## Sběr podkladů – 13. 10. 2026 (zatím jen sbírat, nic nestavět)
Uživatel: „Nejdřív namluvím a pošlu všechny materiály, pak to shrneme a zapracujeme najednou.“

- **Hlavní starost: ubytování pro velké množství lidí.**
  - Lidé v několika kategoriích: přednášející, host, vystavovatel… (kategorií je víc, doplní).
  - Pořadatel přiděluje pokoje; večeři vybírá pořadatel, nebo si ji vybírají sami.
  - Kontrola: obsazené všechny pokoje a lůžka; na dvoulůžkovém ne 3 lidi, na třílůžkovém ne 4 atd.
- *Pro pozdější porovnání – co už aplikace pořadatele umí:* kategorie osob (VHOS, Koncern, AČE,
  Přednášející, Generální/Hlavní/Odborný/Mediální partner, Host, Ostatní), pokoje po
  sekcích a patrech pro každou noc s barvou obsazenosti (volný / částečně / plný /
  přistýlka / přeplněný) a počtem X/Y lůžek, kontrola přeplnění, „sám“, „spí, ale nemá pokoj“,
  záložka Večeře s počty jídel.

## Excel „Komplet 2026“ – jak dnes pořadatel pracuje (rozbor 13. 10. 2026, bez osobních údajů)

Listy: `pokoje 2026/25/24`, `komplet pokoje`, `přednášející 26/25`, `PŘ 25 KOPIE`,
`večeře 26/25/24`, `vystav 26`, `vystavovatelé`, `Partneři`, `list11` (finanční rozvaha).
Ročníky 24/25/26 vedle sebe → pořadatel porovnává, kdo kdy byl a kde spal.

**Pokoje (list pokoje 2026)**
- Vlevo „mapa“ hotelu: sekce **A, B, C (superiory 6xx/7xx, relax apartmá), D** (3., 2. patro, 101 imobilní),
  po patrech; pod číslem pokoje 2–3 řádky = lůžka se jmény (+ přistýlky). Typy: 2lůž., apartmá,
  „bez balkonu“, „k“ u čísla (?), relax apartmá, imobilní.
- Vpravo abecední seznam ubytovaných (~110): pořadí, jméno, firma, **pokoj**, **sekce** (A/B/C),
  **VHOS** (1 = platí VHOS?), **večeře 1 / 2 / 3** (číslo jídla; „x x x“ = ?, „ –“ = ?).
- Dole zvláštní případy: „jen pondělí“, „jen úterý“, seznam „PLATÍ VHOS“.
- Noci: **pondělí a úterý** (příjezd v pondělí, konference út–st).
- Kapacity sálu: sál 260 + galerka 50.

**Přednášející (~30)**
- Blok (legislativa, 1. odpolední, 2. odpolední, Novinky a zkušenosti z ČOV), role (Přednáška N /
  **Předsedající**), Ž/M, pokoj („sám“, „xxx“ = ?), Več., e-mail, telefon, poznámka,
  **přihlášen** 1/0; 2025 navíc **odměna**. Vedle sestavený pořad bloků (kdo po kom mluví).

**Slavnostní večeře (pondělí)**
- Pozvaní po skupinách: **VHOS, KONCERN, partneři (dle firem), HOSTÉ, PŘEDNÁŠEJÍCÍ**;
  pozván ano/ne, **účast Ano/Ne**, poznámka („omluvil se“, „pozvat 2027“).
- Kapacita: **ideál 38 / 42 / 46** (rozestavení stolů), max ~54. Počty: pozváno / potvrzeno.
- Běžná pondělní večeře (výdej 19–20 h): **3 jídla s cenami** (~210–240 Kč), mění se každý rok.

**Vystavovatelé / partneři**
- ~34 firem: **4 generální, 3 hlavní, 27 odborných**; cena 2025 a 2026, počet stánků;
  `vystav 26` = 31 stánků; mediální partneři zvlášť (časopisy, SOVAK, kraj…).
- Finanční rozvaha: výdaje (pronájem, grafika, sborník, dárky, víno, doprava Kraskov…),
  příjmy z partnerů, počty účastníků se slevou CzWA / bez slevy, rozmístění stánků (hlavní sál / chodba).

**Tři cesty, jak se lidé dostanou do evidence (vysvětlil uživatel)**
1. **Zve pořadatel** (VHOS, koncern, hosté, přednášející, předsedající…) → pošle pozvánku → potvrdí →
   pořadatel přidělí pokoj, slavnostní / běžnou večeři.
2. **Partneři / vystavovatelé** → partnerská přihláška (už existuje `prihlaska/?k=…`).
3. **Oficiální e-přihláška na webu** → jde mimo pořadatele, ale **někteří chtějí ubytování / stravu**
   → pořadatel je musí doplnit do evidence (a odlišit, odkud přišli).

**Otázky k upřesnění:** viz chat 13. 10. (písmeno „k“ u pokojů, význam „x x x“ / „ –“ u večeře,
sloupec VHOS, „xxx“ / „sám“ u přednášejících, Več. u přednášejících, kde je Kraskov,
odkud přijdou data z webové e-přihlášky, Ž/M pro spolubydlící).

*Pozn.: současná aplikace pořadatele vznikla z Excelu 2025 (sekce, noci, platí VHOS, sám,
přistýlky, večeře A/B/C) → velká část modelu už sedí.*

### Odpovědi uživatele k Excelu (13. 10. 2026)
- **„k“ u pokoje = komfort, s přistýlkou → 2+1.**
- Sloupec **VHOS = 1** neznamená platbu ubytování, ale **pozvání na slavnostní večeři VHOS**;
  takový člověk má u jídel 1/2/3 „x x x“ (nevybírá běžnou večeři).
- **Kraskov** = jiný hotel cca 9 km; pořadatel tam **zajišťuje jen svoz** (ne ubytování / přidělování pokojů).
  → v aplikaci: u člověka „ubytován v Kraskově“ = jen svoz, žádný pokoj od pořadatele.
- **Ž / M** = pomůcka pro párování přednášejících na společné pokoje (stejné pohlaví).
  → v aplikaci: pole pohlaví (volitelné) + upozornění při smíšeném pokoji, nápověda „volné místo pro muže/ženu“.
- Ještě otevřené: význam „ –“ u jídel (asi nevybral / nejde?), u přednášejících pokoj „xxx“ / „sám“,
  jak se pořadatel dostane k datům z webové e-přihlášky.
- **„ –“ u jídel = nechce večeři** (většinou přijede až v úterý).
- Přednášející s pokojem **„sám“ = VIP, spí sám** (jednolůžkové obsazení).
- **Webová e-přihláška** se pořadateli stahuje do **Excelu** → v aplikaci bude potřeba **import
  této tabulky** (s označením „přišel z webu“). Tabulka zatím nedorazila (v Komplet 2026 není),
  uživatel ji pošle.

## Seznam přihlášených (export z webu servis.vhos.cz, .xls) – rozbor bez osobních údajů
Listy podle kategorií (stav 2026):
| List | Kdo plní | Počet 2026 | Sloupce navíc |
|---|---|---|---|
| **Veřejnost** | **automaticky z webové e-přihlášky** | 290 (platící) | č. objednávky, č. faktury, cena bez/s DPH (4 900 / 4 600 Kč bez DPH – nižší asi se slevou CzWA), poznámka |
| **Vystavující** | ručně pořadatel | 62 | č. faktury, poznámka („vytisknout ručně“) |
| **VHOS a hosté** | ručně | 32 (HOST / VHOS) | poznámka |
| **Přednášející** | ručně | 29 | poznámka („doplnil TŘ“, „místo X“) |
| **YWP** (Young Water Professionals CzWA) | ručně | 11 (platící) | č. faktury, poznámka |
| Celkový přehled / Aktuálně | souhrn | **424 celkem, 34 firem** | |

- Společné sloupce: titul před, jméno, příjmení, titul za, název společnosti, kategorie.
- Poznámky u veřejnosti: zálohová faktura, „přihlášen na místě“, partner konference, smlouva na 2 osoby…
- **Ubytování ani večeře v tomto seznamu nejsou** → dnes jsou to dvě oddělené evidence
  (Seznam přihlášených = kdo jede a platí; Komplet = kdo kde spí a co jí).

**Přihláška YWP CzWA (Word):** jako přihláška hostů (tituly, jméno, firma, sídlo, IČO, DIČ,
e-mail, telefon) + **vložné 1 000 Kč bez DPH / 1 210 Kč s DPH**, fakturační adresa, e-mail pro
fakturu, kontaktní osoba pro fakturaci. Organizační garant YWP je jiný než u hostů.

**Důsledek pro aplikaci:** jedna karta člověka pro všechny kategorie
(veřejnost / vystavující / VHOS / host / přednášející / YWP / partner…), u ní **zdroj**
(web automaticky / ručně / partnerská přihláška / pozvánka), **fakturace** (objednávka, faktura,
cena, vložné) a **pobyt** (ubytování, noci, pokoj, večeře) – místo dvou oddělených Excelů.
Import exportu „Veřejnost“ z webu opakovaně (doplní nové, nezdvojí stávající).

## Pozvánka 2026 (PDF, 4 strany) – program, partneři, informace
**Časová osa (2026):**
- **Pondělí 13. 4.:** příjezd, slavnostní večeře VHOS (pozvaní) / běžná večeře 19–20 h (jídla 1–3).
- **Úterý 14. 4.:** 08:00 prezence · 09:00 zahájení (úvodní slovo pořadatelů, SOVAK, kraj) ·
  blok **Legislativa ve vodním hospodářství** (předsedá) · 12:00 **prezentace odborných partnerů
  a sponzorů** · 12:15 oběd · bloky **Aktuální trendy v čistírenství I. (terciární čištění)**
  a **II. (energetická neutralita ČOV)** · diskuze · 17:30 závěr 1. dne ·
  **19:30–02:00 společenský večer**.
- **Středa 15. 4.:** blok **Novinky a zkušenosti z provozování a řízení ČOV** (9:00–11:40) ·
  11:40 závěrečný souhrn.
- Přednášky po 20–30 min, každý blok má **předsedajícího**, u přednášky více autorů + firma.

**Partneři 2026 (zadní strana pozvánky, loga):**
- Pořadatelé: VHOS, a.s.; CzWA (+ odborná skupina ČR MOV).
- **Generální:** ENERGIE AG BOHEMIA, VAE CONTROLS, HAWLE, LK (Pumpservice).
- **Hlavní:** SENSUS, ENVI-PUR, ASIO.
- **Odborní (~30):** WILO, AVK, IN-EKO, KAPKA, Schneider Electric, KUNST, Fontána, HACH, COMAC CAL,
  GDF, KEMIFLOC, KROHNE, HUBER, ShS, PFT, TECHNOAQUA, DISA, Endress+Hauser, KSB, BD SENSORS,
  Zemský, KAESER, VaK Jablonné n. O., TECHNOMA, PCT, MIVALT, HANNA instruments.
- **Mediální:** SOVAK, iVodárenství.cz, Moderní obec, Stavebniserver.com, Vodní hospodářství.
→ Pozvánka = vzor pro „stěnu log“ v aplikaci (stejné pořadí a velikosti dle kategorie).

**Informace z pozvánky (do záložky Info):**
- Místo: Kongres hotel Jezerka, Seč – Ústupky 278, GPS 49°49’17.71“N, 15°39’35.77“E.
- E-přihláška na www.vhos.cz do 27. 3.; info konference@vhos.cz; program i na www.czwa.cz.
- Poplatek 4 900 Kč bez DPH (5 929 s DPH), členové CzWA 4 600 Kč (5 566 s DPH); splatnost do 27. 3.
- Cena zahrnuje organizaci, **sborník v PDF**, občerstvení, oběd, večerní pohoštění.
- **ČKAIT – 2 body** odborného vzdělávání.
- Při neúčasti se poplatek nevrací (pošle se sborník / lze vyslat náhradníka).
- Organizační garant (VHOS) a odborní garanti (VŠCHT, ENERGIE AG BOHEMIA).
