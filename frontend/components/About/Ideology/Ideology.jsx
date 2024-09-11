import React from "react";
import { ideologyItem } from "@/lib/consts/IdeologyItem";
import IdeologyCard from "./IdeologyCard";

const Ideology = () => {
  return (
    <section className="py-20 bg-waveImage bg-cover bg-no-repeat relative z-10">
      <div className="mx-auto max-w-2xl px-4 md:max-w-screen-2xl md:px-32">
        <h1 className="text-colorGreen text-[17px] md:text-5xl font-extrabold leading-snug text-center pb-3 w-full">
          İdeolojimiz
        </h1>
        <p className="text-colorGray mt-4 font-normal text-base text-center max-w-2xl mx-auto mb-12">
          Yemek yapmanın bir sanat olduğuna inanıyoruz ve bu sanatı herkesle
          buluşturmak için buradayız. Tazelik, yenilikçilik ve erişilebilirlik
          temel değerlerimizdir.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6">
          {ideologyItem.map((val, i) => (
            <IdeologyCard key={i} info={val} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ideology;
