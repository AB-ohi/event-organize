import {
  Calendar,
  MapPin,
  Sparkles,
  Camera,
  Utensils,
  Palette,
  Music,
} from "lucide-react";

import WeddingPlanning from "../../public/home/services/WeddingPlanning.png";
import VenueBooking from "../../public/home/services/VenueBooking.png";
import BridalMakeup from "../../public/home/services/BridalMakeup.png";
import PhotographyAndVideo from "../../public/home/services/PhotographyAndVideo.png";
import Catering from "../../public/home/services/Catering.png";
import DecorationAndDesign from "../../public/home/services/DecorationAndDesign.png";
import Entertainment from "../../public/home/services/Entertainment.png";

export const services = [
  {
    id: 1,
    name: "Wedding Planning",
    slug: "wedding-planning",
    desc: "Full planning from start to the big day, stress-free.",
    longDesc:
      "From the first meeting to the final send-off, we handle every detail of your wedding day — timeline, vendors, budget, and on-site coordination — so you can actually enjoy your own wedding.",
    icon: Calendar,
    img: WeddingPlanning,
    packages: [
      {
        id: "basic",
        name: "Basic",
        price: "৳15,000",
        features: [
          "Day-of coordination",
          "Vendor contact list",
          "Basic timeline planning",
        ],
      },
      {
        id: "standard",
        name: "Standard",
        price: "৳35,000",
        features: [
          "Everything in Basic",
          "Full vendor management",
          "2 planning meetings",
          "Budget tracking",
        ],
      },
      {
        id: "premium",
        name: "Premium",
        price: "৳75,000",
        features: [
          "Everything in Standard",
          "Unlimited planning meetings",
          "Full event design",
          "On-site team (3 members)",
        ],
      },
    ],
  },

  {
    id: 2,
    name: "Venue Booking",
    slug: "venue-booking",
    desc: "Best venue options that fit your budget and concept.",
    longDesc:
      "We help you find and book the perfect venue based on your guest count, budget, and theme — from intimate garden setups to grand banquet halls.",
    icon: MapPin,
    img: VenueBooking,
    packages: [
      {
        id: "basic",
        name: "Small Venue",
        price: "৳50,000",
        features: ["Up to 100 guests", "Half-day booking"],
      },
      {
        id: "standard",
        name: "Medium Venue",
        price: "৳120,000",
        features: [
          "Up to 300 guests",
          "Full-day booking",
          "Parking included",
        ],
      },
      {
        id: "premium",
        name: "Grand Venue",
        price: "৳250,000",
        features: [
          "500+ guests",
          "Full-day booking",
          "Parking + generator backup",
          "AC hall",
        ],
      },
    ],
  },

  {
    id: 3,
    name: "Bridal Makeup",
    slug: "bridal-makeup",
    desc: "Professional makeup artists for the bride and family.",
    longDesc:
      "Our certified makeup artists bring years of bridal experience, using long-lasting, camera-ready products so you look flawless from ceremony to reception.",
    icon: Sparkles,
    img: BridalMakeup,
    packages: [
      {
        id: "basic",
        name: "Bride Only",
        price: "৳8,000",
        features: ["Bridal makeup", "Hairstyling", "Basic trial session"],
      },
      {
        id: "standard",
        name: "Bride + Family",
        price: "৳20,000",
        features: [
          "Bridal makeup",
          "Hairstyling",
          "Makeup for 3 family members",
          "1 trial session",
        ],
      },
      {
        id: "premium",
        name: "Full Bridal Party",
        price: "৳40,000",
        features: [
          "Bridal makeup (2 looks)",
          "Hairstyling",
          "Makeup for up to 8 people",
          "2 trial sessions",
          "On-site touch-up service",
        ],
      },
    ],
  },

  {
    id: 4,
    name: "Photography & Video",
    slug: "photography-video",
    desc: "Capture every precious moment with cinematic quality.",
    longDesc:
      "From candid shots to cinematic highlight reels, our photography and videography team makes sure every moment of your big day is preserved beautifully.",
    icon: Camera,
    img: PhotographyAndVideo,
    packages: [
      {
        id: "basic",
        name: "Photo Only",
        price: "৳25,000",
        features: ["1 photographer", "6 hours coverage", "200+ edited photos"],
      },
      {
        id: "standard",
        name: "Photo + Video",
        price: "৳55,000",
        features: [
          "1 photographer + 1 videographer",
          "Full-day coverage",
          "300+ edited photos",
          "3-minute highlight video",
        ],
      },
      {
        id: "premium",
        name: "Cinematic Package",
        price: "৳110,000",
        features: [
          "2 photographers + 2 videographers",
          "Full-day coverage",
          "500+ edited photos",
          "Drone shots",
          "10-minute cinematic film",
        ],
      },
    ],
  },

  {
    id: 5,
    name: "Catering",
    slug: "catering",
    desc: "Delicious menus with a variety of buffet packages.",
    longDesc:
      "Delight your guests with carefully curated menus, from traditional favorites to modern fusion dishes, served fresh and beautifully presented.",
    icon: Utensils,
    img: Catering,
    packages: [
      {
        id: "basic",
        name: "Standard Buffet",
        price: "৳400/head",
        features: ["4 main dishes", "2 dessert options", "Soft drinks"],
      },
      {
        id: "standard",
        name: "Deluxe Buffet",
        price: "৳650/head",
        features: [
          "6 main dishes",
          "3 dessert options",
          "Soft drinks + juice",
          "Live cooking station",
        ],
      },
      {
        id: "premium",
        name: "Royal Feast",
        price: "৳950/head",
        features: [
          "8+ main dishes",
          "5 dessert options",
          "Premium beverages",
          "2 live cooking stations",
          "Dedicated waitstaff",
        ],
      },
    ],
  },

  {
    id: 6,
    name: "Decoration & Design",
    slug: "decoration-design",
    desc: "Stage and venue decoration tailored to your dream theme.",
    longDesc:
      "We turn your vision into reality with custom stage design, floral arrangements, and lighting that matches your theme, color palette, and personality.",
    icon: Palette,
    img: DecorationAndDesign,
    packages: [
      {
        id: "basic",
        name: "Simple Elegance",
        price: "৳30,000",
        features: ["Basic stage backdrop", "Table centerpieces", "Fairy lights"],
      },
      {
        id: "standard",
        name: "Themed Decor",
        price: "৳70,000",
        features: [
          "Custom themed stage",
          "Floral arch",
          "Table & aisle decoration",
          "Ambient lighting",
        ],
      },
      {
        id: "premium",
        name: "Luxury Design",
        price: "৳150,000",
        features: [
          "Fully custom stage design",
          "Premium floral installations",
          "Full venue transformation",
          "Advanced lighting & effects",
        ],
      },
    ],
  },

  {
    id: 7,
    name: "Entertainment",
    slug: "entertainment",
    desc: "Live music, DJ, and experienced MCs for your event.",
    longDesc:
      "Keep your guests entertained all night with our curated selection of live bands, professional DJs, and experienced event hosts.",
    icon: Music,
    img: Entertainment,
    packages: [
      {
        id: "basic",
        name: "DJ Only",
        price: "৳15,000",
        features: ["4 hours DJ set", "Sound system", "Basic lighting"],
      },
      {
        id: "standard",
        name: "DJ + MC",
        price: "৳30,000",
        features: [
          "6 hours DJ set",
          "Professional MC/host",
          "Sound system",
          "Dance floor lighting",
        ],
      },
      {
        id: "premium",
        name: "Full Entertainment",
        price: "৳65,000",
        features: [
          "Live band + DJ",
          "Professional MC/host",
          "Full sound & lighting setup",
          "Special effects (fog, sparklers)",
        ],
      },
    ],
  },
];