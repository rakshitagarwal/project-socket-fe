"use client";

import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/icons/logo.svg";

import notifications from "@/assets/icons/notification.svg";
import avatar from "@/assets/images/avatar.png";
import NavLink from "./NavLink";
import homeIcon from "@/assets/images/homeIcon.png";

import auctionIcon from "@/assets/images/auctionIcon.png";
import logoutIcon from "@/assets/images/logoutIcon.png";
import { ROUTES_PATH } from "../helpers/constants/constants.helper";
import { storage } from "../helpers/storage";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { userLogout } from "@/redux/user/user.thunk";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    console.log("first")
    dispatch(userLogout());
  };

  return (
    <header className="bg-primary justify-evenly flex p-2">
      <div
        className={`fixed top-0  bottom-0 w-[300px] bg-header z-50 shadow-card transition ease-in-out duration-700 bg-primary flex flex-col gap-10  max-tablet:block ${
          isMenuOpen ? " right-0 " : " right-[-300px]"
        }`}
      >
        <div
          className="absolute text-white z-99 left-2 top-2 w-[30px] h-[30px] border-2 border-white rounded-full flex justify-center items-center cursor-pointer  "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          X
        </div>
        <div className="bg-primary flex justify-center p-4">
          <Image
            src={logo.src}
            className="w-100px"
            alt="logo"
            width={100}
            height={45}
          />
        </div>
        <MenuDivider />

        <div className="flex gap-1">
          <Image
            src={homeIcon}
            alt="homeIcon"
            className="w-[20px] h-[20px] mt-2 ml-2 hover:bg-white"
            height={20}
            width={20}
          />
          <NavLink href={ROUTES_PATH.HOME}>Home</NavLink>sdsd
        </div>
        <MenuDivider />

        <div className="flex gap-1">
          <Image
            src={auctionIcon}
            className="w-[20px] h-[20px] mt-2 ml-2"
            alt="auctionIcon"
            height={20}
            width={20}
          />
          <NavLink href="test">Upcoming Auctions</NavLink>
        </div>
        <MenuDivider />

        <div className="flex gap-1">
          <Image
            src={logoutIcon}
            className="w-[20px] h-[20px] mt-2 ml-2"
            alt="logoutIcon"
            height={20}
            width={20}
          />
          {/* <NavLink href={ROUTES_PATH.LOGIN}>Logout</NavLink> */}
        </div>

        <MenuDivider />
      </div>

      <div className="container text-white flex justify-between ">
        <div>
          <Link
            href="/"
            className="text-white hover:text-offWhite ease-linear cursor-pointer duration-300 max-tablet:block max-tablet:p-2"
          >
            <Image src={logo} width={100} height={45} alt="Logo" />
          </Link>
        </div>

        <div className="flex gap-6 ">
          <div className="gap-8 flex text-md items-center max-tablet:hidden">
            <NavLink href={ROUTES_PATH.HOME} icon={homeIcon}>
              Home
            </NavLink>
            <NavLink href={ROUTES_PATH.UPCOMING_AUCTION}>
              Upcoming Auctions
            </NavLink>
          </div>
          <div className="gap-4 flex text-md items-center">
            <Image
              src={notifications}
              className="w-[24px]"
              alt="notification"
              height={24}
              width={24}
            />

            <div className=" rounded-lg bg-gradient-to-r from-[#0052B4]   to-[#ae96ba] p-[1px] max-tablet:hidden">
              <button
                className=" px-4 py-1 bg-primary rounded-lg"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>

            <div
              className="group inline-block relative divide-gray-100"
              ref={menuRef}
            >
              <button
                onClick={() => setShowPopup(!showPopup)}
                className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
              >
                <Image src={avatar} alt="avatar" height={20} width={20} />
              </button>
              {showPopup && (
                <div
                  onClick={() => setShowPopup(!showPopup)}
                  className="absolute top-0 right-0 mt-12 bg-white text-gray-700 pt-1 z-50 w-max text-themeColor rounded-sm shadow-xl"
                >
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div className="font-bold">Bonnie Green</div>
                    <div className="font-medium truncate">
                      name@flowbite.com
                    </div>
                  </div>
                  <NavLink
                    className="dark:hover:text-white rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap font-bold text-dark"
                    href={ROUTES_PATH.HOME_DASHBOARD}
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white whitespace-no-wrap font-bold"
                    href={ROUTES_PATH.HOME_DASHBOARD}
                  >
                    My Auctions
                  </NavLink>
                </div>
              )}
            </div>
            <button
              className="hidden max-tablet:block"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {/* <img src={menuIcon} className="w-[25px] h-[25px]" alt="menu" /> */}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function MenuDivider() {
  return <div className="border-b border-white opacity-50 mx-2"></div>;
}
export default Header;
