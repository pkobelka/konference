#!/usr/bin/env python3
# Dohledá ve sborníku (PDF) stranu každé přednášky podle jejího názvu z pruvodce/program.js.
#   python3 navrh/sbornik-strany.py sbornik.pdf            → jen vypíše tabulku ke kontrole
#   python3 navrh/sbornik-strany.py sbornik.pdf --zapsat   → zapíše s:N k přednáškám v program.js, uloží PDF do sbornik/
#                                                             a nastaví SBORNIK.url / mb
# PDF se přeuloží s „object streams“ (pikepdf): průvodce pak k jedné stránce stáhne pár set kB, ne skoro celý soubor
# (u PDF s plochým stromem stránek pdf.js prochází všechny stránky před tou hledanou). Obsah ani kvalita se nemění.
# Potřebuje pdftotext (poppler-utils) a pikepdf (pip install pikepdf). Spouštět z kořene repozitáře.
import os, re, shutil, subprocess, sys, unicodedata

PROG = "pruvodce/program.js"
CIL = "sbornik/sbornik-2027.pdf"

def norm(t):
    t = unicodedata.normalize("NFKD", t.lower())
    t = "".join(c for c in t if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9]+", " ", t).strip()

def strany(pdf):
    txt = subprocess.run(["pdftotext", "-layout", pdf, "-"], capture_output=True, text=True, check=True).stdout
    return [norm(s) for s in txt.split("\f")]

def prednasky(js):
    # řádky přednášek: {t:"..",e:"..",h:"Název",w:"Autoři"...} – přestávky (brk) a řádky bez autora se přeskočí
    for m in re.finditer(r'^\s*\{t:"[^"]*".*$', js, re.M):
        r = m.group(0)
        if "brk:1" in r or ',w:"' not in r or ',w:""' in r:
            continue
        h = re.search(r'h:"((?:[^"\\]|\\.)*)"', r).group(1)
        yield m.start(), m.end(), h

def najdi(nazev, st, od):
    slova = norm(nazev).split()
    for n in (len(slova), 8, 6, 4):   # celý název, pak čím dál kratší začátek (název bývá zalomený / zkrácený)
        if n > len(slova) or n < 3 and len(slova) >= 3:
            continue
        hledej = " ".join(slova[:n])
        for i in range(od, len(st)):
            if hledej in st[i]:
                return i + 1, n == len(slova)
    return None, False

def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__ or "použití: sbornik-strany.py sbornik.pdf [--zapsat]")
    st = strany(sys.argv[1])
    js = open(PROG, encoding="utf-8").read()
    vysl, od = [], 0
    for a, b, h in prednasky(js):
        s, cele = najdi(h, st, od)
        if s is None:
            s, cele = najdi(h, st, 0)
        if s:
            od = s - 1
        vysl.append((a, b, h, s, cele))
        print(f"{'str. %3d' % s if s else '  ???   '} {'' if cele or not s else '(jen začátek názvu) '}{h[:90]}")
    print(f"\nPDF má {len(st) - (1 if st and not st[-1] else 0)} stran, nalezeno {sum(1 for v in vysl if v[3])} z {len(vysl)} přednášek.")
    if "--zapsat" in sys.argv:
        for a, b, h, s, _ in reversed(vysl):
            r = re.sub(r",s:\d+\}", "}", js[a:b])
            if s:
                r = re.sub(r"\}(,?\s*)$", f",s:{s}}}\\1", r)
            js = js[:a] + r + js[b:]
        os.makedirs(os.path.dirname(CIL), exist_ok=True)
        try:
            import pikepdf
            with pikepdf.open(sys.argv[1]) as pdf:
                pdf.save(CIL, object_stream_mode=pikepdf.ObjectStreamMode.generate)
        except ImportError:
            print("! pikepdf chybí – PDF jen zkopírováno (v průvodci se může stahovat pomaleji)")
            shutil.copyfile(sys.argv[1], CIL)
        mb = max(1, round(os.path.getsize(CIL) / 1048576))
        js = re.sub(r"const SBORNIK=\{[^}]*\};", f'const SBORNIK={{url:"../{CIL}",mb:{mb}}};', js)
        open(PROG, "w", encoding="utf-8").write(js)
        print(f"Zapsáno do {PROG}, PDF v {CIL} ({mb} MB) – zkontrolujte ??? a čísla stran.")

main()
