import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

type ShoeProduct = {
  id: number;
  brand: string;
  description: string;
  discount: number;
  price: number;
  name: string;
  image: string; // Image links to actual images online
  gender: "male" | "female" | "unisex";
};

// Create an array of shoe products
const shoeProducts: ShoeProduct[] = [
  {
    id: 1,
    brand: "Nike",
    description: "Comfortable running shoes with breathable mesh.",
    discount: 0.2, // 20% discount
    price: 100,
    name: "Air Zoom Pegasus",
    image:
      "https://www.ekinsport.com/media/opti_image/webp/catalog/product/cache/173ef9ab000c6667578594f63bf9da15/c/w/cw7358-002_chaussures-running-nike-air-zoom-pegasus-38-femme-cw7358-002_01.webp",
    gender: "male",
  },
  {
    id: 2,
    brand: "Adidas",
    description: "Stylish sneakers with a cushioned sole.",
    discount: 0.1, // 10% discount
    price: 80,
    name: "Superstar",
    image:
      "https://www.footish.se/pub_images/large/adidas-originals-superstar-c77124-p50656.jpg",
    gender: "female",
  },
  {
    id: 3,
    brand: "Reebok",
    description: "Versatile shoes suitable for all activities.",
    discount: 0.15, // 15% discount
    price: 90,
    name: "Classic Leather",
    image:
      "https://nigramercato.com/44269-home_default/rebook-classic-leather-GY4116.webp",
    gender: "unisex",
  },
  {
    id: 4,
    brand: "Puma",
    description: "Sleek design with a lightweight feel.",
    discount: 0.25, // 25% discount
    price: 70,
    name: "Speedcat",
    image:
      "https://www.grandprixracewear.fr/6794-large_default/sparco-puma-speedcat-shoe.jpg",
    gender: "male",
  },
  {
    id: 5,
    brand: "New Balance",
    description: "Supportive shoes for long walks and hikes.",
    discount: 0.12, // 12% discount
    price: 85,
    name: "Fresh Foam",
    image:
      "https://slamjam.com/cdn/shop/products/NewBalance-Footwear-Low-Mthigq7TrailFreshFoamXHierroV7GtxBlue-MTHIGQ7-20230711111648_01_800x.jpg?v=1689085889",
    gender: "female",
  },
  {
    id: 6,
    brand: "Under Armour",
    description: "Durable and flexible shoes for training.",
    discount: 0.18, // 18% discount
    price: 95,
    name: "Charged Assert",
    image:
      "https://www.footkorner.com/cdn/shop/products/footkorner-basket-under-armour-charged-bandit-trail-2-noir-vert-3024186-102_0d38cac9-135b-4e58-a67a-cd2d4f199143_1152x1440_crop_center.jpg?v=1678178813",
    gender: "male",
  },
  {
    id: 7,
    brand: "Skechers",
    description: "Casual slip-on shoes for everyday wear.",
    discount: 0.2, // 20% discount
    price: 60,
    name: "Go Walk",
    image:
      "https://media.hipercalzado.com/img/p/9/1/7/0/8/4/917084-large_default.jpg",
    gender: "unisex",
  },
  {
    id: 8,
    brand: "ASICS",
    description: "High-performance shoes with gel cushioning.",
    discount: 0.1, // 10% discount
    price: 110,
    name: "Gel-Kayano",
    image:
      "https://slamjam.com/cdn/shop/products/Asics-Footwear-Low-Gel-kayano14White-1201A019-102-20230706093257_01_800x.jpg?v=1688639778",
    gender: "female",
  },
  {
    id: 9,
    brand: "Vans",
    description: "Classic skate shoes with a timeless design.",
    discount: 0.05, // 5% discount
    price: 75,
    name: "Old Skool",
    image:
      "https://cdn.shopify.com/s/files/1/1023/3455/products/196570617042_default_0010_800x.jpg?v=1673311607",
    gender: "unisex",
  },
  {
    id: 10,
    brand: "Converse",
    description: "Iconic high-top sneakers for a retro look.",
    discount: 0.15, // 15% discount
    price: 65,
    name: "Chuck Taylor All Star",
    image: "https://www.sequence.co.nz/user/images/30355.jpg?t=2305081235",
    gender: "unisex",
  },
  {
    id: 11,
    brand: "Brooks",
    description: "Premium running shoes with excellent support.",
    discount: 0.3, // 30% discount
    price: 120,
    name: "Adrenaline GTS",
    image: "https://img.therunningcollective.fr/adrenaliengtsh5.jpg",
    gender: "female",
  },
  {
    id: 12,
    brand: "Mizuno",
    description: "Wave technology for smooth running experience.",
    discount: 0.1, // 10% discount
    price: 100,
    name: "Wave Rider",
    image:
      "https://nigramercato.com/45869-large_default/mizuno-wave-rider-10-D1GA227703.jpg",
    gender: "male",
  },
  {
    id: 13,
    brand: "Salomon",
    description: "Trail running shoes for outdoor adventures.",
    discount: 0.2, // 20% discount
    price: 110,
    name: "Speedcross",
    image:
      "https://www.bikesportadventure.com/79005-large_default/salomon-speedcross-6-men-s-trail-running-shoes-lapis-blue-black-scarlet-ibis.jpg",
    gender: "unisex",
  },
  {
    id: 14,
    brand: "Fila",
    description: "Classic and stylish low-top sneakers.",
    discount: 0.1, // 10% discount
    price: 70,
    name: "Original Fitness",
    image:
      "https://cdna.lystit.com/400/500/tr/photos/fila/309b4d8b/fila-275-CREAM-PEACOAT-RED-Original-Fitness.jpeg",
    gender: "male",
  },
  {
    id: 15,
    brand: "Hoka One One",
    description: "Maximum cushioning for long-distance running.",
    discount: 0.25, // 25% discount
    price: 130,
    name: "Clifton",
    image:
      "https://slamjam.com/cdn/shop/products/HokaOneOne-Footwear-Low-Clifton8White-HK.1119393-NCBDB-20221026141401_01_800x.jpg?v=1679353717",
    gender: "female",
  },
  {
    id: 16,
    brand: "Timberland",
    description: "Sturdy and waterproof boots for outdoor use.",
    discount: 0.15, // 15% discount
    price: 150,
    name: "Yellow Boot",
    image:
      "https://slamjam.com/cdn/shop/products/Timberland-Footwear-MidBoot-6InchLaceUpWaterproofBootTimberlandPremiumBeige-TB0100617131WHEAT-20230607100356_01_800x.jpg?v=1686319503",
    gender: "male",
  },
  {
    id: 17,
    brand: "Dr. Martens",
    description: "Classic and durable boots with a rebellious touch.",
    discount: 0.1, // 10% discount
    price: 160,
    name: "1460",
    image:
      "https://posersonline.com/cdn/shop/products/26262001.01.jpg?v=1682473979",
    gender: "unisex",
  },
];

const store = new Vuex.Store({
  state: {
    allProducts: shoeProducts,
  },

  getters: {
    maleShoes: (state) => {
      return state.allProducts.filter((p) => p.gender == "male");
    },
    femaleShoes: (state) => {
      return state.allProducts.filter((p) => p.gender === "female");
    },
  },
});
// store.commit("increment");
export default store;
