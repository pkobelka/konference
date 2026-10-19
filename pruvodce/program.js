// Program konference – společný pro průvodce (pruvodce/index.html) i aplikaci pořadatele (index.html).
// Klíče přednášek (ut5, st31…) i bloků (utb4…) se počítají tady, aby byly v obou aplikacích stejné.
const DAYS=[{k:"ut",n:"Úterý",d:"27. 4."},{k:"st",n:"Středa",d:"28. 4."}];
const PROG={
 ut:[
  {t:"08:00",e:"09:00",h:"Prezence",w:"Foyer",brk:1},
  {t:"09:00",e:"09:15",h:"Zahájení a úvodní slovo",w:"Ing. Filip Wanner, Ph.D., ENERGIE AG BOHEMIA s.r.o. · Petr Kobelka, VHOS, a.s. · Ing. Vilém Žák, SOVAK ČR · Miroslav Krčil, DiS., radní Pardubického kraje, starosta města Hlinska"},
  {blok:"Legislativa ve vodním hospodářství",pr:"Ing. Vilém Žák"},
  {t:"09:15",e:"09:45",h:"Co nového si rozbalíme v balíčku DWD, UWWTD, IED, CERD, NIS2, PPD?",w:"Ing. Ondřej Beneš, Ph.D., MBA, LL.M. · Ing. Filip Wanner, Ph.D., SOVAK ČR a EurEau"},
  {t:"09:45",e:"10:15",h:"Reporting dle směrnice o čištění městských odpadních vod: Jak se mění s novou směrnicí? Co z něj můžeme zjistit?",w:"Mgr. Lada Stejskalová, Ing. Jiří Kučera, Ing. Miroslav Váňa, Výzkumný ústav vodohospodářský T. G. Masaryka, v.v.i."},
  {t:"10:15",e:"10:45",h:"První návrh legislativních úprav v souvislosti s novou směrnicí o čištění odpadních vod",w:"JUDr. Zdeněk Horáček, Ph.D., Zdeněk Horáček advokátní kancelář, s.r.o."},
  {t:"10:45",e:"11:15",h:"Opatření obecné povahy vs. zákon, aneb kdo má přednost na křižovatce",w:"Ing. Radka Rosenbergová, Ing. Ondřej Beneš, Ph.D., MBA, LL.M., Veolia Holding Česká republika, a.s. · JUDr. Zdeněk Horáček, Ph.D."},
  {t:"11:15",e:"11:45",h:"Umělá inteligence: možnosti, nástrahy, legislativa",w:"Ing. Jiří Kašparec, VAE CONTROLS, s.r.o."},
  {t:"11:45",e:"12:00",h:"Diskuze",w:"",brk:1},
  {t:"12:00",e:"12:15",h:"Prezentace odborných partnerů a sponzorů konference",w:"Kongresový sál",ad:1},
  {t:"12:15",e:"13:30",h:"Oběd",w:"Restaurace",brk:1,det:["Polévka · doplní pořadatel","Hlavní jídlo · doplní pořadatel","Vegetariánská varianta · doplní pořadatel","Bezlepkové a jiné diety hlaste předem"]},
  {blok:"Aktuální trendy v čistírenství I. – terciární čištění",pr:"Ing. Ondřej Beneš, Ph.D., MBA, LL.M."},
  {t:"13:30",e:"13:55",h:"Dopady a limity simultánního srážení fosforu",w:"Ing. Katarína Hanusová, Ing. Milan Lánský, Ph.D., Ing. Bc. Martin Srb, Ph.D., Ing. Petr Sýkora, Ph.D., PVK, a.s."},
  {t:"13:55",e:"14:15",h:"Provozní ověření inovativní technologie MABR na PČOV Čertousy",w:"Ing. Martin Koller, Ph.D., Ing. Sára Doubravská, Česká voda – MEMSEP, a.s. · Ing. Radka Rosenbergová, Veolia · Ing. Bc. Martin Srb, Ph.D., Petra Cebe, Jakub Vrbenský, PVK, a.s. · Ing. Jiří Rosický, PVS, a.s."},
  {t:"14:15",e:"14:35",h:"Změna řízení aktivačního procesu na ČOV Jihlava: konec kyslíkové éry – dusík přebírá velení",w:"Mgr. Tomáš Brabenec, Marián Trojan, SLUŽBY MĚSTA JIHLAVY s.r.o."},
  {t:"14:35",e:"15:00",h:"Pile Cloth – Nová filtrační technologie nejen pro terciární stupeň",w:"Ing. Aleš Vaverka, IN-EKO TEAM, s.r.o."},
  {t:"15:00",e:"15:15",h:"Diskuze",w:"",brk:1},
  {t:"15:15",e:"15:30",h:"Přestávka",w:"Foyer – výstava partnerů",brk:1,ad:1,det:["Káva, čaj a občerstvení","Výstava partnerů ve foyer"]},
  {blok:"Aktuální trendy v čistírenství II. – energetická neutralita ČOV",pr:"Ing. Bc. Martin Srb, Ph.D."},
  {t:"15:30",e:"16:00",h:"Moderní řešení při rekonstrukci tradičních ČOV, ČOV Hlinsko – 6 měsíců zkušeností z rekonstrukce provzdušení, technologie EnviroMix",w:"Mgr. Petr Kavalír, Ph.D., VS CHRUDIM, a.s. · Mgr. Iryna Lanko, Ph.D., Stavební Huť Slatiňany, a.s."},
  {t:"16:00",e:"16:30",h:"Koncepce energetiky ve skupině Severočeská voda",w:"Ing. Marcel Gómez, Ph.D., Ing. Filip Harciník, Severočeské vodovody a kanalizace, a.s."},
  {t:"16:30",e:"17:00",h:"Možnosti dosažení energetické neutrality na ČOV Havlíčkův Brod",w:"Ing. Zdeněk Zelený, VAK Havlíčkův Brod, a.s."},
  {t:"17:00",e:"17:30",h:"Diskuze, závěr prvního dne",w:"",brk:1},
  {t:"19:30",e:"02:00",h:"Společenský večer",w:"Kongres hotel Jezerka",brk:1,det:["Večeře formou rautu · doplní pořadatel","Program večera (hudba, překvapení) · doplní pořadatel","Svoz: z Kraskova v 19:00, zpět z Jezerky v 1:30 · viz Info → Cesta a svoz"]},
 ],
 st:[
  {blok:"Novinky a zkušenosti z provozování a řízení ČOV",pr:"Ing. Martin Pečenka, Ph.D."},
  {t:"09:00",e:"09:20",h:"Řešení nadlimitních producentů OV ve společnosti SčVK",w:"Ing. Monika Švarcová, Severočeské vodovody a kanalizace, a.s."},
  {t:"09:20",e:"09:40",h:"Vyhodnocování volných kapacit provozované VHI",w:"Ing. Vojtěch Kuncl, Severočeské vodovody a kanalizace, a.s."},
  {t:"09:40",e:"10:00",h:"Alternativní kontrola odtoků z ČOV",w:"Ing. Lenka Procházková, Ph.D., ČEVAK, a.s. · Ing. Jindřich Procházka, Ph.D., AquIQ s.r.o."},
  {t:"10:00",e:"10:20",h:"Měření emisí CO₂, CH₄ a N₂O z provzdušňovaných nádrží ČOV – 2023–2025",w:"RNDr. Josef Fuksa, CSc., Ing. Lenka Smetanová, Ing. Martina Plecitá, VÚV T. G. Masaryka, v.v.i. · Ing. Miroslav Češpiva, Ph.D., Ing. Petra Zabloudilová, Ph.D., Národní centrum zemědělského a potravinářského výzkumu, v.v.i."},
  {t:"10:20",e:"10:40",h:"Soft senzory a strojové učení pro střední a malé ČOV",w:"Mgr. Jaromír Sobotka, Ph.D., ASIO TECH, spol. s r.o."},
  {t:"10:40",e:"11:00",h:"Odpadní vody jako odpady – zdrojově orientovaná sanitace",w:"Ing. Karel Plotěný, ASIO TECH, spol. s r.o."},
  {t:"11:00",e:"11:20",h:"Dlouhodobé laboratorní a pilotní zkušenosti s odstraňováním mikropolutantů ve vyčištěných odpadních vodách",w:"Ing. Tomáš Lederer, Ph.D., TU Liberec"},
  {t:"11:20",e:"11:40",h:"Pokročilá úpravna MINT-NANOREC s umělou inteligencí pro kvartérní čištění vody",w:"Ing. Aleš Černín, Ph.D., Ing. Jan Stárek, New Water Group s.r.o."},
  {t:"11:40",e:"11:50",h:"Závěrečný souhrn konference",w:"",brk:1},
 ]
};
let n=2;for(const d in PROG){   // od 2: dřív tu bylo pondělí (2 body) – klíče přednášek (ut7…) i dotazů ve Firebase zůstanou stejné
let bk=null;PROG[d].forEach(x=>{if(x.blok){bk=x;x.bid=d+"b"+(n++)}else{x.id=d+(n++);if(bk&&!x.brk&&!x.ad&&x.w)x.bid=bk.bid}})}
const ALLT=Object.values(PROG).flat();
const DATES={ut:"2027-04-27",st:"2027-04-28"};
const mm=t=>{const m=/^(\d\d):(\d\d)$/.exec(t||"");return m?+m[1]*60+ +m[2]:null};
ALLT.forEach(x=>{if(x.blok)return;x.a=mm(x.t);x.b=mm(x.e);if(x.a!=null&&x.b!=null&&x.b<=x.a)x.b+=1440});

