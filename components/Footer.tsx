import Image from "next/image";
import Link from "next/link";
import { siteInfo } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink py-12 text-cream/80">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
        <Image
          src="/logo-white.png"
          alt={siteInfo.name}
          width={448}
          height={146}
          className="mx-auto h-12 w-auto"
        />
        <p className="mt-4 text-sm">{siteInfo.tagline}</p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <span>{siteInfo.address}</span>
          <span className="hidden h-1 w-1 rounded-full bg-cream/40 sm:block" />
          <span>{siteInfo.hours}</span>
          <span className="hidden h-1 w-1 rounded-full bg-cream/40 sm:block" />
          <Link
            href={siteInfo.phoneLink}
            className="font-semibold text-gold hover:underline"
          >
            {siteInfo.phone}
          </Link>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm font-semibold">
          <Link
            href={siteInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold"
          >
            Instagram
          </Link>
          <Link
            href={siteInfo.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold"
          >
            TikTok
          </Link>
        </div>

        <p className="mt-8 text-xs text-cream/50">
          © {year} {siteInfo.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
