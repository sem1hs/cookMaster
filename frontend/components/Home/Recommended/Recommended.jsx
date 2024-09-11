"use client";
import React, { useEffect } from "react";
import FoodCard from "./FoodCard";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "@/redux/cookSlice";

const Recommended = () => {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.cook.foods.data) || [];

  useEffect(() => {
    dispatch(getFoods("http://localhost:5000/api/foods/getAllFood"));
  }, []);
  return (
    <section
      className={`bg-waveImage md:pt-[200px] pb-[120px] py-20 bg-cover bg-no-repeat`}
    >
      <div className="mx-auto max-w-[360px] md:max-w-screen-2xl md:px-32">
        <h1 className="text-colorGreen text-[17px] md:text-5xl font-extrabold leading-snug text-center pb-3 w-full">
          Tavsiye Edilen Yemekler
        </h1>
        <p className="text-colorGray mt-4 font-normal text-base text-center max-w-2xl mx-auto">
          Mutfağımızın en sevilen ve en çok tercih edilen lezzetlerini sizler
          için özenle seçtik. Her biri damak zevkinize hitap eden bu özel
          tarifler, hem lezzet hem de sunumuyla sofralarınıza şıklık katacak.
        </p>
        {/* Foods */}
        <div className="grid grid-cols-1 lg:grid-cols-4 mt-16 gap-8 relative px-6 md:px-0">
          {/* Bg Effect */}
          <div className="hidden lg:block bg-dotImage w-[300px] h-[400px] absolute z-0 -top-[250px] -left-[100px]"></div>
          {foods.map((val, i) => (
            <FoodCard key={i} info={val} />
          ))}
        </div>
        <Button>Daha Fazla Göster</Button>
      </div>
    </section>
  );
};

export default Recommended;
