"use client";
import React, { useEffect } from "react";
import FoodCard from "@/components/Home/Recommended/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "@/redux/cookSlice";

const Recipes = () => {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.cook.foods.data) || [];

  useEffect(() => {
    dispatch(getFoods("http://localhost:5000/api/foods/getAllFood"));
  }, []);
  return (
    <section
      className={`bg-waveImage md:pt-[50px] pb-[120px] py-20 bg-cover bg-no-repeat`}
    >
      <div className="mx-auto max-w-2xl md:max-w-screen-2xl md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-0">
          {foods.map((val, i) => (
            <FoodCard info={val} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
