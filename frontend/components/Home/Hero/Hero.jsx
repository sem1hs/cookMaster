import React from "react";
import pizzaPhoto from "@/public/food/pizza-photo.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className={`bg-heroImage md:pt-[200px] pb-[120px] py-20 bg-cover bg-no-repeat`}
    >
      <div className="mx-auto max-w-[360px] md:max-w-screen-2xl flex flex-col lg:flex-row items-center gap-16 md:px-16 lg:px-32">
        {/* Content */}
        <div>
          {/* Text */}
          <div className="px-4 md:px-8 py-2 max-w-xl md:max-w-screen-md">
            <span className="text-textColorGray mx-auto md:mx-0 w-max opacity-90 font-semibold mb-2 block">
              Lezzetli & Sağlıklı
            </span>
            <h1 className="text-textColorGray text-[17px] md:text-5xl font-extrabold leading-snug text-center md:text-left pb-3">
              Lezzetin Yolculuğuna Hoş Geldiniz
            </h1>
            <p className="text-colorGray mt-8 font-semibold text-base text-center md:text-left">
              Mutfağınıza ilham getirecek tariflerle dolu bir dünyaya adım atın.
              İster yeni başlayan, ister deneyimli bir şef olun, her damak
              zevkine uygun, özenle seçilmiş yemek tariflerimizle sofralarınıza
              renk katın. Lezzetli ve yaratıcı yemekleri keşfetmeye hazır
              mısınız?
            </p>
          </div>
          {/* Buttons */}
        </div>
        {/* Image */}
        <div className="md:w-[400px]">
          <Image
            src={pizzaPhoto}
            alt="Hero Photo"
            className="rounded-md shadow-md w-[250px] md:w-full"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
