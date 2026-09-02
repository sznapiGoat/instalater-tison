import Image from "next/image";

import { Reveal } from "@/components/site/Reveal";

type Props = {
  /** transform-origin výřezu, např. "47% 38%". */
  focus: string;
  /** Přiblížení fotky, aby byl čitelný konkrétní kus polepu. */
  zoom?: number;
  alt: string;
  caption: string;
  accent: string;
};

/**
 * Detail polepu dodávky. Je to jediná reálná fotka, kterou od firmy máme, tak
 * ji každá stránka ukazuje jiným výřezem, aby ukazovala svůj obor.
 */
export function VanDetail({ focus, zoom = 1.9, alt, caption, accent }: Props) {
  return (
    <Reveal>
      <figure>
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy-deep sm:aspect-[21/9]">
          <Image
            src="/img/van.jpg"
            alt={alt}
            fill
            sizes="(max-width: 1216px) 100vw, 1216px"
            className="object-cover"
            style={{ transform: `scale(${zoom})`, transformOrigin: focus }}
          />
        </div>
        <figcaption className="mt-4 flex max-w-2xl items-start gap-3 text-sm leading-relaxed text-steel">
          <span aria-hidden className="mt-2 h-[3px] w-8 shrink-0" style={{ background: accent }} />
          {caption}
        </figcaption>
      </figure>
    </Reveal>
  );
}
