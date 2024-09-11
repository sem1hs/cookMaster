import Image from "next/image";
import React from "react";

const FeedBackCard = ({ info }) => {
  return (
    <div className="px-12 grid grid-cols-1 md:grid-cols-3 place-items-center ">
      <picture className="rounded-full max-h-[64px] max-w-[64px]  md:max-h-[180px] md:max-w-[180px] overflow-hidden mb-6 md:mb-0">
        <Image src={info?.image} width={180} height={180} alt="People" />
      </picture>
      <div className="md:col-span-2">
        <h3 className="text-textColorGray text-[17px] md:text-2xl font-extrabold leading-snug mb-2 text-center md:text-left">
          {info?.name}
        </h3>
        <p className="text-colorGray font-normal text-base max-w-sm md:text-left text-center">
          {info?.content}
        </p>
      </div>
    </div>
  );
};

export default FeedBackCard;
