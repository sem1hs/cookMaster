import FoodHero from "@/components/Food/Hero/FoodHero";
import Ingredients from "@/components/Food/Ingredients/Ingredients";
import React from "react";

const Page = () => {
  return (
    <main>
      {/* Hero */}
      <FoodHero />
      {/* Ingredients */}
      <Ingredients />
    </main>
  );
};

export default Page;
