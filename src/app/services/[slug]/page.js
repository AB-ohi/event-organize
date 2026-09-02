"use client";
import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";

const Page = ({ params }) => {
  const { slug } = use(params);
  const [service, setService] = useState();
  const [servicesType, setServicesType] = useState();

  const handelSelectValue = (v) => {
    const selectValue = v.target.value;
    setServicesType(selectValue);
  };

  useEffect(() => {
    const filterService = services.find((s) => s.slug === slug);
    setService(filterService);
  }, [slug]);

  if (!service) {
    return <div className="mx-auto max-w-4xl px-4 py-16 mt-12">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mt-4  px-4 mx-auto">
      <Link href='/' className="py-2 px-2 rounded  bg-pink-400">Home</Link>
    <div className="mx-auto py-4">
      <div className="relative h-80 overflow-hidden rounded-2xl">
        <Image
          src={service.img}
          alt={service.name}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="mt-6 text-3xl font-bold text-gray-900">{service.name}</h1>
      <p className="mt-3 text-gray-600">{service.longDesc}</p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {service.packages.map((pkg) => (
          <div key={pkg.id} className="rounded-2xl border border-[#fde2ea] p-6">
            <input
              type="radio"
              name={pkg.name}
              value={pkg.name}
              onChange={handelSelectValue}
              checked={servicesType === pkg.name}
              className="cursor-pointer"
            />
            <h3 className="text-lg font-semibold">{pkg.name}</h3>
            <p className="mt-1 text-[#FF477E] font-bold">{pkg.price}</p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-gray-600">
              {pkg.features.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Page;