// Posun programu (zadává pořadatel, Firebase konference2027_verejne/posun = {klíč přednášky: minut}):
// posun platí od dané přednášky do konce bloku – nejbližší přestávka nebo nový blok ho ukončí (pokud nemá svůj).
ALLT.forEach(x=>{if(x.blok)return;x.a0=x.a;x.b0=x.b;x.t0=x.t;x.e0=x.e;x.posun=0;x.prot=0;x.zkr=0});
const hhmm=m=>{m=((m%1440)+1440)%1440;return String(Math.floor(m/60)).padStart(2,"0")+":"+String(m%60).padStart(2,"0")};
function posunPouzij(P){P=P||{};
 for(const d in PROG){let off=0;PROG[d].forEach(x=>{if(x.blok){off=0;return}x.prot=0;x.zkr=0;if(x.brk)off=0;if(P[x.id]!=null)off=+P[x.id]||0;
  x.posun=x.a0==null?0:off;x.a=x.a0==null?null:x.a0+x.posun;x.b=x.b0==null?null:x.b0+x.posun;
  x.t=x.a0==null?x.t0:hhmm(x.a);x.e=x.b0==null?x.e0:hhmm(x.b)});
  // návaznost: předchozí bod se protáhne (zpoždění vzniklo v něm), přestávka po posunutém bloku se zkrátí
  const l=PROG[d].filter(x=>!x.blok&&x.a0!=null);
  for(let i=1;i<l.length;i++){const p=l[i-1],x=l[i];
   if(p.b0===x.a0&&x.posun!==p.posun&&!x.brk){p.b=x.a;p.e=hhmm(p.b);p.prot=x.posun-p.posun}else p.prot=p.prot||0;
   if(x.brk&&p.b!=null&&p.b>x.a&&x.b!=null){x.a=Math.min(p.b,x.b-5);x.t=hhmm(x.a);x.zkr=x.a-x.a0}}}}
