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

## 4. Ubytování a přidělování pokojů

- Hotel dá pořadateli **určitý počet pokojů s konkrétními čísly**.
- U některých pokojů je možnost **přistýlky**.
- Pořadatel sám **přiděluje účastníky na pokoje a konkrétní lůžka**
  (lůžko 1, lůžko 2, přistýlka).
- Účastník se dozví: „Spíte na pokoji 214 s kolegou XY.“
- Aplikace by měla hlídat:
  - nikdo, komu ubytování zajišťujeme, nezůstal bez lůžka,
  - nezůstalo obsazené / objednané lůžko, které nikdo nepotřebuje,
  - kdo spí s kým (např. kolegové ze stejné firmy).
- Nápad: přidělování přetažením myší.

## 5. Večeře

- Večeře je **v pondělí** – objednat si ji může jen ten, kdo přijede v pondělí.
- Kdo přijede až v úterý, večeři mu formulář nenabídne.
- Výběr ze **tří jídel: A, B, C**.
- Pro pořadatele: souhrn pro restauraci (A 23×, B 15×, C 8×) + seznam kdo má co.

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

- Jaké všechny role existují a co přesně komu zajišťujeme (hotel / večeře / zdarma / za úplatu)?
- Kolik nocí hotel? Jen pondělí→úterý, nebo i jiné?
- Kdo přihlašuje – každý sám, nebo za firmu jeden člověk?
- Diety / alergie u večeře?
- Platby a fakturace partnerů?
- Co si smí účastník změnit sám a co jen přes pořadatele?
- Termíny (uzávěrka přihlášek, nahlášení počtů hotelu a restauraci).
