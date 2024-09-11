import Link from "next/link";
import React from "react";
import styles from "./HeaderItem.module.css";

const HeaderItem = ({ info }) => {
  return (
    <li>
      <Link href={info.href} className={`${styles.linkItem}`}>
        <span
          className={`text-white md:text-colorGray font-bold text-base md:text-xs lg:text-base md:hover:text-colorGreen transition-all`}
        >
          {info.title}
        </span>
      </Link>
    </li>
  );
};

export default HeaderItem;
