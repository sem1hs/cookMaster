import clsx from "clsx";
import Image from "next/image";
import React from "react";
import styles from "./SpecialsCard.module.css";

const SpecialsCard = ({ info }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 z-10">
      {/* Photo */}
      <div
        className={clsx(
          `w-max mx-auto md:mx-0 md:w-[480px] ${styles.card} relative overflow-hidden`,
          {
            "md:order-1 ": info.position === "right",
          }
        )}
      >
        <Image
          src={info.photo}
          alt="Specials card"
          className="rounded-md shadow-md w-[300px] lg:w-full"
        />
      </div>
      {/* Content */}
      <div>
        <h3 className="text-textColorGray text-[17px] md:text-4xl font-extrabold leading-snug text-center md:text-left pb-3">
          {info.title}
        </h3>
        <p className="text-colorGray mt-4 font-normal text-base text-center md:text-left max-w-xl mx-auto">
          {info.content}
        </p>
      </div>
    </div>
  );
};

export default SpecialsCard;
