"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import banner1 from "../../../public/home/banner/banner1.jpg";
import banner2 from "../../../public/home/banner/banner2.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const Header = () => {
  const HeaderImage = [
    {
      id: 1,
      image: banner1,
      bannerDetails: "Welcome to Wish Website details 1",
      link:"#"
    },
    {
      id: 2,
      image: banner2,
      bannerDetails: "Welcome to Wish Website details 2",
      link:"#"
    },
    {
      id: 3,
      image: banner1,
      bannerDetails: "Welcome to Wish Website details 3",
      link:"#"
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop
      className="h-125 w-full"
    >
      {HeaderImage.map((Header) => (
        <SwiperSlide key={Header.id}>
          <div className="relative h-125 w-full">
            <Image
              src={Header.image}
              alt={`Banner ${Header.id}`}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center flex-col bg-black/40">
              <h1 className="text-4xl font-bold text-white">
                {Header.bannerDetails}
              </h1>
              <Link
              href={Header.link}
                className="inline-flex items-center rounded-lg bg-sky-400 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-sky-500 hover:scale-105 hover:shadow-lg"
              >
                Visit Details
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Header;
