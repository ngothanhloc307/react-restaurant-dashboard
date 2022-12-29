import React from "react";
import {
  AiOutlineSearch,
  AiOutlineAppstoreAdd,
  AiFillStar,
} from "react-icons/ai";
import { BsPlus, BsArrowRightShort } from "react-icons/bs";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";

// Import Food Image from local sources
import pizza from "../../assets/pizza.png";
import asia from "../../assets/rice.png";
import bars from "../../assets/beer-.png";
import bugger from "../../assets/hambuger.png";
import cafe from "../../assets/coffee-.png";
import pub from "../../assets/pub.png";
import vegan from "../../assets/vegan.png";
import sea from "../../assets/firsh.png";
import sushi from "../../assets/sushi.png";
import bbq from "../../assets/vegan.png";
import hotdog from "../../assets/hotdog.png";

// Import Restaurant Image from local sources
import rest1 from "../../assets/japanse_curry.jpg";
import rest2 from "../../assets/milktea.jpg";
import rest3 from "../../assets/pizzafood.jpeg";
import rest4 from "../../assets/picanha.jpg";

const Body = () => {
  return (
    <div className="bg-bodyBg h-[100%] basis-80 p-8">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center border-gray-300 border-b-2 pb-2 basis-1/2 gap-2">
          <AiOutlineSearch className="text-hoverColor text-[20px] cursor-pointer" />
          <input
            type="text"
            placeholder="Search your favourite"
            className="border-none outline-none placeholder:text-sm focus:outline-none"
          />
        </div>

        <div className="flex gap-4 items-center">
          <AiOutlineAppstoreAdd className="text-hoverColor cursor-pointer text-[50px] hover:text-[25px] transition-all" />
          <button className="bg-sideMenuBg cursor-pointer text-bodyBg font-semibold px-4 rounded-[5px] hover:bg-[#55545e] transition-all">
            Go Premium
          </button>
        </div>
      </div>

      {/* Title Div */}
      <div className="flex items-center justify-between mt-8">
        <div className="title">
          <h1 className="text-[35px] text-titleColor tracking-[1px] font-black">
            Find the best place
          </h1>
          <span className="text-[16px] opacity-70">
            <strong>111 Restaurants, </strong>choose yours
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="specials px-4 text-center border-r-2">
            <h3 className="text-[20px] font-bold text-titleColor">90</h3>
            <small className="text-[16px] opacity-70">Specials</small>
          </div>

          <div className="deliveries px-4 text-center">
            <h3 className="text-[20px] font-bold text-titleColor">91</h3>
            <small className="text-[16px] opacity-70">Deliveries</small>
          </div>
        </div>
      </div>

      {/* Category */}
      <div className="flex mt-8 items-center gap-10">
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#BFEAF5] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={pizza}
              alt="food category"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2">
            Italian
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#FFE5F1] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={asia}
              alt="food category"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2">
            asian
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#DAE2B6] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={bugger}
              alt="food category"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2">
            bugger
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#D6E4E5] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={bars}
              alt="food category"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2">
            bars
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#DEF5E5] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={cafe}
              alt="food category"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2">
            coffee
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#FFE1E1] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={pub}
              alt="food category"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2">
            pubs
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#F8FFDB] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={vegan}
              alt="food category"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span vegan="uppercase text-[12px] font-medium opacity-50 pt-2">
            coffee
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={sea}
              alt="food category"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2">
            sea
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#81C6E8] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={sushi}
              alt="food category"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2">
            sushi
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#FFF8EA] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={bbq}
              alt="food category"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2">
            bbq
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#D8D9CF] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={hotdog}
              alt="food category"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2">
            hotdog
          </span>
        </div>
        <div className="singleCategory grid items-center justify-between text-center cursor-pointer">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
            <BsPlus className="text-center felx justify-center m-auto text-[25px] hover:scale-[1.5] transition-all" />
          </div>
          <span className="text-[12px] font-medium opacity-50 pt-2">More</span>
        </div>
      </div>

      {/* Restaurant Section */}
      <div className="restaurant mt-8">
        <div className="flex items-center justify-between">
          <div className="title">
            <h1 className="text-[25px] text-titleColor font-bold">
              New Restaurants
            </h1>
            <span className="text-[16px] opacity-70">
              <strong>9 restaurants, </strong>have been opened up in town
            </span>
          </div>
          <button className=" flex cursor-pointer text-titleColor font-semibold py-2 px-4 rounded-[5px] hover:bg-[#55545e] hover:text-bodyBg transition-all">
            View All <BsArrowRightShort className="text-[20px]" />
          </button>
        </div>

        <div className="restaurantContainer py-8 h-[290px] flex justify-between items-center">
          <div className="singleRestaurant w-[220px] bg-colorOne p-3 rounded-[10px]">
            <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
              <img src={rest1} alt="" className="w-full h-full object-cover" />
            </div>
            <h1 className="restName block text-center font-bold opacity-90 pt-4">
              Japanse Curry
            </h1>
            <small className=" block text-center text-[#606060] font-medium">
              Asia Restaurant
            </small>
            <div className="info mt-5 flex justify-center items-center">
              <div className="singleInfo grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font font-semibold text-[#4f4d58]">3.7</h4>
              </div>
              <div className="singleInfo border-x-2 grid px-3">
                <MdOutlineMonetizationOn className="flex mt-auto justify-center items-center" />
                <h4 className="font font-semibold text-[#4f4d58]">30</h4>
              </div>
              <div className="singleInfo grid px-3">
                <GiPathDistance className="flex mt-auto justify-center items-center" />
                <h4 className="font font-semibold text-[#4f4d58]">0.7</h4>
              </div>
            </div>
          </div>

          <div className="singleRestaurant w-[220px] bg-colorTwo p-3 rounded-[10px]">
            <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
              <img src={rest2} alt="" className="w-full h-full object-cover" />
            </div>
            <h1 className="restName block text-center font-bold opacity-90 pt-4">
              Milk Tea
            </h1>
            <small className=" block text-center text-[#606060] font-medium">
              Drink
            </small>
            <div className="info mt-5 flex justify-center items-center">
              <div className="singleInfo grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font font-semibold text-[#4f4d58]">3.7</h4>
              </div>
              <div className="singleInfo border-x-2 grid px-3">
                <MdOutlineMonetizationOn className="flex mt-auto justify-center items-center" />
                <h4 className="font font-semibold text-[#4f4d58]">30</h4>
              </div>
              <div className="singleInfo grid px-3">
                <GiPathDistance className="flex mt-auto justify-center items-center" />
                <h4 className="font font-semibold text-[#4f4d58]">0.7</h4>
              </div>
            </div>
          </div>

          <div className="singleRestaurant w-[220px] bg-colorThree p-3 rounded-[10px]">
            <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
              <img src={rest3} alt="" className="w-full h-full object-cover" />
            </div>
            <h1 className="restName block text-center font-bold opacity-90 pt-4">
              Pizza
            </h1>
            <small className=" block text-center text-[#606060] font-medium">
              Italian Restaurant
            </small>
            <div className="info mt-5 flex justify-center items-center">
              <div className="singleInfo grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font font-semibold text-[#4f4d58]">3.7</h4>
              </div>
              <div className="singleInfo border-x-2 grid px-3">
                <MdOutlineMonetizationOn className="flex mt-auto justify-center items-center" />
                <h4 className="font font-semibold text-[#4f4d58]">30</h4>
              </div>
              <div className="singleInfo grid px-3">
                <GiPathDistance className="flex mt-auto justify-center items-center" />
                <h4 className="font font-semibold text-[#4f4d58]">0.7</h4>
              </div>
            </div>
          </div>

          <div className="singleRestaurant w-[220px] bg-colorFour p-3 rounded-[10px]">
            <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
              <img src={rest4} alt="" className="w-full h-full object-cover" />
            </div>
            <h1 className="restName block text-center font-bold opacity-90 pt-4">
              Picanha
            </h1>
            <small className=" block text-center text-[#606060] font-medium">
              Brazil Restaurant
            </small>
            <div className="info mt-5 flex justify-center items-center">
              <div className="singleInfo grid px-3">
                <AiFillStar className="flex mt-auto justify-center items-center" />
                <h4 className="font font-semibold text-[#4f4d58]">3.7</h4>
              </div>
              <div className="singleInfo border-x-2 grid px-3">
                <MdOutlineMonetizationOn className="flex mt-auto justify-center items-center" />
                <h4 className="font font-semibold text-[#4f4d58]">30</h4>
              </div>
              <div className="singleInfo grid px-3">
                <GiPathDistance className="flex mt-auto justify-center items-center" />
                <h4 className="font font-semibold text-[#4f4d58]">0.7</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
