"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HeaderLinks from "@/lib/consts/HeaderLinks";
import HeaderItem from "./HeaderItem";
import Form from "./Form";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  const setStickyNav = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 75) setSticky(true);
    else setSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", setStickyNav);

    return () => window.removeEventListener("scroll", setStickyNav);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 left-0 z-30 px-4 md:px-6 md:py-12 transition-all py-8 bg-white",
        {
          "!py-2 md:!py-6 lg:py-8 shadow-md": sticky,
        }
      )}
    >
      <nav
        className={
          "hidden lg:max-w-screen-xl mx-auto md:flex lg:flex items-center justify-between"
        }
      >
        <Link href="/">
          <h3 className="text-colorGreen font-bold text-xs md:text-xl">
            CookMaster
          </h3>
        </Link>
        <ul className="md:flex hidden items-center md:gap-6 lg:gap-12">
          {HeaderLinks.map((val, i) => (
            <HeaderItem key={i} info={val} />
          ))}
        </ul>
        <Form />
      </nav>
      <MobileMenu />
    </header>
  );
};

export default Header;
