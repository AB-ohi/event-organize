import React from "react";
import { GoSearch } from "react-icons/go";
import { BsForkKnife } from "react-icons/bs";
import { LuCloudSunRain, LuLayers } from "react-icons/lu";
import { HiOutlineColorSwatch } from "react-icons/hi";
import headerImage from "../../../public/home/banner/bannerImg.png"
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center">
      {/* header details*/}
      <div className="">
        <p>When your </p>
        <p>Dream Wedding come true</p>
        <p>
          “ Once in a while, right in the middle of an ordinary life, love gives
          us a fairy tale. ”
        </p>
        <div className="flex">
          <input type="text" name="search" id="" />
          <GoSearch />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex items-center gap-2.5">
            <HiOutlineColorSwatch />
            Website Design and Invitations
          </div>
          <div className="flex items-center gap-2.5">
            <BsForkKnife />
            Cakes and Catering
          </div>
          <div className="flex items-center gap-2.5">
            <LuCloudSunRain /> Rain Shaman
          </div>
          <div className="flex items-center gap-2.5">
            <LuLayers />
            Other services
          </div>
        </div>
      </div>
      {/* header Image */}
      <div>
        <Image src={headerImage}/>
      </div>
    </div>
  );
};

export default Header;
