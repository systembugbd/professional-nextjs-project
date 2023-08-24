"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../../../public/images/logo.svg";
import Image from "next/image";
import { HiBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { BiChevronRight } from "react-icons/bi";

const Navigation2 = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    //handle resize window
    function handleResizeWindow() {
      if (typeof window !== "undefined") {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      }

      if (dimensions.width > 1024 && navOpen) {
        setNavOpen(false);
      }
    }
    window.addEventListener("resize", handleResizeWindow);

    return () => window.removeEventListener("resize", handleResizeWindow);
  });

  const handleNavOpenClose = () => {
    setNavOpen(!navOpen);
  };

  const navigationMenu = [
    {
      href: "#",
      label: "Home",
    },
    {
      href: "#",
      label: "How we work",
    },
    {
      href: "#",
      label: "Our Mission",
    },
    {
      href: "#",
      label: "About",
    },
    {
      href: "#",
      label: "Contact",
    },
  ];

  return (
    <>
      <header className="py-7">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center ">
            {/* Logo */}
            <div className="">
              <Link href={"/"}>
                <Image src={logo} alt="logo" />
              </Link>
            </div>
            {/* Menu Desktop */}
            <div className="hidden lg:block">
              <ul className="flex space-x-7">
                {navigationMenu.map((item, idx) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-primary duration-300 transition-all ease-in-out"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Button */}
            <div className="">
              <Link
                href="#"
                className="hidden lg:inline-block bg-primary p-4 rounded-lg text-white"
              >
                <span>Get Started</span>
              </Link>
              <button
                className="lg:hidden block text-3xl"
                onClick={handleNavOpenClose}
              >
                <HiBars3 />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <div className={navOpen ? "block" : "hidden"}>
        <div
          className="bg-black fixed h-screen w-screen z-[999] opacity-50 top-0  cursor-pointer"
          onClick={handleNavOpenClose}
        ></div>
        <div className="bg-white fixed w-[320px] top-0 right-0 z-[9999] h-screen">
          <div
            className="border-b flex items-center space-x-4 p-4 px-7"
            onClick={handleNavOpenClose}
          >
            <GrClose className="hover:rotate-90 transition-all ease-in-out cursor-pointer" />
            <span>Close</span>
          </div>
          <div className="p-7">
            <ul className="space-y-4">
              {navigationMenu.map((item, id) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex duration-300 transition-all ease-in-out items-center hover:text-primary"
                  >
                    {item.label}
                    <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                      <BiChevronRight className="text-xl" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation2;
