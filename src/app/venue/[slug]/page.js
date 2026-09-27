"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Users, ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";
import { venues } from "@/data/Venues";
import { IoMdArrowRoundBack } from "react-icons/io";

const Page = ({ params }) => {
  const { slug } = use(params);
  const [venue, setVenue] = useState(null);

  useEffect(() => {
    const filterVenue = venues.find((v) => v.slug === slug);
    setVenue(filterVenue);
  }, [slug]);

  if (!venue) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 mt-12 text-center text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Back link */}
     <Link href="/#venue">
        <motion.div
          key="select-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="group py-2 px-2 mb-10 rounded text-[90%] flex items-center md:w-[35%] justify-center text-white hover:text-[#FF477E]  hover:bg-pink-100 duration-300 bg-[#FF477E] "
        >
          <IoMdArrowRoundBack className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Venue
        </motion.div>
      </Link>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96"
      >
        <Image
          src={venue.img}
          alt={venue.name}
          fill
          className="object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-[#FF477E] backdrop-blur">
          {venue.type}
        </span>
      </motion.div>

      {/* Title + Quick Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          {venue.name}
        </h1>

        <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#FF477E]" />
            {venue.location}
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} className="text-[#FF477E]" />
            {venue.capacity}
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-gray-600 leading-relaxed">
          {venue.desc}
        </p>
      </motion.div>

      {/* Price + Amenities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3"
      >
        {/* Amenities */}
        <div className="rounded-2xl border border-[#fde2ea] p-6 sm:col-span-2">
          <h3 className="text-base font-semibold text-gray-900">
            Amenities
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {venue.amenities.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-[#FF477E]" />
                {item}
              </div>
            ))}
          </div>
        </div>
        
        {/* Price Card */}
        <div className="rounded-2xl border border-[#fde2ea] bg-[#fff5f8] p-6 sm:col-span-1">
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Starting from
          </p>
          <p className="mt-1 text-2xl font-bold text-[#FF477E]">
            {venue.price}
          </p>
          <button className="mt-5 w-full rounded-full bg-[#FF477E] py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#e63a6d]">
            Book This Venue
          </button>
        </div>

        
      </motion.div>
    </div>
  );
};

export default Page;