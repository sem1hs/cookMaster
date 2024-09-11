import React from "react";
import specialsItem from "@/lib/consts/SpecialsItem";
import SpecialsCard from "./SpecialsCard";

const Specials = () => {
  return (
    <section className="py-20 bg-heroImage bg-cover bg-no-repeat relative z-10">
      <div className="mx-auto max-w-[360px] md:max-w-screen-2xl md:px-32">
        <h1 className="text-colorGreen text-[17px] md:text-5xl font-extrabold leading-snug text-center pb-3 w-full">
          Neden Biz ?
        </h1>
        <p className="text-colorGray mt-4 font-normal text-base text-center max-w-2xl mx-auto">
          Lezzetli yemeklerin arkasındaki sırları keşfetmek, en kaliteli
          malzemeleri seçmek ve unutulmaz yemek deneyimleri sunmak bizim
          tutkumuz. Yemek kültürüne olan sevgimizle, her tarifimizi özenle
          hazırlıyor ve her adımda kaliteyi ön planda tutuyoruz.
        </p>
        {/* Bg Effect */}
        <div className="hidden md:block bg-dotImage w-[300px] h-[400px] absolute z-0 md:top-[200px] md:left-[260px]"></div>
        {/* Specials Cards */}
        <div className="mx-auto mt-12 md:mt-32 md:px-20 grid grid-cols-1 lg:flex lg:flex-col gap-8 lg:gap-16">
          {specialsItem.map((val, i) => (
            <SpecialsCard key={i} info={val} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
