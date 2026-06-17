import Link from "next/link";

const stars = [
  {
    emoji: "🍔",
    title: "Smash Burgers",
    description:
      "Steaks smashés minute, cheddar fondu, pain brioché toasté et sauces maison.",
  },
  {
    emoji: "🍗",
    title: "Tenders maison",
    description:
      "Panés à la commande, ultra croustillants dehors et fondants dedans.",
  },
  {
    emoji: "🍱",
    title: "Boxs & Riz Crousty",
    description:
      "Des formats généreux à partager, pensés pour tous les appétits.",
  },
];

export default function Stars() {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-flame">
          Nos incontournables
        </p>
        <h2 className="mt-2 text-center font-display text-4xl text-ink md:text-5xl">
          Trois spécialités, un seul mot d&apos;ordre&nbsp;: se régaler
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stars.map((star) => (
            <Link
              key={star.title}
              href="#menu"
              className="group rounded-3xl border border-ink/10 bg-white p-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-flame/30 hover:shadow-xl"
            >
              <div className="brand-gradient mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-3xl shadow-md transition-transform group-hover:scale-110">
                <span aria-hidden="true">{star.emoji}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl text-ink">{star.title}</h3>
              <p className="mt-2 text-ink/70">{star.description}</p>
              <span className="mt-4 inline-block text-sm font-bold text-flame">
                Voir le menu →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
