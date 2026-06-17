import Link from "next/link";
import { menuCategories } from "@/data/menu";
import MenuCard from "./MenuCard";

export default function MenuSection() {
  return (
    <section id="menu" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-flame">
          La carte
        </p>
        <h2 className="mt-2 text-center font-display text-4xl text-ink md:text-6xl">
          Notre menu
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-ink/70">
          Des produits frais, des portions généreuses et des prix tout doux.
        </p>

        <div className="mt-14 space-y-14">
          {menuCategories.map((category) => (
            <div key={category.id}>
              <div className="flex flex-col gap-1 border-b-2 border-flame/20 pb-3 sm:flex-row sm:items-end sm:justify-between">
                <h3 className="flex items-center gap-3 font-display text-3xl text-ink md:text-4xl">
                  <span className="brand-gradient inline-block h-7 w-1.5 rounded-full" aria-hidden="true" />
                  {category.title}
                </h3>
                {category.note && (
                  <p className="text-sm font-semibold text-flame">
                    {category.note}
                  </p>
                )}
              </div>

              <div
                className={`mt-6 grid gap-4 ${
                  category.items.length > 1 ? "sm:grid-cols-2" : ""
                }`}
              >
                {category.items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/menu.png"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-flame px-8 font-bold text-flame transition-colors hover:bg-flame hover:text-white"
          >
            Voir le menu complet (affiche)
          </Link>
        </div>
      </div>
    </section>
  );
}
