import React from "react";

const AboutHero = () => {
  return (
    <section
      className={`bg-heroImage md:pt-[150px] pb-[120px] py-20 bg-cover bg-no-repeat`}
    >
      <div className="mx-auto max-w-2xl px-4 md:max-w-screen-2xl md:px-32">
        <h1 className="text-textColorGray text-[17px] md:text-5xl font-extrabold leading-snug text-center md:text-left pb-3">
          Hakkımızda
        </h1>
        <p
          className={`text-colorGray mt-8 font-semibold text-base md:max-w-screen-lg text-center md:text-left `}
        >
          Yemek tutkunuza ilham vermek için buradayız! Tariflerimizle,
          mutfağınızı lezzet dolu bir deneyim alanına dönüştürmeyi hedefliyoruz.
          En taze malzemelerle hazırlanan pratik ve yaratıcı yemek önerileriyle,
          her seviyeden aşçının mutfakta kendine güvenle yer almasını
          sağlıyoruz. Lezzetin peşinden koşanlar için, sürekli güncellenen
          tariflerimizle yemek yapmayı eğlenceli ve keyifli hale getiriyoruz.
          Bizimle, mutfakta yeni tatlar keşfetmeye hazır olun!
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
