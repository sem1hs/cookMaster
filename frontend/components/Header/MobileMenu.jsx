import Link from "next/link";
import React, { useState } from "react";
import Form from "./Form";
import clsx from "clsx";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import HeaderItem from "./HeaderItem";
import HeaderLinks from "@/lib/consts/HeaderLinks";

const MobileMenu = () => {
  const handleClick = (e) => {
    setIsOpen((open) => !open);
  };
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav
      className={clsx(
        "md:hidden sticky top-0 left-0 z-30 px-4 md:px-2 md:py-12 transition-all py-8 bg-white flex items-center justify-between"
      )}
    >
      <Link href="/">
        <h3 className="text-colorGreen font-bold text-xl md:text-xl">
          CookMaster
        </h3>
      </Link>

      <button
        className="z-50 cursor-pointer block md:hidden"
        onClick={handleClick}
      >
        {isOpen && <IoMdClose size={36} className="text-white" />}
        {!isOpen && <IoIosMenu size={36} className="text-colorGreen" />}
      </button>
      <ul
        className={clsx(
          "fixed top-0 right-0 pt-24 pb-2 px-8 w-3/4 bg-colorGreen h-screen transition-all duration-700 md:hidden grid grid-cols-1 place-items-center z-0",
          {
            "translate-x-0 ": isOpen,
            "translate-x-[300px]": !isOpen,
          }
        )}
        onClick={handleClick}
      >
        <li>
          <Form />
        </li>
        {HeaderLinks.map((val, i) => (
          <HeaderItem key={i} info={val} />
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
