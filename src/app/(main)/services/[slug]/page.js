import { services } from "@/data/services";

const Page = async ({ params }) => {

  const {serviceData} = params;

  const service = services.find((s)=> s.serviceData === serviceData)
  console.log(service)

  return (
    <div></div>
  );
};

export default Page;