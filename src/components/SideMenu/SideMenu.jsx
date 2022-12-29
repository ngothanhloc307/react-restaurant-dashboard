import React from "react";
import { GiHamburger } from "react-icons/gi";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { BiRestaurant } from "react-icons/bi";
import adminImage from "../../assets/user.png";
import mapImage from "../../assets/location.jpg";

const SideMenu = () => {
  return (
    <div className="bg-sideMenuBg relative h-[100%] basis-20 p-4">
      {/* Logo Div */}
      <div className="logo mt-4 gap-2 text-[white] flex items-center justify-center m-auto">
        <GiHamburger className="text-[20px]" />
        <h1 className="text-[20px] align-center justify-center font-black">
          Foodie
        </h1>
      </div>

      {/* User Div */}
      <div className="flex items-center justify-center text-[white] flex-col mt-[3rem] admin">
        <img
          src={adminImage}
          alt="Admin Image"
          className="h-[80px] w-[80px] border-[4px] border-red-400 object-cover rounded-full hover:-translate-y-1 hover:transition duration-55"
        />
        <span className="opacity-70 mt-2 text-gray-400">Welcome,</span>
        <h3 className="font-bold text-textColor">Anna Lisa</h3>
      </div>

      {/* Simple Menu */}
      <div className="m-auto grid justify-center mt-4">
        <li className="flex pt-3 pb-3 pl-3 gap-2 hover:opacity-100 items-center">
          <AiFillHome className="text-[white]" />
          <span className="text-textColor">Home</span>
        </li>
        <li className="flex pt-3 pb-3 pl-3 gap-2 hover:opacity-100 items-center">
          <BiRestaurant className="text-[white]" />
          <span className="text-textColor">Categories</span>
        </li>
        <li className="flex pt-3 pb-3 pl-3 gap-2 hover:opacity-100 items-center">
          <BsBookmarkCheckFill className="text-[white]" />
          <span className="text-textColor">Reservations</span>
        </li>
        <li className="flex pt-3 pb-3 pl-3 gap-2 hover:opacity-100 items-center">
          <AiFillHeart className="text-[white]" />
          <span className="text-textColor">Favourites</span>
        </li>
      </div>

      {/* Side Menu Map Div */}
      <div className="mt-5 h-[14rem] w-full rounded-xl overflow-hidden">
        <img src={mapImage} alt="Map Image" className="object-cover h-[80%] " />
      </div>
    </div>
  );
};

export default SideMenu;
