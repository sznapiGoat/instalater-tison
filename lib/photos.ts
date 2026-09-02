export type Photo = {
  src: string;
  /** Rozměry originálu, ať next/image nedopočítává a nic neposkakuje. */
  w: number;
  h: number;
  alt: string;
  caption: string;
  /** Poměr dlaždice. Výšku na výšku ořízneme, ať sloupce nerozhodí jedna fotka. */
  ratio: "16/9" | "3/4";
  /** object-position výřezu. */
  pos?: string;
};

/**
 * Fotky z vlastních zakázek. Jsou v nízkém rozlišení, proto je nikde
 * nezvětšujeme přes zhruba 400 px na šířku a nedáváme je do velkých pásů.
 */
export const photos = {
  rozdelovacPodlahovka: {
    src: "/img/DSC_5686.webp",
    w: 450,
    h: 253,
    alt: "Rozdělovač podlahového topení na stěně, od něj vějíř červených trubek okruhů rozvedený po modré izolaci na podlaze",
    caption: "Rozdělovač a okruhy podlahového topení připravené k zalití.",
    ratio: "16/9",
  },
  systemovaDeska: {
    src: "/img/IMG20240320163343.webp",
    w: 450,
    h: 202,
    alt: "Místnost v hrubé stavbě s bílými systémovými deskami podlahového topení položenými po celé ploše podlahy",
    caption: "Systémové desky podlahového topení po celé ploše místnosti.",
    ratio: "16/9",
  },
  podlahovkaChodba: {
    src: "/img/IMG_20201020_154900.webp",
    w: 394,
    h: 700,
    alt: "Chodba s reflexní folií na podlaze a smyčkami trubek podlahového topení vedenými po délce chodby",
    caption: "Podlahové topení v chodbě, uložené na reflexní podložce.",
    ratio: "3/4",
    pos: "center 55%",
  },
  krbovaKamna: {
    src: "/img/IMG20220118152253.webp",
    w: 863,
    h: 1920,
    alt: "Černá krbová kamna se zataženým kouřovodem do komína, postavená na dřevěné podlaze u kamenné stěny",
    caption: "Krbová kamna osazená a napojená na kouřovod.",
    ratio: "3/4",
    pos: "center 45%",
  },
  radiatorRozvody: {
    src: "/img/IMG20240416115759.webp",
    w: 450,
    h: 202,
    alt: "Bílý deskový radiátor pod oknem obytné místnosti s měděnými rozvody vedenými po stěně nad podlahovou lištou",
    caption: "Radiátor napojený měděnými rozvody vedenými po stěně.",
    ratio: "16/9",
  },
  kotelnaCerpadlo: {
    src: "/img/IMG20240416115930.webp",
    w: 863,
    h: 1920,
    alt: "Roh technické místnosti s měděnými rozvody, oranžovým oběhovým čerpadlem, manometrem, filtrem a několika kulovými uzávěry",
    caption: "Rozvody, oběhové čerpadlo a uzávěry v technické místnosti.",
    ratio: "3/4",
    pos: "center 55%",
  },
  plynomery: {
    src: "/img/DSC_5067.webp",
    w: 394,
    h: 700,
    alt: "Výklenek ve zdi se dvěma plynoměry, žlutým plynovým potrubím, kulovými uzávěry a přechodem do podlahy",
    caption: "Dva plynoměry a žlutý rozvod plynu ve výklenku.",
    ratio: "3/4",
    pos: "center 45%",
  },
  plynovyKotel: {
    src: "/img/DSC_5511.webp",
    w: 394,
    h: 700,
    alt: "Bílý nástěnný plynový kotel s měděnými rozvody a uzávěry vedenými pod ním ke stěně",
    caption: "Nástěnný kotel napojený na měděné rozvody.",
    ratio: "3/4",
    pos: "center 30%",
  },
  drazkaRozvody: {
    src: "/img/DSC_0135.webp",
    w: 450,
    h: 253,
    alt: "Drážka vysekaná v rohu zdi s šedým odpadním kolenem, izolovanými trubkami studené a teplé vody a černým uzávěrem",
    caption: "Rozvody vody a odpadu vedené v drážce ve zdi.",
    ratio: "16/9",
  },
  koupelnaHruba: {
    src: "/img/DSC_4604.webp",
    w: 394,
    h: 700,
    alt: "Koupelna v hrubé stavbě z pórobetonových tvárnic s osazeným podomítkovým modulem WC a přivedenými rozvody vody a odpadu",
    caption: "Koupelna v hrubé stavbě s přivedenou vodou a odpadem.",
    ratio: "3/4",
    pos: "center 40%",
  },
  koupelnaHotova: {
    src: "/img/IMG20240221133544.webp",
    w: 450,
    h: 202,
    alt: "Dokončená obložená koupelna s umyvadlem, závěsným WC, madlem u stěny a bílým radiátorem",
    caption: "Dokončená koupelna po napojení všech zařizovacích předmětů.",
    ratio: "16/9",
  },
  modulUOkna: {
    src: "/img/IMG20240513162133.webp",
    w: 450,
    h: 202,
    alt: "Podomítkový modul závěsného WC osazený v hrubé stavbě vedle okna, se žlutými zátkami na vývodech",
    caption: "Podomítkový modul osazený a zaslepený do doby obkladu.",
    ratio: "16/9",
  },
  geberitDvojice: {
    src: "/img/DSC_5700.webp",
    w: 450,
    h: 253,
    alt: "Dva podomítkové moduly WC vedle sebe na cihelné stěně se šedým odpadním potrubím HT vedeným po zdi",
    caption: "Dvojice modulů a vnitřní odpadní rozvody z HT trub.",
    ratio: "16/9",
  },
  kgVeVykopu: {
    src: "/img/IMG20240430154208.webp",
    w: 450,
    h: 202,
    alt: "Šedé kanalizační potrubí s odbočkou uložené v rozkopaném terénu mezi sutí a štěrkem",
    caption: "Ležatá kanalizace s odbočkou uložená ve výkopu.",
    ratio: "16/9",
  },
  pripojkaVykop: {
    src: "/img/IMG_20210628_141550.webp",
    w: 394,
    h: 700,
    alt: "Výkop před domem s oranžovým kanalizačním potrubím KG v rýze a modrou spojkou, v pozadí bílá dodávka a pracovník u obrubníků",
    caption: "Domovní přípojka z KG potrubí uložená v rýze před domem.",
    ratio: "3/4",
    pos: "center 50%",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

export const getPhotos = (keys: readonly string[]): Photo[] =>
  keys
    .map((k) => photos[k as PhotoKey] as Photo | undefined)
    .filter((p): p is Photo => Boolean(p));
