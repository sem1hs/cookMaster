"use client";
import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import FeedBackCard from "../FeedBack/FeedBackCard";

import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/redux/userSlice";

const Slider = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users.data) || [];

  useEffect(() => {
    dispatch(getUser("http://localhost:5000/api/users/getAllUsers"));
  }, []);
  return (
    <div className="max-w-[300px] md:max-w-screen-md mx-auto py-12">
      <Swiper navigation={true} loop={true} modules={[Navigation]}>
        {users.map((val, i) => (
          <SwiperSlide key={i}>
            <FeedBackCard key={i} info={val} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
