"use client";

import { MapPin, Users, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { venues } from "@/data/Venues";

const scatterDirections = [
  { x: -200, y: -150, rotate: -25 },
  { x: 220, y: -120, rotate: 20 },
  { x: -180, y: 180, rotate: 15 },
  { x: 200, y: 160, rotate: -18 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const Venue = () => {
  const router = useRouter();

  const handleSelect = (slug) => {
    router.push(`/venue/${slug}`);
  };

  return (
    <section className="overflow-hidden bg-[#fff5f8] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-[#FF477E]">
            Our Venues
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Find the Perfect Place for Your Big Day
          </h2>
          <p className="mt-3 text-gray-500">
            Explore our handpicked venues, indoor or outdoor, for any guest size.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {venues.map((venue, index) => {
            const dir = scatterDirections[index % scatterDirections.length];

            return (
              <motion.button
                key={venue.id}
                variants={{
                  hidden: { opacity: 0, x: dir.x, y: dir.y, rotate: dir.rotate, scale: 0.6 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 90, damping: 14 },
                  },
                }}
                onClick={() => handleSelect(venue.slug)}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.97 }}
                value={venue}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#fde2ea] bg-white text-left shadow-sm transition-colors duration-300 hover:border-[#FF477E] hover:shadow-lg hover:shadow-pink-100"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-linear-to-br from-[#ffe4ec] to-[#fff5f8]">
                  <Image
                    src={venue.img}
                    alt={venue.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#FF477E] backdrop-blur">
                    {venue.type}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#FF477E]">
                      {venue.name}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#FF477E]"
                    />
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">
                    {venue.desc}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Venue;