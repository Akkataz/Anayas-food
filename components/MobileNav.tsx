import Image from "next/image";
import Link from "next/link";
import { navLinks, siteInfo } from "@/data/site";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileNav({ open, onClose }: MobileNavProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="absolute inset-0 bg-ink/50"
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-cream p-6 shadow-xl"
        aria-label="Navigation mobile"
      >
        <div className="flex items-center justify-between">
          <Image
            src="/logo-trim.png"
            alt={siteInfo.name}
            width={448}
            height={146}
            className="h-8 w-auto"
          />
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/20"
            aria-label="Fermer le menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="mt-8 flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="flex min-h-12 items-center rounded-lg px-4 text-lg font-medium text-ink transition-colors hover:bg-gold/20"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            href={siteInfo.phoneLink}
            onClick={onClose}
            className="brand-gradient flex min-h-12 items-center justify-center rounded-full px-6 font-bold text-white"
          >
            Appeler — {siteInfo.phone}
          </Link>
          <Link
            href={siteInfo.whatsapp}
            onClick={onClose}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-center rounded-full border-2 border-flame px-6 font-bold text-flame"
          >
            Commander via WhatsApp
          </Link>
        </div>
      </nav>
    </div>
  );
}
