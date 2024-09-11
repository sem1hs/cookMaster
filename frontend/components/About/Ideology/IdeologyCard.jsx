import React from "react";

const IdeologyCard = ({ info }) => {
  return (
    <div className="shadow-md rounded-md flex px-4 py-8 gap-8 md:gap-4 bg-white">
      <i className="block w-max h-max bg-[#40df58] p-2 rounded-full">
        {info.icon}
      </i>
      <div>
        <h3 className="text-textColorGray text-[17px] md:text-4xl font-extrabold leading-snug md:text-left pb-3">
          {info.title}
        </h3>
        <span className="text-colorGray mt-4 font-normal text-base text-left max-w-xl mx-auto">
          {info.subtitle}
        </span>
      </div>
    </div>
  );
};

export default IdeologyCard;
