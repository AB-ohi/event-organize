"use client";

import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const scatterDirections = [
  { x: -200, y: -150, rotate: -25 },
  { x: 220, y: -120, rotate: 20 },
  { x: -180, y: 180, rotate: 15 },
  { x: 200, y: 160, rotate: -18 },
  { x: -260, y: 20, rotate: 30 },
  { x: 260, y: -40, rotate: -30 },
  { x: 0, y: -220, rotate: 22 },
  { x: -60, y: 220, rotate: -20 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const Services = () => {
  const router = useRouter();

  const handleSelect = (slug) => {
    router.push(`/services/${slug}`);
  };

  return (
    <section className="overflow-hidden bg-[#fff5f8] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-[#FF477E]">
            Our Services
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything You Need, All in One Place
          </h2>
          <p className="mt-3 text-gray-500">
            Choose a service below to see details and available packages.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const dir = scatterDirections[index % scatterDirections.length];

            return (
              <motion.button
                key={service.id}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: dir.x,
                    y: dir.y,
                    rotate: dir.rotate,
                    scale: 0.6,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 90,
                      damping: 14,
                    },
                  },
                }}
                onClick={() => handleSelect(service.slug)}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#fde2ea] bg-white text-left shadow-sm transition-colors duration-300 hover:border-[#FF477E] hover:shadow-lg hover:shadow-pink-100"
              >
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden bg-linear-to-br from-[#ffe4ec] to-[#fff5f8]">
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
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;