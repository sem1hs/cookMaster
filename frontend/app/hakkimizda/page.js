import AboutHero from "@/components/About/Hero/AboutHero";
import Ideology from "@/components/About/Ideology/Ideology";
import Responsibility from "@/components/About/Responsibility/Responsibility";
import React from "react";

const Page = () => {
  return (
    <main>
      {/* About */}
      <AboutHero />
      {/* Ideology */}
      <Ideology />
      {/* Responsibility */}
      <Responsibility />
    </main>
  );
};

export default Page;
