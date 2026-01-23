
export interface MenuPrice {
  label?: string;
  value: string;
  priceNumeric: number;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  category: string;
  prices: MenuPrice[];
  isVegetarian?: boolean;
  image: string;
}

// Image par défaut si jamais une image spécifique manque
const NO_IMAGE = "/assets/images/no-image-available.png";

export const menuItems: MenuItem[] = [
  // --- PIZZAS SAUCE TOMATE ---
  {
    id: 1,
    name: "Primavera",
    description: "Poivrons grillés, tomates cerises, artichauts, Mozza fraîche, pesto basilic, après cuisson roquette et copeaux du Parmesan.",
    category: "Pizzas Rouges",
    prices: [{ label: "29 CM", value: "11€", priceNumeric: 11 }, { label: "33 CM", value: "14€", priceNumeric: 14 }],
    isVegetarian: true,
    image: "/assets/images/Primavera.png"
  },
  {
    id: 2,
    name: "Bresaola",
    description: "Mozza fior di latte, après cuisson roquette, boeuf séché, tomates cerises, copeaux de Parmesan, filet huile d'olive DOP.",
    category: "Pizzas Rouges",
    prices: [{ label: "29 CM", value: "12€", priceNumeric: 12 }, { label: "33 CM", value: "15€", priceNumeric: 15 }],
    image: "/assets/images/Bresaola.png"
  },
  {
    id: 3,
    name: "Parmigiana",
    description: "Mozza fior di latte, aubergines, tomates cerises, Scamorza fumée, Parmesan, pesto basilic, huile d'olive DOP.",
    category: "Pizzas Rouges",
    prices: [{ label: "29 CM", value: "12€", priceNumeric: 12 }, { label: "33 CM", value: "15€", priceNumeric: 15 }],
    isVegetarian: true,
    image: "/assets/images/Parmigiana.png"
  },
  {
    id: 4,
    name: "Margherita",
    description: "Mozza fior di latte, basilic frais, filet d'huile d'olive.",
    category: "Pizzas Rouges",
    prices: [{ label: "29 CM", value: "9,50€", priceNumeric: 9.50 }, { label: "33 CM", value: "11,50€", priceNumeric: 11.50 }],
    isVegetarian: true,
    image: "/assets/images/Margherita.png"
  },
  {
    id: 5,
    name: "Tonno",
    description: "Mozza fdl, thon à l'huile d'olive, câpres, oignons, olives, origan.",
    category: "Pizzas Rouges",
    prices: [{ label: "29 CM", value: "11€", priceNumeric: 11 }, { label: "33 CM", value: "14€", priceNumeric: 14 }],
    image: "/assets/images/Tonno.png"
  },
  {
    id: 6,
    name: "4 formaggi",
    description: "Mozza fdl, Gorgonzola DOP, Parmesan, Scamorza fumée.",
    category: "Pizzas Rouges",
    prices: [{ label: "29 CM", value: "11€", priceNumeric: 11 }, { label: "33 CM", value: "14€", priceNumeric: 14 }],
    isVegetarian: true,
    image: "/assets/images/4formaggi.png"
  },
  {
    id: 7,
    name: "Diavolo",
    description: "Mozza fior di latte, steak haché, merguez, chorizo.",
    category: "Pizzas Rouges",
    prices: [{ label: "29 CM", value: "12€", priceNumeric: 12 }, { label: "33 CM", value: "15€", priceNumeric: 15 }],
    image: "/assets/images/Diavolo.png"
  },
  {
    id: 8,
    name: "Napolitana",
    description: "Mozza dsl, tomates fraîches, câpres, anchois, origan, olives.",
    category: "Pizzas Rouges",
    prices: [{ label: "29 CM", value: "11€", priceNumeric: 11 }, { label: "33 CM", value: "14€", priceNumeric: 14 }],
    image: "/assets/images/Napolitana.png"
  },
  {
    id: 9,
    name: "Frutti di mare",
    description: "Mozza fior di latte, cocktail de fruits de mer, persillade.",
    category: "Pizzas Rouges",
    prices: [{ label: "29 CM", value: "11€", priceNumeric: 11 }, { label: "33 CM", value: "14€", priceNumeric: 14 }],
    image: "/assets/images/Fruttidimare.png"
  },
  {
    id: 10,
    name: "Spianta",
    description: "Spianata piccante, poivrons grillés, scamorza, mozza fior di latte.",
    category: "Pizzas Rouges",
    prices: [{ label: "29 CM", value: "13€", priceNumeric: 13 }, { label: "33 CM", value: "15€", priceNumeric: 15 }],
    image: "/assets/images/Spianta.png"
  },
  {
    id: 11,
    name: "Capri",
    description: "Mozza fior di latte, chèvre, miel.",
    category: "Pizzas Rouges",
    prices: [{ label: "29 CM", value: "11€", priceNumeric: 11 }, { label: "33 CM", value: "14€", priceNumeric: 14 }],
    isVegetarian: true,
    image: "/assets/images/Capri.png"
  },
  {
    id: 12,
    name: "Bufalina",
    description: "Mozza di Bufala DOP, tomates cerises, basilic frais, pesto basilic.",
    category: "Pizzas Rouges",
    prices: [{ label: "29 CM", value: "12€", priceNumeric: 12 }, { label: "33 CM", value: "15€", priceNumeric: 15 }],
    isVegetarian: true,
    image: "/assets/images/Bufalina.png"
  },
  {
    id: 13,
    name: "Regina",
    description: "Mozza fdl, champignons, jambon, filet d'huile d'olive DOP, olives.",
    category: "Pizzas Rouges",
    prices: [{ label: "29 CM", value: "11€", priceNumeric: 11 }, { label: "33 CM", value: "14€", priceNumeric: 14 }],
    image: "/assets/images/Regina.png"
  },
  {
    id: 14,
    name: "Quattro stagioni",
    description: "Mozza fdl, jambon, champignons, poivrons, olives, oeuf.",
    category: "Pizzas Rouges",
    prices: [{ label: "29 CM", value: "11€", priceNumeric: 11 }, { label: "33 CM", value: "14€", priceNumeric: 14 }],
    image: "/assets/images/Quattrostagioni.png"
  },
  {
    id: 15,
    name: "Vegana",
    description: "Champignons, tomates fraiche, poivrons, courgettes, persillade.",
    category: "Pizzas Rouges",
    prices: [{ label: "29 CM", value: "11€", priceNumeric: 11 }, { label: "33 CM", value: "14€", priceNumeric: 14 }],
    isVegetarian: true,
    image: "/assets/images/Vegana.png"
  },
  {
    id: 16,
    name: "Orientale",
    description: "Mozza fdl, merguez, chorizo, oignons, poivrons, olives, oeuf.",
    category: "Pizzas Rouges",
    prices: [{ label: "29 CM", value: "11€", priceNumeric: 11 }, { label: "33 CM", value: "14€", priceNumeric: 14 }],
    image: "/assets/images/Orientale.png"
  },

  // --- PIZZAS ALLA CREMA (Blanches) ---
  {
    id: 17,
    name: "Norda",
    description: "Mozza fior di latte, champignons, après cuisson roquette, saumon fumé, persillade.",
    category: "Pizzas Blanches",
    prices: [{ label: "29 CM", value: "12€", priceNumeric: 12 }, { label: "33 CM", value: "15€", priceNumeric: 15 }],
    image: "/assets/images/Norda.png"
  },
  {
    id: 18,
    name: "Dolce",
    description: "Mozza fior di latte, après cuisson roquette, chèvre, noix, miel.",
    category: "Pizzas Blanches",
    prices: [{ label: "29 CM", value: "11€", priceNumeric: 11 }, { label: "33 CM", value: "14€", priceNumeric: 14 }],
    isVegetarian: true,
    image: "/assets/images/Dolce.png"
  },
  {
    id: 19,
    name: "Ricotta",
    description: "Mozza fior di latte, pesto au basilic, après cuisson roquette, tomates cerises, Ricotta, Parmesan.",
    category: "Pizzas Blanches",
    prices: [{ label: "29 CM", value: "11€", priceNumeric: 11 }, { label: "33 CM", value: "14€", priceNumeric: 14 }],
    isVegetarian: true,
    image: "/assets/images/Ricotta.png"
  },
  {
    id: 20,
    name: "Saporita",
    description: "Base crème, champignons, poulet, oignons, gorgonzola, mozza FDL.",
    category: "Pizzas Blanches",
    prices: [{ label: "29 CM", value: "12,50€", priceNumeric: 12.50 }, { label: "33 CM", value: "15,50€", priceNumeric: 15.50 }],
    image: "/assets/images/Saporita.png"
  },
  {
    id: 21,
    name: "Salmone",
    description: "Mozza fior di latte, saumon fumé, pesto au basilic.",
    category: "Pizzas Blanches",
    prices: [{ label: "29 CM", value: "12€", priceNumeric: 12 }, { label: "33 CM", value: "15€", priceNumeric: 15 }],
    image: "/assets/images/Salmone.png"
  },
  {
    id: 22,
    name: "Mortadella",
    description: "Base crème, mortadella, mozza FDL, graine de pistache.",
    category: "Pizzas Blanches",
    prices: [{ label: "29 CM", value: "13€", priceNumeric: 13 }, { label: "33 CM", value: "16€", priceNumeric: 16 }],
    image: "/assets/images/Mortadella.png"
  },
  {
    id: 23,
    name: "Melanzana",
    description: "Aubergines, Mozza di Bufala DOP, après cuisson tomates cerises, amandes effilées, pesto basilic.",
    category: "Pizzas Blanches",
    prices: [{ label: "29 CM", value: "11€", priceNumeric: 11 }, { label: "33 CM", value: "14€", priceNumeric: 14 }],
    isVegetarian: true,
    image: "/assets/images/Melanzana.png"
  },
  {
    id: 24,
    name: "Al Pollo",
    description: "Mozza fior di latte, curry, poulet, poivrons, pomme de terre.",
    category: "Pizzas Blanches",
    prices: [{ label: "29 CM", value: "11€", priceNumeric: 11 }, { label: "33 CM", value: "14€", priceNumeric: 14 }],
    image: "/assets/images/Alpollo.png"
  },
  {
    id: 25,
    name: "Saint Jacques",
    description: "Mozza fdl, noix de saint Jacques, crevettes, persillade.",
    category: "Pizzas Blanches",
    prices: [{ label: "29 CM", value: "13€", priceNumeric: 13 }, { label: "33 CM", value: "16€", priceNumeric: 16 }],
    image: "/assets/images/Saintjacques.png"
  },
  {
    id: 26,
    name: "Magret",
    description: "Mozza fior di latte, pomme de terre, tranche de magret frais, Roquefort AOP.",
    category: "Pizzas Blanches",
    prices: [{ label: "29 CM", value: "12,50€", priceNumeric: 12.50 }, { label: "33 CM", value: "15,50€", priceNumeric: 15.50 }],
    image: "/assets/images/Magret.png"
  },
  {
    id: 27,
    name: "Foie gras",
    description: "Mozza fior di latte, oignons confits, après cuisson tranche de foie gras.",
    category: "Pizzas Blanches",
    prices: [{ label: "29 CM", value: "13€", priceNumeric: 13 }, { label: "33 CM", value: "16€", priceNumeric: 16 }],
    image: "/assets/images/Foiegras.png"
  },
  {
    id: 28,
    name: "Buffalo",
    description: "Mozza fior di latte, pomme de terre, oignons, steak haché.",
    category: "Pizzas Blanches",
    prices: [{ label: "29 CM", value: "11€", priceNumeric: 11 }, { label: "33 CM", value: "14€", priceNumeric: 14 }],
    image: "/assets/images/Buffalo.png"
  },
  {
    id: 29,
    name: "Piacentina",
    description: "Coppa, tomates cerises, poivrons grillés, Mozza fior di latte, après cuisson copeaux de Parmesan et pesto basilic.",
    category: "Pizzas Blanches",
    prices: [{ label: "29 CM", value: "12,50€", priceNumeric: 12.50 }, { label: "33 CM", value: "15,50€", priceNumeric: 15.50 }],
    image: "/assets/images/Piacentina.png"
  },
  {
    id: 30,
    name: "Gorgonzola",
    description: "Mozza fior di latte, Gorgonzola DOP, noix.",
    category: "Pizzas Blanches",
    prices: [{ label: "29 CM", value: "11€", priceNumeric: 11 }, { label: "33 CM", value: "14€", priceNumeric: 14 }],
    isVegetarian: true,
    image: "/assets/images/Gorgonzola.png"
  },
  {
    id: 31,
    name: "Kebab",
    description: "Mozza fior di latte, kebab, sauce oignons poivrons.",
    category: "Pizzas Blanches",
    prices: [{ label: "29 CM", value: "11€", priceNumeric: 11 }, { label: "33 CM", value: "14€", priceNumeric: 14 }],
    image: "/assets/images/Kebab.png"
  },

  // --- CHAUSSONS (Calzones) ---
  {
    id: 32,
    name: "Calzone",
    description: "Sauce tomate, Mozza fdl, champignons, touche de crème.",
    category: "Calzones",
    prices: [{ label: "29 CM", value: "11€", priceNumeric: 11 }, { label: "33 CM", value: "14€", priceNumeric: 14 }],
    isVegetarian: true,
    image: "/assets/images/Calzone.png"
  },
  {
    id: 33,
    name: "Formaggi",
    description: "Crème fraîche, Mozza fio di latte, Scamorza fumée, Gorgonzola DOP, Parmesan.",
    category: "Calzones",
    prices: [{ label: "29 CM", value: "12€", priceNumeric: 12 }, { label: "33 CM", value: "15€", priceNumeric: 15 }],
    isVegetarian: true,
    image: "/assets/images/Formaggi.png"
  },
  {
    id: 34,
    name: "Soufflé",
    description: "Sauce tomate, Mozza fdl, jambon, oeuf, touche de crème.",
    category: "Calzones",
    prices: [{ label: "29 CM", value: "12€", priceNumeric: 12 }, { label: "33 CM", value: "15€", priceNumeric: 15 }],
    image: "/assets/images/Souffle.png"
  },

  // --- SALADES ---
  {
    id: 35,
    name: "Chèvre",
    description: "Mélange de salade, tomates cerises, concombre, Mozza fraîche, rondelles de chèvre, crème balsamique, croûtons, huile d'olive.",
    category: "Salades",
    prices: [{ value: "10€", priceNumeric: 10 }],
    isVegetarian: true,
    image: "/assets/images/Chevre.png"
  },
  {
    id: 36,
    name: "Magret",
    description: "Mélange de salade, tomates cerises, concombre, Mozza fraîche, magret fumé, copeaux de Parmesan, crème balsamique.",
    category: "Salades",
    prices: [{ value: "10€", priceNumeric: 10 }],
    image: "/assets/images/SaladeMagret.png"
  },
  {
    id: 37,
    name: "Saumon fumé",
    description: "Mélange de salade, tomates cerises, concombre, Mozza fraîche, saumon fumé, crème balsamique, huile d'olive.",
    category: "Salades",
    prices: [{ value: "10€", priceNumeric: 10 }],
    image: "/assets/images/Saumon.png"
  },
  {
    id: 38,
    name: "César",
    description: "Mélange de salade, tomates cerises, concombre, Mozza fraîche, poulet, croûtons, copeaux de Parmesan, huile d'olive, sauce César.",
    category: "Salades",
    prices: [{ value: "10€", priceNumeric: 10 }],
    image: "/assets/images/Cesar.png"
  },
  {
    id: 39,
    name: "Bufala",
    description: "Mélange de salade, tomates cerises, concombre, Mozza fraîche, Mozzarella di Bufala DOP, crème balsamique, huile d'olive.",
    category: "Salades",
    prices: [{ value: "10€", priceNumeric: 10 }],
    isVegetarian: true,
    image: "/assets/images/SaladeBufala.png"
  },

  // --- DESSERTS ---
  {
    id: 40,
    name: "Tiramisu fait maison",
    description: "Classique italien.",
    category: "Desserts",
    prices: [{ value: "4€", priceNumeric: 4 }],
    image: "/assets/images/Tiramisu.png"
  },
  {
    id: 41,
    name: "Panna cotta fait maison",
    description: "Avec son coulis.",
    category: "Desserts",
    prices: [{ value: "4€", priceNumeric: 4 }],
    image: "/assets/images/Pannacotta.png"
  },
  {
    id: 42,
    name: "Dessert du moment",
    description: "Demandez au chef.",
    category: "Desserts",
    prices: [{ value: "4€", priceNumeric: 4 }],
    image: NO_IMAGE
  },
  {
    id: 43,
    name: "Glaces artisanales",
    description: "Parfums au choix.",
    category: "Desserts",
    prices: [{ value: "4,90€", priceNumeric: 4.90 }],
    image: "/assets/images/Glaces.png"
  }
];

export const categories = ["Pizzas Rouges", "Pizzas Blanches", "Calzones", "Salades", "Desserts"];
