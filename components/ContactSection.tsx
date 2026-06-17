import Link from "next/link";
import { siteInfo } from "@/data/site";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="brand-gradient relative overflow-hidden py-16 text-white md:py-24"
    >
      <div className="dots absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="font-display text-4xl md:text-5xl">Infos & contact</h2>
        <p className="mt-4 text-white/90">
          Passez nous voir ou commandez — on vous prépare tout, frais et minute.
        </p>

        <div className="mt-8 space-y-3 text-lg">
          <p>
            <span className="font-semibold text-gold">Adresse :</span>{" "}
            {siteInfo.address}
          </p>
          <p>
            <span className="font-semibold text-gold">Horaires :</span>{" "}
            {siteInfo.hours}
          </p>
          <p>
            <span className="font-semibold text-gold">Téléphone :</span>{" "}
            <Link href={siteInfo.phoneLink} className="font-semibold hover:underline">
              {siteInfo.phone}
            </Link>
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href={siteInfo.phoneLink}
            className="flex min-h-12 items-center justify-center rounded-full bg-white px-8 font-bold text-flame shadow-lg transition-transform hover:scale-105"
          >
            Appeler
          </Link>
          <Link
            href={siteInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-center rounded-full bg-gold px-8 font-bold text-ink transition-transform hover:scale-105"
          >
            WhatsApp
          </Link>
          <Link
            href={siteInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-center rounded-full border-2 border-white px-8 font-bold text-white transition-colors hover:bg-white/15"
          >
            Google Maps
          </Link>
        </div>
      </div>
    </section>
  );
}
