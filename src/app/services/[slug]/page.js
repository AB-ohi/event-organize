"use client";
import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { ArrowRight, PartyPopper } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceInfo from "@/Component/Service/ServiceInfo";

const Page = ({ params }) => {
  const { slug } = use(params);
  const [service, setService] = useState();
  const [servicesType, setServicesType] = useState();
  const [selectCategory, setSelectCategory] = useState(null);
  const [popup, setPopup] = useState(false);
  console.log(selectCategory);
  console.log(popup);

  const handelSelectValue = (v) => {
    const selectValue = v.target.value;
    setServicesType(selectValue);
  };

  useEffect(() => {
    const filterService = services.find((s) => s.slug === slug);
    setService(filterService);
  }, [slug]);

  useEffect(() => {
    if (!service) return;
    const filterCategory = service.packages.find(
      (c) => c.name === servicesType,
    );
    setSelectCategory(filterCategory);
  }, [service, servicesType]);

  if (!service) {
    return <div className="mx-auto max-w-4xl px-4 py-16 mt-12">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mt-4  px-4 mx-auto">
      <Link href="/#services">
        <motion.div
          key="select-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="group py-2 px-2 rounded flex items-center w-[90px] justify-center text-white hover:text-[#FF477E]  hover:bg-pink-100 duration-300 bg-[#FF477E] "
        >
          <IoMdArrowRoundBack className="transition-transform duration-300 group-hover:-translate-x-1" />
          Service
        </motion.div>
      </Link>
      <div className="mx-auto py-4">
        <div className="relative h-80 overflow-hidden rounded-2xl">
          <Image
            src={service.img}
            alt={service.name}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          {service.name}
        </h1>
        <p className="mt-3 text-gray-600">{service.longDesc}</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {service.packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setServicesType(pkg.name)}
              className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                servicesType === pkg.name
                  ? "border-[#FF477E] bg-[#fff5f8] shadow-md shadow-pink-100"
                  : "border-[#fde2ea] hover:border-[#fac7d6]"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{pkg.name}</h3>
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                    servicesType === pkg.name
                      ? "border-[#FF477E] bg-[#FF477E]"
                      : "border-gray-300"
                  }`}
                >
                  {servicesType === pkg.name && (
                    <div className="h-2 w-2 rounded-full bg-white" />
                  )}
                </div>
              </div>

              <p className="mt-1 text-[#FF477E] font-bold">{pkg.price}</p>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-gray-600">
                {pkg.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {servicesType ? (
          <motion.div
            key="next-btn"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8 flex flex-col items-center justify-center gap-2"
          >
            <p className="flex items-center gap-1.5 text-sm text-gray-500">
              <PartyPopper size={16} className="text-[#FF477E]" />
              You selected{" "}
              <span className="font-semibold text-gray-900">
                {servicesType}
              </span>
            </p>

            <Link href="#" onClick={() => setPopup(true)}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 rounded-full bg-[#FF477E] px-8 py-3 text-sm font-semibold text-white shadow-md shadow-pink-200 transition-colors duration-300 hover:bg-[#e63a6d]"
              >
                Next
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.div>
            </Link>
          </motion.div>
        ) : (
          <motion.div
            key="select-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 flex items-center justify-center"
          >
            <p className="rounded-full bg-[#fff5f8] px-5 py-2.5 text-sm font-medium text-[#FF477E]">
              Select a package that suits you best
            </p>
          </motion.div>
        )}
      </div>
      <div className="relative">
        {popup && (
          <div onClick={()=>setPopup(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4">
              <ServiceInfo selectCategory={selectCategory} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
