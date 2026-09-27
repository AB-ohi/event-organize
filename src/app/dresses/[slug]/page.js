"use client";

import { use, useEffect, useState } from "react";
import { dresses } from "@/data/dresses";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Palette, Shirt } from "lucide-react";
import { motion } from "framer-motion";
import { IoMdArrowRoundBack } from "react-icons/io";

const Page = ({ params }) => {
  const { slug } = use(params);
  const [dress, setDress] = useState(null);

  useEffect(() => {
    const filterDress = dresses.find((d) => d.slug === slug);
    setDress(filterDress);
  }, [slug]);

  if (!dress) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 mt-12 text-center text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Back link */}
      <Link href="/#dresses">
        <motion.div
          key="select-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="group py-2 px-2 mb-10 rounded text-[90%] flex items-center md:w-[35%] justify-center text-white hover:text-[#FF477E]  hover:bg-pink-100 duration-300 bg-[#FF477E] "
        >
          <IoMdArrowRoundBack className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Collection
        </motion.div>
      </Link>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-3/4 w-full overflow-hidden rounded-2xl"
        >
          <Image
            src={dress.img}
            alt={dress.name}
            fill
            className="object-cover"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-[#FF477E] backdrop-blur">
            {dress.category === "female" ? "Bride" : "Groom"}
          </span>
        </motion.div>

        {/* Right: Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col"
        >
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {dress.name}
          </h1>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {dress.desc}
          </p>

          {/* Fabric */}
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-[#fde2ea] p-4">
            <Shirt size={20} className="text-[#FF477E]" />
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Fabric
              </p>
              <p className="text-sm font-medium text-gray-800">
                {dress.fabric}
              </p>
            </div>
          </div>

          {/* Colors */}
          <div className="mt-4 rounded-xl border border-[#fde2ea] p-4">
            <div className="flex items-center gap-3">
              <Palette size={20} className="text-[#FF477E]" />
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Available Colors
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {dress.colors.map((color) => (
                <span
                  key={color}
                  className="rounded-full border border-[#fde2ea] bg-[#fff5f8] px-4 py-1.5 text-sm text-gray-700"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* Price + CTA */}
          <div className="mt-8 flex items-center gap-2.5 justify-between rounded-2xl bg-[#fff5f8] p-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Rental Price
              </p>
              <p className="text-xl font-bold text-[#FF477E]">
                {dress.price}
              </p>
            </div>
            <button className="rounded-full bg-[#FF477E] px-8 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#e63a6d]">
              Rent Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;