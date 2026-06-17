import Link from "next/link";
import { siteInfo } from "@/data/site";

export default function InfoBanner() {
  return (
    <section className="border-y border-ink/10 bg-gold/15 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center md:flex-row md:justify-center md:gap-12 md:px-6 md:text-left">
        <div className="flex items-center gap-2">
          <span className="text-flame" aria-hidden="true">🕐</span>
          <span className="text-sm font-medium text-ink md:text-base">
            {siteInfo.hours}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-flame" aria-hidden="true">📍</span>
          <span className="text-sm font-medium text-ink md:text-base">
            {siteInfo.address}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-flame" aria-hidden="true">📞</span>
          <Link
            href={siteInfo.phoneLink}
            className="text-sm font-semibold text-flame hover:underline md:text-base"
          >
            {siteInfo.phone}
          </Link>
        </div>
      </div>
    </section>
  );
}
