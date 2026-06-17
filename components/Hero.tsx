import Image from "next/image";
import Link from "next/link";
import { siteInfo } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="brand-gradient relative overflow-hidden text-white"
    >
      <div className="dots absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-gold/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center md:px-6 md:py-28">
        <span className="fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
          Smash · Tenders · Boxs · Fait maison
        </span>

        <div className="fade-in">
          <Image
            src="/logo-white.png"
            alt={siteInfo.name}
            width={448}
            height={146}
            priority
            className="mx-auto h-24 w-auto drop-shadow-lg sm:h-28 md:h-36"
          />
        </div>

        <p className="fade-in-delay mt-6 max-w-xl text-lg font-medium text-white/90 md:text-2xl">
          {siteInfo.tagline}
        </p>

        <div className="fade-in-delay mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href="#menu"
            className="flex min-h-12 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-flame shadow-lg transition-transform hover:scale-105"
          >
            Voir le menu
          </Link>
          <Link
            href={siteInfo.phoneLink}
            className="flex min-h-12 items-center justify-center rounded-full border-2 border-white px-8 text-base font-bold text-white transition-colors hover:bg-white/15"
          >
            Commander
          </Link>
        </div>

        <div className="fade-in-delay mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-medium text-white/85">
          <span>★★★★★ Smash burgers minute</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/50 sm:block" />
          <span>Prêt en ~10 min</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/50 sm:block" />
          <span>Sur place · À emporter · Livraison</span>
        </div>
      </div>
    </section>
  );
}
