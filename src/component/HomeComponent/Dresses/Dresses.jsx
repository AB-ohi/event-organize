"use client";

import { useState } from "react";
import { dressCategories, dresses } from "@/data/dresses";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Dresses = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [addCategory, setAddCategory] = useState(null);
  console.log(addCategory)
  const filteredDresses = dresses.filter(
    (d) => d.category === selectedCategory,
  ); 
  const handleSelectDress = (slug) => {
    router.push(`/dresses/${slug}`);
  };

  return (
    <section className="overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-[#FF477E]">
            Our Collection
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Find Your Perfect Outfit
          </h2>
          <p className="mt-3 text-gray-500">
            Choose a category to explore dresses made just for you.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* STEP 1: Category Selector */}
          {!selectedCategory ? (
            <motion.div
              key="category-select"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2"
            >
              {dressCategories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => {setSelectedCategory(cat.id);
                     setAddCategory(cat.title)}}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative h-80 overflow-hidden rounded-2xl shadow-md"
                >
                  <Image
                    src={cat.img}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                    <p className="text-xs font-medium uppercase tracking-wider text-[#ffb8cd]">
                      {cat.subtitle}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-white">
                      {cat.title}
                    </h3>
                    <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-x-1">
                      Explore <ArrowUpRight size={16} />
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          ) : (
            /* STEP 2: Dress Grid for Selected Category */
            <motion.div
              key="dress-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Back button */}
              <button
                onClick={() => setSelectedCategory(null)}
                className="mb-6 flex items-center gap-2 text-sm font-medium text-[#FF477E] transition-colors hover:text-[#e63a6d]"
              >
                <ArrowLeft size={16} />
                Back to categories
              </button>
               <div className="text-3xl font-bold my-2.5">{addCategory}</div>

              <motion.div
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
              >
                {filteredDresses.map((dress) => (
                  <motion.button
                    key={dress.id}
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 120,
                          damping: 16,
                        },
                      },
                    }}
                    onClick={() => handleSelectDress(dress.slug)}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#fde2ea] bg-white text-left shadow-sm transition-colors duration-300 hover:border-[#FF477E] hover:shadow-lg hover:shadow-pink-100"
                  >
                   
                    <div className="relative aspect-3/4 w-full overflow-hidden bg-linear-to-br from-[#ffe4ec] to-[#fff5f8]">
                      {dress.img ? (
                        <Image
                          src={dress.img}
                          alt={dress.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gray-100">
                          {/* fallback icon/placeholder */}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col gap-1 p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#FF477E]">
                          {dress.name}
                        </h3>
                        <ArrowUpRight
                          size={16}
                          className="text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#FF477E]"
                        />
                      </div>
                      <p className="text-xs text-gray-500">
                        {dress.colors.join(" · ")}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[#FF477E]">
                        {dress.price}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Dresses;
