"use client";
import React, { useEffect } from "react";
import BlogCard from "./BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "@/redux/blogSlice";

const Blogs = () => {
  const blogs = useSelector((state) => state.blog.blogs.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs(`http://localhost:5000/api/blogs/getAllBlog`));
  }, []);
  return (
    <div className="flex flex-col gap-14 mt-12 px-6 md:px-0">
      {blogs.map((val, i) => (
        <BlogCard key={i} info={val} />
      ))}
    </div>
  );
};

export default Blogs;
