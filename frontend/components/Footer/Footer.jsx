import React from "react";
import { footerItem } from "@/lib/consts/FooterItem";
import FooterCard from "./FooterCard";

const Footer = () => {
  return (
    <footer className="py-12 bg-colorGreen bg-specialsImage bg-cover bg-no-repeat relative z-10">
      <div className="max-w-xs md:max-w-screen-xl mx-auto rounded-xl px-6 md:py-12 grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-4">
        {footerItem.map((val, i) => (
          <FooterCard key={i} info={val} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
