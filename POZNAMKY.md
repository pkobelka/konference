# Poznámky k aplikaci – Konference VHOS 2027

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

## Otevřené otázky (doladit později)

- Kdo je „host“ a kdo „host konference“ – je to totéž?
- Jaké všechny role existují a co přesně komu zajišťujeme (hotel / večeře / zdarma / za úplatu)?
- Kolik nocí hotel? Jen pondělí→úterý, nebo i jiné?
- Kdo přihlašuje – každý sám, nebo za firmu jeden člověk?
- Diety / alergie u večeře?
- Platby a fakturace partnerů?
- Co si smí účastník změnit sám a co jen přes pořadatele?
- Termíny (uzávěrka přihlášek, nahlášení počtů hotelu a restauraci).
