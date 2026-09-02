import Image from "next/image";

import { Reveal } from "@/components/site/Reveal";
import type { Photo } from "@/lib/photos";

/**
 * Zdrojové fotky mají kolem 400 px na šířku, proto sázíme do sloupců
 * s dlaždicí do zhruba 390 px a nikde je nezvětšujeme přes originál.
 */
export function PhotoMasonry({
  items,
  accent,
  className,
}: {
  items: (Photo & { accent?: string })[];
  accent: string;
  className?: string;
}) {
  return (
    <div
      className={`columns-1 gap-5 sm:columns-2 ${
        items.length > 2 ? "lg:columns-3" : "max-w-3xl"
      } ${className ?? ""}`}
    >
      {items.map((p, i) => (
        <Reveal key={p.src} delay={(i % 3) * 0.07} className="mb-5 break-inside-avoid">
          <figure>
            <div
              className="relative w-full overflow-hidden border border-line bg-mist"
              style={{ aspectRatio: p.ratio }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 390px"
                className="object-cover"
                style={{ objectPosition: p.pos ?? "center" }}
              />
            </div>
            <figcaption className="mt-2.5 flex gap-2.5 text-[0.85rem] leading-snug text-steel">
              <span
                aria-hidden
                className="mt-[0.55rem] h-[2px] w-5 shrink-0"
                style={{ background: p.accent ?? accent }}
              />
              <span>{p.caption}</span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
