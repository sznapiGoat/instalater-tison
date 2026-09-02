export type Photo = {
  src: string;
  /** Rozměry originálu, ať next/image nedopočítává a nic neposkakuje. */
  w: number;
  h: number;
  alt: string;
  caption: string;
  /** object-position výřezu. Všechny dlaždice jsou 4:3, tohle rozhoduje, co v nich zůstane. */
  pos?: string;
};

/**
 * Fotky z vlastních zakázek. Jsou v nízkém rozlišení, proto je nikde
 * nezvětšujeme přes zhruba 400 px na šířku a nedáváme je do velkých pásů.
 * Všechny dlaždice mají stejný poměr 4:3, výřez řídí pole pos.
 */
export const photos = {
  rozdelovacPodlahovka: {
    src: "/img/DSC_5686.webp",
    w: 1103,
    h: 620,
    alt: "Rozdělovač podlahového topení na stěně, od něj vějíř červených trubek okruhů rozvedený po modré izolaci na podlaze",
    caption: "Rozdělovač a okruhy podlahového topení připravené k zalití.",
  },
  systemovaDeska: {
    src: "/img/IMG20240320163343.webp",
    w: 1350,
    h: 606,
    alt: "Místnost v hrubé stavbě s bílými systémovými deskami podlahového topení položenými po celé ploše podlahy",
    caption: "Systémové desky podlahového topení po celé ploše místnosti.",
  },
  podlahovkaChodba: {
    src: "/img/IMG_20201020_154900.webp",
    w: 830,
    h: 1475,
    alt: "Chodba s reflexní folií na podlaze a smyčkami trubek podlahového topení vedenými po délce chodby",
    caption: "Podlahové topení v chodbě, uložené na reflexní podložce.",
    pos: "center 55%",
  },
  krbovaKamna: {
    src: "/img/IMG20220118152253.webp",
    w: 863,
    h: 1920,
    alt: "Černá krbová kamna se zataženým kouřovodem do komína, postavená na dřevěné podlaze u kamenné stěny",
    caption: "Krbová kamna osazená a napojená na kouřovod.",
    pos: "center 45%",
  },
  radiatorRozvody: {
    src: "/img/IMG20240416115759.webp",
    w: 1350,
    h: 606,
    alt: "Bílý deskový radiátor pod oknem obytné místnosti s měděnými rozvody vedenými po stěně nad podlahovou lištou",
    caption: "Radiátor napojený měděnými rozvody vedenými po stěně.",
  },
  kotelnaCerpadlo: {
    src: "/img/IMG20240416115930.webp",
    w: 863,
    h: 1920,
    alt: "Roh technické místnosti s měděnými rozvody, oranžovým oběhovým čerpadlem, manometrem, filtrem a několika kulovými uzávěry",
    caption: "Rozvody, oběhové čerpadlo a uzávěry v technické místnosti.",
    pos: "center 55%",
  },
  plynomery: {
    src: "/img/DSC_5067.webp",
    w: 830,
    h: 1475,
    alt: "Výklenek ve zdi se dvěma plynoměry, žlutým plynovým potrubím, kulovými uzávěry a přechodem do podlahy",
    caption: "Dva plynoměry a žlutý rozvod plynu ve výklenku.",
    pos: "center 45%",
  },
  plynovyKotel: {
    src: "/img/DSC_5511.webp",
    w: 830,
    h: 1475,
    alt: "Spodní část bílého nástěnného plynového kotle s připojovacím potrubím, uzávěry a flexi hadicí vedenou ke stěně",
    caption: "Nástěnný kotel napojený na měděné rozvody.",
    pos: "center 0%",
  },
  drazkaRozvody: {
    src: "/img/DSC_0135.webp",
    w: 1103,
    h: 620,
    alt: "Drážka vysekaná v rohu zdi s šedým odpadním kolenem, izolovanými trubkami studené a teplé vody a černým uzávěrem",
    caption: "Rozvody vody a odpadu vedené v drážce ve zdi.",
  },
  koupelnaHruba: {
    src: "/img/DSC_4604.webp",
    w: 830,
    h: 1475,
    alt: "Koupelna v hrubé stavbě z pórobetonových tvárnic s osazeným podomítkovým modulem WC a přivedenými rozvody vody a odpadu",
    caption: "Koupelna v hrubé stavbě s přivedenou vodou a odpadem.",
    pos: "center 40%",
  },
  koupelnaHotova: {
    src: "/img/IMG20240221133544.webp",
    w: 1350,
    h: 606,
    alt: "Dokončená obložená koupelna s umyvadlem, závěsným WC, madlem u stěny a bílým radiátorem",
    caption: "Dokončená koupelna po napojení všech zařizovacích předmětů.",
  },
  modulUOkna: {
    src: "/img/IMG20240513162133.webp",
    w: 1350,
    h: 606,
    alt: "Podomítkový modul závěsného WC osazený v hrubé stavbě vedle okna, se žlutými zátkami na vývodech",
    caption: "Podomítkový modul osazený a zaslepený do doby obkladu.",
  },
  geberitDvojice: {
    src: "/img/DSC_5700.webp",
    w: 1103,
    h: 620,
    alt: "Dva podomítkové moduly WC vedle sebe na cihelné stěně se šedým odpadním potrubím HT vedeným po zdi",
    caption: "Dvojice modulů a vnitřní odpadní rozvody z HT trub.",
  },
  kgVeVykopu: {
    src: "/img/IMG20240430154208.webp",
    w: 1350,
    h: 606,
    alt: "Šedé kanalizační potrubí s odbočkou uložené v rozkopaném terénu mezi sutí a štěrkem",
    caption: "Ležatá kanalizace s odbočkou uložená ve výkopu.",
  },
  pripojkaVykop: {
    src: "/img/IMG_20210628_141550.webp",
    w: 830,
    h: 1475,
    alt: "Výkop před domem s oranžovým kanalizačním potrubím KG v rýze a modrou spojkou, v pozadí bílá dodávka a pracovník u obrubníků",
    caption: "Domovní přípojka z KG potrubí uložená v rýze před domem.",
    pos: "center 18%",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

export const getPhotos = (keys: readonly string[]): Photo[] =>
  keys
    .map((k) => photos[k as PhotoKey] as Photo | undefined)
    .filter((p): p is Photo => Boolean(p));
