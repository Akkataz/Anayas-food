import {
  badgeLabels,
  formatPrice,
  type MenuItem,
} from "@/data/menu";

type MenuCardProps = {
  item: MenuItem;
};

const badgeStyles: Record<NonNullable<MenuItem["badge"]>, string> = {
  "best-seller": "bg-red text-white",
  signature: "bg-ink text-gold",
  nouveau: "bg-gold text-ink",
  offert: "bg-flame text-white",
};

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="group flex flex-col gap-1.5 rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-flame/30 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="font-display text-xl leading-none text-ink md:text-2xl">
            {item.name}
          </h4>
          {item.badge && (
            <span
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${badgeStyles[item.badge]}`}
            >
              {badgeLabels[item.badge]}
            </span>
          )}
        </div>
        <span className="shrink-0 rounded-full bg-gold/20 px-3 py-1 text-sm font-extrabold text-flame">
          {item.price !== undefined ? formatPrice(item.price) : item.priceLabel}
        </span>
      </div>
      {item.description && (
        <p className="text-sm leading-relaxed text-ink/65">{item.description}</p>
      )}
    </article>
  );
}
