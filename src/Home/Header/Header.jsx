import React from "react";
import { GoSearch } from "react-icons/go";
import { BsForkKnife, BsMouse } from "react-icons/bs";
import { LuCloudSunRain, LuLayers } from "react-icons/lu";
import { HiOutlineColorSwatch } from "react-icons/hi";
import headerImage from "../../../public/home/banner/bannerImg.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center text-black w-[95%] m-auto">
      {/* header details*/}
      <div className="">
        <div className="flex items-stretch gap-4 md:gap-6 mt-20.5">
          {/* Left Accent Line */}
          <div className="w-1.5 shrink-0 rounded-full bg-pink-400" />

          {/* Text */}
          <div>
            <p className="text-2xl md:text-[42px] leading-tight">When your</p>

            <p className="text-2xl md:text-[40px] font-semibold leading-tight">
              Dream Wedding come true
            </p>
          </div>
        </div>
        <p className="mt-5">
          “ Once in a while, right in the middle of an ordinary life, love gives
          us a fairy tale. ”
        </p>
        <div className="flex items-center justify-between bg-white px-6 py-4 rounded-2xl mt-8 shadow-[0_20px_30px_-10px_rgb(38,57,77)]">
          <input
            placeholder="Cari Photographer, Katering, dsb"
            className="w-full outline-0"
            type="text"
            name="search"
          />

          <div className="bg-pink-400 p-3 rounded-xl">
            <GoSearch className="text-white font-bold" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-15">
          <Link
            href="/services/website-design"
            className="flex items-center gap-3 rounded-xl border border-pink-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-md"
          >
            <HiOutlineColorSwatch className="text-2xl text-pink-400" />
            <span className="text-sm font-medium text-gray-700">
              Website Design and Invitations
            </span>
          </Link>

          <Link
            href="/services/cakes-catering"
            className="flex items-center gap-3 rounded-xl border border-pink-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-md"
          >
            <BsForkKnife className="text-2xl text-pink-400" />
            <span className="text-sm font-medium text-gray-700">
              Cakes and Catering
            </span>
          </Link>

          <Link
            href="/services/rain-shaman"
            className="flex items-center gap-3 rounded-xl border border-pink-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-md"
          >
            <LuCloudSunRain className="text-2xl text-pink-400" />
            <span className="text-sm font-medium text-gray-700">
              Rain Shaman
            </span>
          </Link>

          <Link
            href="/services/other-services"
            className="flex items-center gap-3 rounded-xl border border-pink-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-md"
          >
            <LuLayers className="text-2xl text-pink-400" />
            <span className="text-sm font-medium text-gray-700">
              Other services
            </span>
          </Link>
        </div>
        <div className="flex mt-3.5">
          <p className="[writing-mode:vertical-rl] rotate-180 text-[10px]">Scroll Down</p>
          <BsMouse className="text-6xl text-pink-400" />
        </div>
      </div>
      {/* header Image */}
      <Image
  src={headerImage}
  alt="Header Image"
  className="
    w-full
    mask-[linear-gradient(to_top,transparent_0%,black_40%,black_100%)]
    [-webkit-mask-image:linear-gradient(to_top,transparent_0%,black_80%,black_100%)]
  "
/>
    </div>
  );
};

export default Header;
