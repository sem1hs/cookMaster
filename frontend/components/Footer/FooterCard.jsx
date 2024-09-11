import React from "react";
import styles from "./FooterCard.module.css";

const FooterCard = ({ info }) => {
  return (
    <div>
      <h3
        className={`text-slate-50 text-[17px] md:text-2xl font-extrabold leading-snug mb-8 ${styles.card}`}
      >
        {info.title}
      </h3>
      {info.subtitle && (
        <div className="flex flex-col gap-4">
          {info.subtitle.map((val, i) => (
            <p key={i} className="text-slate-100 text-sm font-semibold">
              {val}
            </p>
          ))}
        </div>
      )}

      {info.icon && (
        <div className="flex flex-row gap-6">
          {info.icon[0].icon.map((val, i) => (
            <i
              key={i}
              className="translate-y-0 hover:-translate-y-2 transition-all cursor-pointer bg-[#40df58] p-2 rounded-full"
            >
              {val}
            </i>
          ))}
        </div>
      )}
    </div>
  );
};

export default FooterCard;
