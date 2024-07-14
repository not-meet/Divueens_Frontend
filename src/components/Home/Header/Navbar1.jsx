import React, { useState, useEffect, useRef } from "react";
import {
  FiMenu,
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiUser,
  FiTrendingUp,
} from "react-icons/fi";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import Auth from "../../Auth/Auth";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { Divueens } from "../../../assets/assets";

const Navbar1 = ({ navItemText }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [displayAuth, setDisplayAuth] = useState(false);
  const [isDrop, setIsDrop] = useState(false);
  const [displayOnScroll, setDisplayOnScroll] = useState("");
  const mainNavItems = [
    "Categories",
    "Brands",
    "Div Fashion",
    "Beauty Advice",
    "Tools and Accessories",
    "Offers"
  ];
  const subNavItems = [
    "Face",
    "Hair",
    "MakeUp",
    "Body care",
    "Fragrance",
    "Combos",
    "Natural",
    "Health & Wellness"
  ];

  useEffect(
    () =>
      window.addEventListener("scroll", () =>
        setDisplayOnScroll(
          scrollY >= 50
            ? "shadow-md border-b border-rose-200 bg-rose-300 backdrop-filter backdrop-blur-lg bg-opacity-30"
            : ""
        )
      ),
    []
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Auth show={displayAuth} changeView={setDisplayAuth} />
      <nav
        className={`flex font-montserrat px-8 sticky top-0 z-40 w-full items-center justify-center ${displayOnScroll}`}
      >
        <div className="w-[20%]">
          <Link to="/">
            <img
              className=" w-[200px] h-[100px] pt-2"
              src={Divueens}
              alt="Description"
            />
          </Link>
        </div>
        <div
          className="w-[80%] flex flex-col gap-3"
          // style={{fontFamily: 'Josefin Sans'}}
        >
          <div className="w-full flex lg:justify-center justify-end lg:pr-40 items-center ">
            <div className="hidden lg:w-[70%] lg:block">
              <SearchBox />
            </div>
            <div className="hidden lg:flex space-x-6 text-slate-500">
              <button className="md:pl-7 hover:text-rose-800">
                <FiShoppingCart size={20} />
              </button>
              <button className=" md:hover:text-rose-800">
                <FiHeart size={20} />
              </button>
              <button
                className=" hover:text-rose-800"
                onClick={() => setDisplayAuth(true)}
              >
                <FiUser size={20} />
              </button>
            </div>

            <div className="pr-8 lg:hidden">
              <button onClick={toggleMenu} className="text-gray-800">
                <FaBars size={22} />
              </button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center gap-x-7 font-semibold tracking-wider">
            {mainNavItems.map((item, index) => (
                <Link key={index}
                  to="/products"
                  className="hover:underline-offset-2 text-nowrap hover:underline hover:text-rose-800"
                >
                  {item}
                </Link>
            ))}
          </div>
          {isOpen && (
            <div className="absolute top-0 right-0 h-screen bg-white/80 min-w-[15rem] sm:min-w-[20rem] z-50 w-[30%] backdrop-blur-sm shadow-[-2px_0_5px_rgba(173,65,65,0.5)] py-4 pl-4 transition-[transform] duration-[0.5s] ease-in-out lg:hidden">
              <div>
                <div className="flex items-center justify-between pr-4">
                  <button
                    type="button"
                    className="btn-close border-none px-[1rem] text-[#fff] rounded-[3rem] bg-rose-700 text-[2rem] cursor-pointer"
                    onClick={toggleMenu}
                  >
                    &times;
                  </button>

                  <div className="flex space-x-4 justify-center my-2">
                    <FiShoppingCart className="text-gray-800" />
                    <FiHeart className="text-gray-800" />
                    <FiUser
                      onClick={() => setDisplayAuth(true)}
                      className="text-gray-800"
                    />
                  </div>
                </div>

                <div className="relative my-4 pr-4">
                  <SearchBox />
                </div>

                <div className="flex flex-col w-full gap-4 overflow-auto max-h-screen scroll-smooth">
                  <Link
                    to="/products"
                    className="px-2 py-1 text-gray-800 font-semibold border-b border-rose-700 w-[13rem] sm:w-[17rem] shadow-sm rounded-l-md shadow-rose-700/70"
                  >
                    {" "}
                    Categories{" "}
                  </Link>
                  <Link
                    to="/"
                    className="px-2 py-1 text-gray-800 font-semibold border-b border-rose-700 w-[13rem] sm:w-[17rem] shadow-sm rounded-l-md shadow-rose-700/70"
                  >
                    {" "}
                    Brands{" "}
                  </Link>
                  <Link
                    to="/"
                    className="px-2 py-1 text-gray-800 font-semibold border-b border-rose-700 w-[13rem] sm:w-[17rem] shadow-sm rounded-l-md shadow-rose-700/70"
                  >
                    {" "}
                    Div Fashion{" "}
                  </Link>
                  <Link
                    to="/blogs"
                    className="px-2 py-1 text-gray-800 font-semibold border-b border-rose-700 w-[13rem] sm:w-[17rem] shadow-sm rounded-l-md shadow-rose-700/70"
                  >
                    {" "}
                    Beauty Advice{" "}
                  </Link>
                  <Link to="/" className="px-2 py-1 text-gray-800 font-medium">
                    Face
                  </Link>
                  <Link to="/" className="px-2 py-1 text-gray-800 font-medium">
                    Hair
                  </Link>
                  <Link to="/" className="px-2 py-1 text-gray-800 font-medium">
                    MakeUp
                  </Link>
                  <Link to="/" className="px-2 py-1 text-gray-800 font-medium">
                    Body
                  </Link>
                  <Link to="/" className="px-2 py-1 text-gray-800 font-medium">
                    Baby
                  </Link>
                  <Link to="/" className="px-2 py-1 text-gray-800 font-medium">
                    Fragrance
                  </Link>
                  <Link to="/" className="px-2 py-1 text-gray-800 font-medium">
                    Combos
                  </Link>
                  <Link to="/" className="px-2 py-1 text-gray-800 font-medium">
                    Natural
                  </Link>
                  <Link to="/" className="px-2 py-1 text-gray-800 font-medium">
                    Tools and Accessories
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="bg-white w-full mx-auto border border-t hidden shadow-md lg:flex">
        <div className="w-full py-2 px-4 ">
          <ul className="w-full flex gap-10 justify-center">
            {subNavItems.map((item, index) => (
              <>
                <li className="flex-shrink-0 " key={index}>
                  <Link
                    className="hover:underline text-sm font-medium text-slate-500 hover:text-rose-800"
                    onClick={() => navItemText(item)}
                  >
                    {item}
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar1;