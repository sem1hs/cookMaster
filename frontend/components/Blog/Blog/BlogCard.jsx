import Image from "next/image";
import React from "react";

const BlogCard = ({ info }) => {
  const shortenedContent = info?.content.slice(0, 160).concat("...");
  const formattedDate = info?.date.slice(0, 10);
  return (
    <div className="bg-white px-6 py-8 flex flex-col md:flex-row gap-12 shadow-md rounded-md cursor-pointer">
      {/* Image */}
      <div>
        <Image
          src={info?.foodimage}
          width={300}
          height={300}
          alt="Blog Photo"
          className="rounded-md shadow-md"
        />
      </div>
      {/* Text */}
      <div className="flex flex-col pt-16">
        <h1 className="text-textColorGray text-[17px] md:text-2xl font-extrabold leading-snug w-full">
          {info?.title}
        </h1>
        <p className="text-colorGray mt-2 font-normal max-w-2xl mx-auto mb-12">
          {shortenedContent}
        </p>
      </div>
      {/* Author Detail */}
      <div className="flex items-end w-max ml-auto gap-4">
        <div className="max-w-[48px] max-h-[48px] rounded-full overflow-hidden">
          <Image src={info?.image} width={48} height={48} alt="Author Photo" />
        </div>
        <div className="flex flex-col">
          <span className="text-textColorGray text-[14px] font-semibold">
            {info?.name}
          </span>
          <span className="text-textColorGray text-[8px] md:text-[13px] inline-block ml-auto w-max">
            {formattedDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
