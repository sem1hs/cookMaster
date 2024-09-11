"use client";
import { getIngredients } from "@/redux/cookSlice";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IngredientsCard from "./IngredientsCard";

const Ingredients = () => {
  const foodName = usePathname().split("/")[2];
  const ingredients = useSelector((state) => state.cook.ingredients.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getIngredients(
        `http://localhost:5000/api/foods/getIngredients/${foodName}`
      )
    );
  }, [foodName]);

  return (
    <section className="py-20 bg-waveImage bg-cover bg-no-repeat relative z-10">
      <div className="mx-auto max-w-2xl md:max-w-screen-2xl px-4 md:px-32">
        <h1 className="text-colorGreen text-[17px] md:text-5xl font-extrabold leading-snug text-center pb-3 w-full">
          İçerisindekiler
        </h1>
        <p className="text-colorGray mt-4 font-normal text-base text-center max-w-2xl mx-auto mb-12">
          Her tarifimizde, kullanılan malzemelerin tazeliğine ve kalitesine
          büyük önem veriyoruz. İçindekiler listemiz, en sağlıklı ve lezzetli
          sonuçları almanızı sağlamak için özenle seçilmiştir.
        </p>
        <div className="max-w-screen-md mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Ingredients */}
          {ingredients.map((val, i) => (
            <IngredientsCard key={i} info={val} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
