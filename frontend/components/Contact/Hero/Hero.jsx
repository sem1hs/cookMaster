import React from "react";
import ContactForm from "../Form/ContactForm";

const Hero = () => {
  return (
    <section
      className={`bg-heroImage md:pt-[150px] pb-[120px] py-20 bg-cover bg-no-repeat`}
    >
      <div className="mx-auto max-w-2xl md:max-w-screen-2xl flex flex-col items-center md:flex-row gap-16 px-4 md:px-32">
        <div>
          <h1 className="text-textColorGray text-[17px] md:text-5xl font-extrabold leading-snug text-center md:text-left pb-3">
            İletişime Geçin
          </h1>
          <p
            className={`text-colorGray mt-8 font-semibold text-base md:max-w-screen-lg text-center md:text-left `}
          >
            Bize her türlü soru, öneri veya iş birliği talepleriniz için
            ulaşabilirsiniz! Yemek tariflerimizle ilgili görüşlerinizi
            paylaşmak, yeni projeler hakkında bilgi almak ya da bizimle çalışmak
            isterseniz, size yardımcı olmaktan memnuniyet duyarız.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Hero;
