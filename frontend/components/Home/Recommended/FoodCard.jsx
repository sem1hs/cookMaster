"use client";
import Spinner from "@/components/Spinner/Spinner";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./FoodCard.module.css";
import Link from "next/link";

const FoodCard = ({ info }) => {
  const { isLoading } = useSelector((state) => state.cook);
  return (
    <div className="shadow-md w-max px-6 pt-4 pb-4 bg-white rounded-md z-10 translate-y-0 hover:-translate-y-2 transition-all cursor-pointer max-w-full min-h-full">
      {isLoading && <Spinner />}
      {!isLoading && (
        <Link href={`/yemek/${info?.title}`}>
          {/* Image */}
          <div className="w-[240px] max-h-[160px] overflow-hidden rounded-md mx-auto md:mx-0">
            <Image
              src={info?.image}
              alt="Recommended card"
              className="rounded-md"
              width={240}
              height={240}
            />
          </div>
          {/* Title */}
          <h3 className="text-textColorGray text-[17px] md:text-2xl font-extrabold leading-snug text-center md:text-left mt-2">
            {info?.title}
          </h3>
          {/* Content */}
          <p className="text-colorGray mt-2 font-normal text-base text-center md:text-left max-w-2xl mx-auto">
            {info?.content}
          </p>
        </Link>
      )}
    </div>
  );
};

export default FoodCard;
