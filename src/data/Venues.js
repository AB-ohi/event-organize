import GrandBallroom from "../../public/home/venue/GrandBallroom.png";
import GardenParadise from "../../public/home/venue/GardenParadise.png";
import RooftopTerrace from "../../public/home/venue/RooftopTerrace.png";

export const venues = [
  {
    id: 1,
    name: "Grand Ballroom",
    slug: "grand-ballroom",
    location: "Gulshan, Dhaka",
    capacity: "300–500 guests",
    price: "৳150,000 / event",
    type: "Indoor",
    img: GrandBallroom,
    desc: "A luxurious indoor hall with crystal chandeliers, perfect for grand receptions.",
    amenities: ["AC", "Parking", "Stage", "Sound System", "Catering Kitchen"],
  },
  {
    id: 2,
    name: "Garden Paradise",
    slug: "garden-paradise",
    location: "Uttara, Dhaka",
    capacity: "150–300 guests",
    price: "৳90,000 / event",
    type: "Outdoor",
    img: GardenParadise,
    desc: "An open-air garden venue surrounded by greenery, ideal for a romantic outdoor wedding.",
    amenities: ["Open Lawn", "Parking", "Generator Backup"],
  },
  {
    id: 3,
    name: "Rooftop Terrace",
    slug: "rooftop-terrace",
    location: "Banani, Dhaka",
    capacity: "80–150 guests",
    price: "৳60,000 / event",
    type: "Outdoor",
    img: RooftopTerrace,
    desc: "A cozy rooftop space with a city skyline view, great for intimate evening events.",
    amenities: ["City View", "Lighting Setup", "Limited Parking"],
  },
];