export type IconKey =
  | "topeni"
  | "voda"
  | "plyn"
  | "kanalizace"
  | "inspekce"
  | "cisteni";

export type Service = {
  slug: string;
  /** Krátký název do navigace a dlaždic. */
  name: string;
  /** Jednořádkový popis na homepage. */
  teaser: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  accent: string;
  /** Světlejší varianta akcentu pro tmavé pozadí. */
  accentOnDark: string;
  /** Výřez fotky polepu (transform-origin) a jeho popisek. */
  photo: { focus: string; alt: string; caption: string };
  icon: IconKey;
  items: { name: string; desc: string }[];
  whenToCall: string;
  related: string[];
};

export const services: Service[] = [
  {
    slug: "topeni",
    name: "Topení",
    teaser: "Podlahové topení, krbová kamna i solární systémy.",
    h1: "Topenářské práce v Hrušovanech nad Jevišovkou",
    metaTitle: "Topenář Hrušovany nad Jevišovkou | Tisoň Instalatér-Topenář",
    metaDescription:
      "Podlahové topení, krbová kamna a solární systémy v Hrušovanech nad Jevišovkou a okolí. Firma s dvacetiletou tradicí, nezávazná cenová nabídka na místě.",
    intro:
      "Topení děláme od návrhu otopné soustavy až po napuštění a zatopení. V Hrušovanech nad Jevišovkou a širokém okolí montujeme podlahové vytápění, připojujeme krbová kamna a instalujeme solární systémy pro ohřev vody. Vzdálenější zakázky bereme po domluvě.",
    accent: "#E2621B",
    accentOnDark: "#F0813C",
    photo: {
      focus: "47% 38.5%",
      alt: "Detail polepu na boku dodávky Miroslava Tisoně: nápis TOPENÍ červeně na fotce plamenů, vedle něj ikona plamínku.",
      caption:
        "Prostřední pole polepu patří topení. Plameny na dodávce nejsou dekorace, je to jedna ze tří hlavních větví, které vozíme na každou zakázku.",
    },
    icon: "topeni",
    items: [
      {
        name: "Podlahové topení",
        desc: "Rozvržení a montáž teplovodních okruhů, napojení na rozdělovač, tlaková zkouška před zalitím podlahy.",
      },
      {
        name: "Krbová kamna",
        desc: "Osazení kamen a napojení na otopnou soustavu včetně rozvodů k radiátorům.",
      },
      {
        name: "Solární systémy",
        desc: "Instalace solárních kolektorů a jejich zapojení do ohřevu teplé vody.",
      },
    ],
    whenToCall:
      "Ozvěte se, když stavíte nebo rekonstruujete a řešíte, čím a jak budete topit, když vám topení netopí rovnoměrně, nebo když chcete ke stávající soustavě přidat další zdroj tepla.",
    related: ["voda", "plyn"],
  },
  {
    slug: "voda",
    name: "Voda",
    teaser: "Rozvody vody, vodárny a dešťová užitková voda.",
    h1: "Vodoinstalace v Hrušovanech nad Jevišovkou",
    metaTitle:
      "Vodoinstalatér Hrušovany nad Jevišovkou | Tisoň Instalatér-Topenář",
    metaDescription:
      "Rozvody vody, domácí vodárny a využití dešťové užitkové vody v Hrušovanech nad Jevišovkou a okolí. Dvacet let praxe, cenová nabídka na místě.",
    intro:
      "Vodu vedeme od přípojky až k poslední baterii. Děláme nové rozvody i výměny starých, zapojujeme domácí vodárny a řešíme využití dešťové vody na zalévání a splachování. Pracujeme v Hrušovanech nad Jevišovkou a širokém okolí.",
    accent: "#1E7FC2",
    accentOnDark: "#4FA8E8",
    photo: {
      focus: "27% 38.5%",
      alt: "Detail polepu na boku dodávky Miroslava Tisoně: nápis VODA tmavě modře na fotce vodní hladiny, vedle něj ikona modré kapky.",
      caption:
        "Levé pole polepu patří vodě. Rozvody, vodárny i dešťovka končí u téhle jedné dodávky.",
    },
    icon: "voda",
    items: [
      {
        name: "Rozvody vody",
        desc: "Nové rozvody studené i teplé vody, výměny dožilého potrubí, napojení zařizovacích předmětů.",
      },
      {
        name: "Vodárny",
        desc: "Zapojení domácí vodárny ze studny nebo vrtu včetně tlakové nádoby a jištění.",
      },
      {
        name: "Dešťová užitková voda",
        desc: "Svedení dešťové vody do nádrže a rozvod užitkové vody pro zahradu a splachování.",
      },
    ],
    whenToCall:
      "Volejte, když plánujete novou koupelnu, když vám v domě klesá tlak vody, když chcete přejít ze studny na vodárnu, nebo když někde uniká voda a je potřeba to rychle uzavřít a opravit.",
    related: ["topeni", "kanalizace"],
  },
  {
    slug: "plyn",
    name: "Plyn",
    teaser: "Rozvody plynu, připojení spotřebičů, možnost autogenu.",
    h1: "Plynoinstalace v Hrušovanech nad Jevišovkou",
    metaTitle:
      "Rozvody plynu Hrušovany nad Jevišovkou | Tisoň Instalatér-Topenář",
    metaDescription:
      "Rozvody plynu a připojení plynových spotřebičů v Hrušovanech nad Jevišovkou a okolí. Možnost autogenu. Firma s dvacetiletou tradicí.",
    intro:
      "Plynové rozvody vedeme v celém domě i v dílně a připojujeme na ně spotřebiče. Máme možnost autogenu, takže si poradíme i tam, kde je potřeba pálit nebo svařovat přímo na místě. Působíme v Hrušovanech nad Jevišovkou a širokém okolí.",
    accent: "#D2172E",
    accentOnDark: "#F0455A",
    photo: {
      focus: "62% 38.5%",
      alt: "Detail polepu na boku dodávky Miroslava Tisoně: nápis PLYN tmavě modře s ikonou modrého plamínku, vpravo kabina vozu.",
      caption:
        "Pravé pole polepu patří plynu. Rozvody i připojení spotřebičů, včetně možnosti autogenu.",
    },
    icon: "plyn",
    items: [
      {
        name: "Rozvody plynu",
        desc: "Vedení nových plynových rozvodů a úpravy stávajících tras v domě i v provozu.",
      },
      {
        name: "Připojení spotřebičů",
        desc: "Napojení kotle, sporáku nebo ohřívače na plyn včetně uzávěru a připojovacího potrubí.",
      },
      {
        name: "Možnost autogenu",
        desc: "Práce s autogenem přímo na místě tam, kde je potřeba pálit nebo spojovat kovové díly.",
      },
    ],
    whenToCall:
      "Ozvěte se, když měníte kotel nebo sporák, když potřebujete přivést plyn na nové místo, nebo když stěhujete spotřebič a je nutné přeložit připojovací potrubí.",
    related: ["topeni", "voda"],
  },
  {
    slug: "kanalizace",
    name: "Kanalizace",
    teaser: "Domovní přípojky, vnitřní rozvody HT, venkovní rozvody KG.",
    h1: "Kanalizace a odpady v Hrušovanech nad Jevišovkou",
    metaTitle: "Kanalizace Hrušovany nad Jevišovkou | Tisoň Instalatér-Topenář",
    metaDescription:
      "Domovní kanalizační přípojky, vnitřní rozvody HT a venkovní rozvody KG v Hrušovanech nad Jevišovkou a okolí. Dvacet let praxe.",
    intro:
      "Kanalizaci řešíme celou, od svodů v domě po přípojku na řad. Uvnitř stavíme rozvody z HT trub, venku z KG potrubí, a spády navrhujeme tak, aby se odpad nikde nezdržoval. Působíme v Hrušovanech nad Jevišovkou a širokém okolí.",
    accent: "#103A66",
    accentOnDark: "#4E8FD1",
    photo: {
      focus: "47% 55%",
      alt: "Detail polepu na boku dodávky Miroslava Tisoně: řádek čištění kanalizací - inspekce kamerou, pod ním telefon 723 304 631 a oválné logo instalatér Tisoň topenář.",
      caption:
        "Pod hlavním polepem je řádek, který na dodávce vozíme kvůli kanalizaci. Přípojky, HT rozvody i KG potrubí v zemi.",
    },
    icon: "kanalizace",
    items: [
      {
        name: "Domovní přípojky",
        desc: "Napojení objektu na kanalizační řad včetně trasy výkopu a osazení revizní šachty.",
      },
      {
        name: "Vnitřní rozvody HT",
        desc: "Odpadní potrubí v domě z HT trub, svody od zařizovacích předmětů a odvětrání stoupačky.",
      },
      {
        name: "Venkovní rozvody KG",
        desc: "Ležatá kanalizace v zemi z KG potrubí ve spádu, uložení do pískového lože a zasypání.",
      },
    ],
    whenToCall:
      "Volejte při stavbě nebo přístavbě, když se odpad opakovaně vrací, když staré litinové potrubí praská, nebo když se napojujete na nově vybudovaný kanalizační řad.",
    related: ["cisteni-kanalizace", "inspekce-kamerou"],
  },
  {
    slug: "inspekce-kamerou",
    name: "Inspekce kamerou",
    teaser: "Náhled do potrubí, záznam na USB, detekce místa lokátorem.",
    h1: "Inspekce potrubí kamerou v Hrušovanech nad Jevišovkou",
    metaTitle:
      "Inspekce kamerou Hrušovany nad Jevišovkou | Tisoň Instalatér-Topenář",
    metaDescription:
      "Kamerová inspekce potrubí a kanalizace v Hrušovanech nad Jevišovkou a okolí. Náhled do potrubí, možnost záznamu na USB, detekce místa lokátorem.",
    intro:
      "Než se začne kopat, je lepší se do potrubí podívat. Kamerou projedeme trasu, ukážeme vám, co je uvnitř, a lokátorem najdeme přesné místo poruchy, aby výkop nebyl větší, než musí být. Ze záznamu vám můžeme udělat kopii na USB.",
    accent: "#33414E",
    accentOnDark: "#9FB2C2",
    photo: {
      focus: "53% 50%",
      alt: "Detail polepu na boku dodávky Miroslava Tisoně: detail slov inspekce kamerou z řádku čištění kanalizací - inspekce kamerou.",
      caption:
        "Inspekce kamerou má na dodávce vlastní řádek. Kamera i lokátor jezdí s námi, nemusíte je nikde shánět.",
    },
    icon: "inspekce",
    items: [
      {
        name: "Náhled do potrubí",
        desc: "Průjezd kamerou celou trasou, sledování stavu potrubí, spojů a spádu v reálném čase.",
      },
      {
        name: "Možnost záznamu na USB",
        desc: "Záznam z inspekce si na přání odvezete na USB jako podklad pro opravu nebo pro majitele objektu.",
      },
      {
        name: "Detekce místa lokátorem",
        desc: "Zaměření hlavy kamery lokátorem nad terénem, aby se výkop vedl přesně na poruchu.",
      },
    ],
    whenToCall:
      "Ozvěte se, když nevíte, kudy potrubí vede, když se ucpává stále stejné místo, když kupujete starší dům a chcete znát stav odpadů, nebo když je potřeba doložit stav potrubí záznamem.",
    related: ["cisteni-kanalizace", "kanalizace"],
  },
  {
    slug: "cisteni-kanalizace",
    name: "Čištění kanalizace",
    teaser: "Strojní čištění do 22 m, malá i velká pružina, tlaková tryska.",
    h1: "Čištění kanalizace v Hrušovanech nad Jevišovkou",
    metaTitle:
      "Čištění kanalizace Hrušovany nad Jevišovkou | Tisoň Instalatér-Topenář",
    metaDescription:
      "Strojní čištění kanalizace do 22 metrů, malá i velká pružina a tlakové čištění tryskou v Hrušovanech nad Jevišovkou a okolí. Dvacet let praxe.",
    intro:
      "Ucpaný odpad čistíme strojně do vzdálenosti 22 metrů. Podle průměru potrubí nasadíme malou nebo velkou pružinu, na mastnotu a nánosy použijeme tlakovou trysku. Jezdíme do Hrušovan nad Jevišovkou a širokého okolí.",
    accent: "#0E8A82",
    accentOnDark: "#2CC0B5",
    photo: {
      focus: "34% 52%",
      alt: "Detail polepu na boku dodávky Miroslava Tisoně: detail slov čištění kanalizací, nad nimi spodní část polepu s plameny a vodní hladinou.",
      caption:
        "Čištění kanalizace je na dodávce hned pod hlavním polepem. Stroj, pružiny i tlaková tryska jsou součástí výbavy.",
    },
    icon: "cisteni",
    items: [
      {
        name: "Strojní čištění do 22 m",
        desc: "Průchod strojem po trase odpadu do vzdálenosti 22 metrů od místa nasazení.",
      },
      {
        name: "Malá a velká pružina",
        desc: "Volba pružiny podle průměru potrubí, od úzkých svodů od umyvadla po hlavní ležatou kanalizaci.",
      },
      {
        name: "Tlakové čištění tryskou",
        desc: "Tlaková voda tryskou na mastnotu a usazeniny, které pružina jen protlačí, ale neodstraní.",
      },
    ],
    whenToCall:
      "Volejte, jakmile odpad odtéká pomalu nebo se vrací, když je ucpaná toaleta či dřez a domácí prostředky nezabraly, a před zimou, pokud se vám odpady ucpávají opakovaně.",
    related: ["inspekce-kamerou", "kanalizace"],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
