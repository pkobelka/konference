# Poznámky k aplikaci – Konference Seč 2027 (VHOS)

Pracovní název aplikace: **Konference Seč 2027**

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
