import Image from "next/image";
import React from "react";

const IngredientsCard = ({ info }) => {
  console.log(info);
  return (
    <div className="shadow-md rounded-md px-2 py-4 bg-white cursor-pointer translate-y-0 hover:-translate-y-2 transition-all flex items-center justify-between">
      <Image src={info?.image} width={32} height={32} alt="Ingredient photo" />
      <h3 className="text-textColorGray text-[17px] md:text-2xl font-extrabold leading-snug text-center md:text-left mx-auto w-max">
        {info?.name}
      </h3>
    </div>
  );
};

export default IngredientsCard;
