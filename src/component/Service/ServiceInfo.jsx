"use client";

import { CheckCircle2, X } from "lucide-react";
import { motion } from "framer-motion";

const ServiceInfo = ({ selectCategory, onClose }) => {
  if (!selectCategory) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative m-auto w-[90%] max-w-md rounded-2xl border border-[#fde2ea] bg-white p-6 shadow-xl sm:w-[57%]"
    >
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#fff5f8] text-gray-500 transition-colors duration-300 hover:bg-[#fde2ea] hover:text-[#FF477E]"
        >
          <X size={16} />
        </button>
      )}

      {/* Header */}
      <div className="text-center">
        <span className="inline-block rounded-full bg-[#fff5f8] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#FF477E]">
          Selected Package
        </span>
        <h2 className="mt-3 text-2xl font-bold text-gray-900">
          {selectCategory.name}
        </h2>
        <p className="mt-1 text-3xl font-extrabold text-[#FF477E]">
          {selectCategory.price}
        </p>
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-[#fde2ea]" />

      {/* Features */}
      <div className="flex flex-col gap-3">
        {selectCategory.features?.map((feature) => (
          <div key={feature} className="flex items-start gap-2.5">
            <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-[#FF477E]" />
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button className="mt-8 w-full rounded-full bg-[#FF477E] py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#e63a6d]">
        Confirm & Book
      </button>
    </motion.div>
  );
};

export default ServiceInfo;