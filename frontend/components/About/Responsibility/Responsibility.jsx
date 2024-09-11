import Image from "next/image";
import React from "react";

const Responsibility = () => {
  return (
    <section className="py-20 bg-waveImage bg-cover bg-no-repeat relative z-10">
      <div className="mx-auto max-w-2xl md:max-w-screen-2xl flex flex-col md:flex-row items-center gap-16 px-4 md:px-32">
        <div className="px-4 md:px-8 py-2 max-w-xl md:max-w-screen-md">
          <h1 className="text-textColorGray text-[17px] md:text-5xl font-extrabold leading-snug text-center md:text-left pb-3">
            Sosyal Sorumluluklarımız
          </h1>
          <p
            className={`text-colorGray mt-8 font-semibold text-base md:max-w-screen-lg text-center md:text-left `}
          >
            Yemek, sadece lezzet değil; aynı zamanda bir paylaşım ve dayanışma
            aracı. Biz de bu bilinçle topluma katkı sağlamayı amaçlıyor, gıda
            israfını önlemek ve sağlıklı beslenme alışkanlıklarını teşvik etmek
            için çeşitli projelere destek veriyoruz. Amacımız, sürdürülebilir
            bir mutfak kültürü oluşturmak ve yemekle dünyayı daha iyi bir yer
            haline getirmek.
          </p>
        </div>
        <div className="md:w-[400px] z-10">
          <Image
            src="/about/about-photo.jpg"
            width={400}
            height={400}
            alt="About Photo"
            className="rounded-md shadow-md w-[250px] md:h-full md:w-full"
          ></Image>
        </div>
        {/* Bg Effect */}
        <div className="hidden md:block bg-dotImage w-[300px] h-[500px] absolute z-0 top-[-30px] left-[1370px]"></div>
      </div>
    </section>
  );
};

export default Responsibility;
