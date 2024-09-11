"use client";
import { searchFoods, getIngredients } from "@/redux/cookSlice";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FoodHero = () => {
  const foodName = usePathname().split("/")[2];
  const foods = useSelector((state) => state.cook.searchedFoods.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      searchFoods(`http://localhost:5000/api/foods/getFood/${foodName}`)
    );
  }, [foodName]);

  return (
    <section
      className={`bg-heroImage md:pt-[200px] pb-[120px] py-20 bg-cover bg-no-repeat`}
    >
      <div className="mx-auto max-w-2xl md:max-w-screen-2xl flex flex-col md:flex-row items-center gap-16 px-4 md:px-32">
        {/* Photo */}
        <div>
          <Image
            src={foods[0]?.image}
            width={600}
            height={600}
            alt="Food Photo"
            className="rounded-md shadow-md"
          />
        </div>
        {/* Text */}
        <div className="px-4 md:px-8 py-2 max-w-xl md:max-w-screen-sm">
          <h1 className="text-textColorGray text-[17px] md:text-5xl font-extrabold leading-snug text-center md:text-left pb-3">
            {foods[0]?.title}
          </h1>
          <p className="text-colorGray mt-2 font-semibold text-base text-center md:text-left">
            {foods[0]?.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoodHero;
