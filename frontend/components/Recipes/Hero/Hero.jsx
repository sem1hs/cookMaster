import React from "react";

const Hero = () => {
  return (
    <section
      className={`bg-heroImage md:pt-[150px] pb-[120px] py-20 bg-cover bg-no-repeat`}
    >
      <div className="mx-auto max-w-2xl md:max-w-screen-2xl md:px-32">
        <h1 className="text-textColorGray text-[17px] md:text-5xl text-center md:text-left font-extrabold leading-snug">
          Tarifler
        </h1>
        <p className="text-colorGray mt-8 font-semibold max-w-80 mx-auto md:mx-0 md:max-w-2xl text-base text-center md:text-left">
          Tariflerimiz, mutfağınızda lezzetli ve pratik yemekler hazırlamanız
          için size ilham verir. Her tarif, adım adım açıklamalar ve detaylı
          malzeme listeleri ile özenle hazırlanmıştır. Amacımız, hem deneyimli
          aşçılara hem de mutfakta yeni olanlara kolaylıkla uygulayabilecekleri
          yaratıcı ve lezzetli tarifler sunmaktır
        </p>
      </div>
    </section>
  );
};

export default Hero;
