export type DietaryTag = "V" | "VG" | "GF";

export type MenuCategoryId = "starters" | "mains" | "desserts" | "drinks";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategoryId;
  tags?: DietaryTag[];
  /** Photo slot name -> /public/images/<image>.jpg (signature dishes only). */
  image?: string;
  signature?: boolean;
}

export const menuCategories: {
  id: MenuCategoryId;
  label: string;
  note: string;
}[] = [
  {
    id: "starters",
    label: "Starters",
    note: "Made for sharing, best ordered two or three at a time.",
  },
  {
    id: "mains",
    label: "Mains",
    note: "Cooked over open fire or slow-braised, finished at the pass.",
  },
  {
    id: "desserts",
    label: "Desserts",
    note: "Gentle, fragrant and never too sweet.",
  },
  {
    id: "drinks",
    label: "Drinks",
    note: "Herbs from our window boxes, citrus and a little saffron.",
  },
];

export const dietaryKey: Record<DietaryTag, string> = {
  V: "Vegetarian",
  VG: "Vegan",
  GF: "Gluten-free",
};

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: "charred-cauliflower",
    name: "Charred Saffron Cauliflower",
    description:
      "Whipped feta, pomegranate, toasted pine nuts, dill and a saffron-honey glaze.",
    price: 14,
    category: "starters",
    tags: ["V", "GF"],
    image: "charred-cauliflower",
    signature: true,
  },
  {
    id: "burrata-figs",
    name: "Burrata with Roasted Figs",
    description:
      "Sage honey, black pepper and grilled sourdough rubbed with garlic.",
    price: 17,
    category: "starters",
    tags: ["V"],
  },
  {
    id: "lamb-kofta",
    name: "Spiced Lamb Kofta",
    description:
      "Smoked yoghurt, torn mint, pickled shallot and warm flatbread.",
    price: 16,
    category: "starters",
  },
  {
    id: "tomato-salad",
    name: "Heirloom Tomato and Herb Salad",
    description:
      "Charred spring onion, sumac, olive oil and a scatter of fresh sage.",
    price: 13,
    category: "starters",
    tags: ["VG", "GF"],
  },

  // Mains
  {
    id: "saffron-risotto",
    name: "Saffron Risotto with Seared Scallops",
    description:
      "Carnaroli rice, slow-steeped saffron, lemon butter and crisp sage leaves.",
    price: 34,
    category: "mains",
    tags: ["GF"],
    image: "saffron-risotto",
    signature: true,
  },
  {
    id: "sage-chicken",
    name: "Sage-Brined Roast Chicken",
    description:
      "Crushed potatoes, charred lemon, wilted greens and a rich pan jus.",
    price: 29,
    category: "mains",
    tags: ["GF"],
  },
  {
    id: "braised-lamb",
    name: "Slow-Braised Lamb Shoulder",
    description:
      "Cooked for six hours with preserved lemon, apricot and warm spices; creamy polenta.",
    price: 36,
    category: "mains",
    tags: ["GF"],
  },
  {
    id: "mushroom-gnocchi",
    name: "Wild Mushroom and Sage Gnocchi",
    description:
      "Hand-rolled potato gnocchi, brown butter, roasted mushrooms and aged pecorino.",
    price: 26,
    category: "mains",
    tags: ["V"],
  },
  {
    id: "sea-bream",
    name: "Whole Roasted Sea Bream",
    description:
      "Fennel, blistered cherry tomatoes, saffron aioli and grilled lemon.",
    price: 38,
    category: "mains",
    tags: ["GF"],
  },

  // Desserts
  {
    id: "saffron-panna-cotta",
    name: "Saffron Panna Cotta",
    description:
      "Poached pear, pistachio crumb and a thread of orange-blossom syrup.",
    price: 11,
    category: "desserts",
    tags: ["V", "GF"],
    image: "saffron-panna-cotta",
    signature: true,
  },
  {
    id: "olive-oil-cake",
    name: "Dark Chocolate Olive Oil Cake",
    description: "Sea salt, crème fraîche and espresso-soaked cherries.",
    price: 12,
    category: "desserts",
    tags: ["V"],
  },
  {
    id: "honey-cheesecake",
    name: "Honey and Thyme Cheesecake",
    description: "Burnt on top, creamy within, served with roasted plums.",
    price: 12,
    category: "desserts",
    tags: ["V"],
  },

  // Drinks
  {
    id: "sage-spritz",
    name: "Sage and Elderflower Spritz",
    description: "Dry sparkling wine, elderflower, soda and a fresh sage leaf.",
    price: 13,
    category: "drinks",
  },
  {
    id: "saffron-old-fashioned",
    name: "Saffron Old Fashioned",
    description: "Bourbon, saffron-infused syrup, orange bitters and a twist.",
    price: 15,
    category: "drinks",
  },
  {
    id: "basil-lemonade",
    name: "House Basil Lemonade",
    description: "Pressed lemon, basil and a little honey over crushed ice.",
    price: 7,
    category: "drinks",
    tags: ["VG"],
  },
  {
    id: "cardamom-chai",
    name: "Cardamom Chai",
    description: "Slow-simmered black tea with cardamom, ginger and milk.",
    price: 6,
    category: "drinks",
    tags: ["V"],
  },
];

export const signatureDishes = menuItems.filter((item) => item.signature);

export function itemsByCategory(category: MenuCategoryId): MenuItem[] {
  return menuItems.filter((item) => item.category === category);
}
