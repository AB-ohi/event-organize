// import RoyalLehenga from "../../public/home/dresses/royal-lehenga.jpg";
// import ModernGown from "../../public/home/dresses/modern-gown.jpg";
// import ClassicSherwani from "../../public/home/dresses/classic-sherwani.jpg";
import bride1 from "../../public/home/dresses/bride_img_1.png";
import bride2 from "../../public/home/dresses/bride_img_2.png";

import groom1 from "../../public/home/dresses/groom_img_1.png";
import groom2 from "../../public/home/dresses/groom_img_2.png";

import BrideCover from "../../public/home/dresses/bride-cover.png";
import GroomCover from "../../public/home/dresses/groom-cover.png";

export const dressCategories = [
  {
    id: "female",
    title: "Bride Collection",
    subtitle: "For Her",
    img: BrideCover,
  },
  {
    id: "male",
    title: "Groom Collection",
    subtitle: "For Him",
    img: GroomCover,
  },
];

export const dresses = [
  {
    id: 1,
    name: "Royal Lehenga",
    slug: "royal-lehenga",
    category: "female",
    colors: ["Red", "Maroon", "Gold"],
    price: "৳12,000 / day",
    fabric: "Silk with Zari work",
    img: bride1,
  },
  {
    id: 2,
    name: "Modern Reception Gown",
    slug: "modern-gown",
    category: "female",
    colors: ["White", "Blush Pink"],
    price: "৳15,000 / day",
    fabric: "Satin with lace detailing",
    img: bride2,
  },
  {
    id: 3,
    name: "Classic Sherwani",
    slug: "classic-sherwani",
    category: "male",
    colors: ["Cream", "Black", "Maroon"],
    price: "৳8,000 / day",
    fabric: "Velvet with hand embroidery",
    img: groom1,
  },
  {
    id: 4,
    name: "Black Suit",
    slug: "black-suit",
    category: "male",
    colors: ["Black", "Navy"],
    price: "৳7,000 / day",
    fabric: "Wool blend",
    img: groom2,
  },
];