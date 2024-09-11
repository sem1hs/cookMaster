import React from "react";
import Slider from "../Slider/Slider";

const FeedBack = () => {
  return (
    <section
      className={`bg-heroImage md:pt-[100px] pb-[120px] py-20 bg-cover bg-no-repeat`}
    >
      <div className="mx-auto max-w-2xl md:max-w-screen-2xl md:px-32">
        <h1 className="text-colorGreen text-[17px] md:text-5xl font-extrabold leading-snug text-center pb-3 w-full">
          Sizlerin Yorumları
        </h1>
        <p className="text-colorGray mt-4 font-normal text-base text-center max-w-2xl mx-auto">
          Sizlerden gelen her yorum, bizim için büyük bir değer taşıyor.
          Yaptığımız her yemeğin arkasında, sizlerin memnuniyeti ve geri
          bildirimleri yatıyor. Lezzetlerimizi deneyimledikten sonra
          paylaştığınız düşünceler bize güç katıyor.
        </p>
        {/* FeedBack Carts */}
        <div className="mt-8">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
