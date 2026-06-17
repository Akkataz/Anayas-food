import { siteInfo } from "@/data/site";

const stats = [
  { value: "100%", label: "Fait maison" },
  { value: "~10 min", label: "Service rapide" },
  { value: "4", label: "Sauces signatures" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-flame">
          Qui sommes-nous
        </p>
        <h2 className="mt-2 font-display text-4xl text-ink md:text-5xl">
          À propos d&apos;{siteInfo.name}
        </h2>
        <div className="mt-8 space-y-4 text-lg leading-relaxed text-ink/75">
          {siteInfo.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-ink/10 bg-cream p-5"
            >
              <p className="text-gradient font-display text-3xl md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink/60 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
