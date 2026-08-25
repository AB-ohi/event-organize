"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Calendar,
  MapPin,
  Sparkles,
  Camera,
  Utensils,
  Palette,
  Music,
  ArrowUpRight,
} from "lucide-react";
import WeddingPlanning from "../../../../public/home/services/WeddingPlanning.png"
import VenueBooking from "../../../../public/home/services/VenueBooking.png"
import BridalMakeup from "../../../../public/home/services/BridalMakeup.png"
import PhotographyAndVideo from "../../../../public/home/services/PhotographyAndVideo.png"
import Catering from "../../../../public/home/services/Catering.png"
import DecorationAndDesign from "../../../../public/home/services/DecorationAndDesign.png"
import Entertainment from "../../../../public/home/services/Entertainment.png"

const services = [
  {
    id: 1,
    name: "Wedding Planning",
    slug: "wedding-planning",
    desc: "Full planning from start to the big day, stress-free.",
    icon: Calendar,
    img: WeddingPlanning,
  },
  {
    id: 2,
    name: "Venue Booking",
    slug: "venue-booking",
    desc: "Best venue options that fit your budget and concept.",
    icon: MapPin,
    img: VenueBooking,
  },
  {
    id: 3,
    name: "Bridal Makeup",
    slug: "bridal-makeup",
    desc: "Professional makeup artists for the bride and family.",
    icon: Sparkles,
    img: BridalMakeup,
  },
  {
    id: 4,
    name: "Photography & Video",
    slug: "photography-video",
    desc: "Capture every precious moment with cinematic quality.",
    icon: Camera,
    img: PhotographyAndVideo
  },
  {
    id: 5,
    name: "Catering",
    slug: "catering",
    desc: "Delicious menus with a variety of buffet packages.",
    icon: Utensils,
    img: Catering,
  },
  {
    id: 6,
    name: "Decoration & Design",
    slug: "decoration-design",
    desc: "Stage and venue decoration tailored to your dream theme.",
    icon: Palette,
    img: DecorationAndDesign,
  },
  {
    id: 7,
    name: "Entertainment",
    slug: "entertainment",
    desc: "Live music, DJ, and experienced MCs for your event.",
    icon: Music,
    img: Entertainment,
  },
];
const Services = () => {
  const router = useRouter();

  const handleSelect = (slug) => {
    router.push(`/services/${slug}`);
  };

  return (
    <section className="bg-[#fff5f8] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#FF477E]">
            Our Services
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything You Need, All in One Place
          </h2>
          <p className="mt-3 text-gray-500">
            Choose a service below to see details and available packages.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => handleSelect(service.slug)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#fde2ea] bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF477E] hover:shadow-lg hover:shadow-pink-100"
              >
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-[#ffe4ec] to-[#fff5f8]">
                  {service.img ? (
                    <Image
                      src={service.img}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Icon
                        size={40}
                        className="text-[#FF477E] opacity-40 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-60"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#FF477E]">
                      {service.name}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#FF477E]"
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {service.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
