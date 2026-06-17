export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price?: number;
  priceLabel?: string;
  badge?: "best-seller" | "nouveau" | "signature" | "offert";
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  highlight?: boolean;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "boxs",
    title: "Boxs & Riz Crousty",
    highlight: true,
    items: [
      {
        id: "crunch-box",
        name: "Crunch Box",
        description:
          "1 smash burger ou 1 chicken burger, 2 tenders maison, signature twister fries. + 1 sirop offert",
        price: 9.9,
        badge: "best-seller",
      },
      {
        id: "box-duo",
        name: "Box Duo",
        description:
          "1 smash burger + 1 chicken burger, portion de frites, sauce maison au choix.",
        price: 12.9,
      },
      {
        id: "box-du-moment",
        name: "Box du Moment",
        description:
          "Chaque saison, notre équipe imagine une nouvelle combinaison gourmande. Une création éphémère, inspirée du moment.",
        priceLabel: "Du moment",
        badge: "nouveau",
      },
      {
        id: "riz-crousty",
        name: "Riz Crousty",
        description:
          "Riz parfumé, morceaux de tenders maison croustillants, nappés de sauce maison, oignons frits, persil et sauce piquante sucrée.",
        price: 7.9,
      },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    note: "+2,90 € en menu : frites + boisson (33cl)",
    highlight: true,
    items: [
      {
        id: "smash",
        name: "Smash",
        description:
          "1 steak smashé, cheddar fondu, cornichons, sauce maison, oignons frits, pain brioché.",
        price: 6.9,
      },
      {
        id: "double-smash",
        name: "Double Smash",
        description:
          "2 steaks smashés, cheddar fondu, cornichons, sauce maison, oignons frits, pain brioché toasté.",
        price: 7.9,
      },
      {
        id: "triple-smash",
        name: "Triple Smash",
        description:
          "3 steaks smashés, cheddar fondu, cornichons, sauce maison, oignons frits, pain brioché toasté.",
        price: 8.9,
      },
      {
        id: "chicken",
        name: "Chicken",
        description:
          "Filet de poulet frit, salade, oignons, sauce maison, cheddar.",
        price: 6.9,
      },
      {
        id: "chickn-beef",
        name: "Chick'n Beef",
        description:
          "1 steak smashé + 1 filet de poulet frit, salade, oignons frits, sauce maison, double cheddar.",
        price: 8.9,
      },
      {
        id: "honey-goat",
        name: "The Honey Goat",
        description:
          "Deux steaks smash, fromage de chèvre chaud, oignons caramélisés et filet de miel sur pain brioché toasté.",
        price: 9.9,
        badge: "signature",
      },
      {
        id: "smoky-bacon",
        name: "The Smoky Bacon",
        description:
          "Double steak smash, cheddar coulant, bacon de bœuf grillé et sauce BBQ.",
        price: 9.9,
        badge: "signature",
      },
      {
        id: "alpine-crunch",
        name: "The Alpine Crunch",
        description:
          "Deux steaks smash, raclette fondante, galette de pomme de terre croustillante, oignons caramélisés et sauce fromagère maison.",
        price: 9.9,
        badge: "signature",
      },
      {
        id: "truffe-smash",
        name: "The Truffe Smash",
        description:
          "Deux steaks smash, cheddar, nappés d'une sauce truffée onctueuse, relevés de cornichons croquants et d'oignons frits.",
        price: 11.9,
        badge: "signature",
      },
    ],
  },
  {
    id: "tenders",
    title: "Tenders",
    note: "Fait maison · +2,90 € en menu : frites + boisson (33cl)",
    items: [
      {
        id: "3-tenders",
        name: "3 Maxi Tenders",
        description: "Tenders maison croustillants, sauce au choix.",
        price: 4.9,
      },
      {
        id: "7-tenders",
        name: "7 Maxi Tenders",
        description: "Tenders maison croustillants, sauce au choix.",
        price: 10.9,
      },
      {
        id: "duo-tenders",
        name: "Format Duo : 14 Maxi Tenders",
        description:
          "Tenders maison croustillants, 2 frites, 2 boissons (33cl), sauce au choix.",
        price: 18.9,
      },
    ],
  },
  {
    id: "starters",
    title: "Starters",
    items: [
      {
        id: "frites",
        name: "Frites",
        description: "Frites croustillantes assaisonnées + sauce maison.",
        price: 2.5,
      },
      {
        id: "loaded-fries",
        name: "Loaded Fries",
        description:
          "Frites garnies de sauce maison, persil, oignons frits, morceaux de tenders croustillants.",
        price: 5.9,
        badge: "best-seller",
      },
      {
        id: "mozza-sticks",
        name: "Mozza Sticks (6 pcs)",
        description: "Bâtonnets fondants à la mozzarella.",
        price: 4.5,
      },
      {
        id: "nuggets",
        name: "Nuggets (6 pcs)",
        description: "Nuggets croustillants servis avec une sauce maison au choix.",
        price: 4.9,
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        id: "dessert-moment",
        name: "Dessert du Moment",
        description: "Une douceur à découvrir en caisse ou sur nos réseaux.",
        priceLabel: "Du moment",
      },
    ],
  },
  {
    id: "boissons",
    title: "Boissons",
    items: [
      {
        id: "canettes",
        name: "Canettes 33cl",
        price: 1.5,
      },
      {
        id: "sirop",
        name: "Sirop",
        price: 1.0,
      },
    ],
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

export const badgeLabels: Record<NonNullable<MenuItem["badge"]>, string> = {
  "best-seller": "Best-seller",
  nouveau: "Nouveau",
  signature: "Signature",
  offert: "Offert",
};
