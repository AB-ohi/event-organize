import { services } from "@/data/services";
import Image from "next/image";

const Page = async ({ params }) => {

  const {serviceData} = params;

  const service = services.find((s)=> s.serviceData === serviceData)
  console.log(service)

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 mt-12">
      <div className="relative h-80 w-full overflow-hidden rounded-2xl">
        <Image src={service.img} alt={service.name} fill className="object-cover" />
      </div>

      <h1 className="mt-6 text-3xl font-bold text-gray-900">{service.name}</h1>
      <p className="mt-3 text-gray-600">{service.longDesc}</p>

      {/* Packages */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {service.packages.map((pkg) => (
          <div key={pkg.id} className="rounded-2xl border border-[#fde2ea] p-6">
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
  );
};

export default Page;