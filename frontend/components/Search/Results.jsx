"use client";
import React, { useEffect } from "react";
import FoodCard from "../Home/Recommended/FoodCard";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { searchFoods } from "@/redux/cookSlice";
import Button from "../Home/Button/Button";

const Results = () => {
  const params = useSearchParams();
  const query = params.get("query");
  const foods = useSelector((state) => state.cook.searchedFoods.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchFoods(`http://localhost:5000/api/foods/getFood/${query}`));
  }, [query]);

  return (
    <section
      className={`bg-waveImage md:pt-[100px] pb-[120px] py-20 bg-cover bg-no-repeat`}
    >
      <div className="mx-auto max-w-2xl md:max-w-screen-2xl px-4 md:px-48">
        <div className="grid grid-cols-1 md:grid-cols-4">
          {foods.map((val, i) => (
            <FoodCard key={i} info={val} />
          ))}
        </div>
        <Button>Daha Fazla Göster</Button>
      </div>
    </section>
  );
};

export default Results;
