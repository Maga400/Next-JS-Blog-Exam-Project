"use client";

import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Link from "next/link";
import { useThemeStore } from "@/store";

const Blogs = () => {
  const theme = useThemeStore((state) => state.theme);
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);

  const getBlogs = async () => {
    const response = await fetch(`/api/blogs/pagination/${page}`);
    const data = await response.json();
    setBlogs(data.blogs);
  };

  useEffect(() => {
    getBlogs();
  }, [page]);

  return (
    <div
      className={`mt-[50px] ${theme ? "bg-[#181A2A] text-white" : "bg-white text-black"}`}
    >
      <div className="relative w-full">
        {blogs[0]?.thumbnail && (
          <img
            alt={blogs[0]?.thumbnail}
            className="w-full h-[450px] rounded-[20px]"
            src={blogs[0]?.thumbnail}
          />
        )}
        <div className="absolute bottom-[40px] left-[40px] right-[40px] w-full">
          {blogs[0]?.categories?.name && (
            <div className="w-fit mt-[25px] bg-[#4B6BFB] rounded-[5px]">
              <h3 className="text-[14px] px-[10px] py-[5px] text-white leading-[20px] font-medium">
                {blogs[0]?.categories?.name}
              </h3>
            </div>
          )}
          {blogs[0]?.title && (
            <p className="w-[60%] text-[36px] mt-[15px] leading-[40px] font-semibold text-white">
              {blogs[0]?.title}
            </p>
          )}
          <div className="w-fit flex flex-row mt-[25px]">
            <img
              src="https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png"
              className="w-[40px] h-[40px] rounded-[100px]"
            />
            {blogs[0]?.authors?.email && (
              <h3 className="text-[16px] leading-[24px] font-medium text-[white] ml-[10px] mt-[10px]">
                {blogs[0]?.authors?.email}
              </h3>
            )}
            {blogs[0]?.created_at && (
              <h3 className="text-[16px] leading-[24px] font-normal text-[white] ml-[30px] mt-[10px]">
                {format(new Date(blogs[0].created_at), "d MMMM yyyy")}
              </h3>
            )}
          </div>
        </div>
      </div>

      <div className="mt-[65px] grid grid-cols-3 gap-[20px]">
        {blogs?.map((blog) => (
          <Link
            href={`/blogs/${blog?.id}`}
            key={blog?.id}
            className="w-fit border-[1px] border-[#E8E8EA] rounded-[12px] p-[15px] flex flex-col justify-between"
          >
            <header>
              {blog?.thumbnail && (
                <img
                  src={blog?.thumbnail}
                  className="w-full h-[250px] object-cover rounded-[6px]"
                />
              )}
              {blog?.categories?.name && (
                <div className="w-fit mt-[25px] px-[10px] py-[5px] bg-[#4B6BFB0D]">
                  <h3 className="text-[14px] text-[#4B6BFB] leading-[20px] font-medium">
                    {blog?.categories?.name}
                  </h3>
                </div>
              )}
            </header>
            {blog?.title && (
              <main>
                <p className="w-fit text-[24px] leading-[28px] font-semibold mt-[15px]">
                  {blog?.title}
                </p>
              </main>
            )}
            <footer>
              <div className="w-fit flex flex-row mt-[20px]">
                <img
                  src="https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png"
                  className="w-[40px] h-[40px] rounded-[100px]"
                />
                <div className="ml-[10px]">
                  {blog?.authors?.email && (
                    <h3 className="text-[15px] leading-[20px] font-medium text-[#97989F]">
                      {blog?.authors?.email}
                    </h3>
                  )}
                  {blog?.created_at && (
                    <h3 className="text-[15px] leading-[20px] font-medium text-[#97989F]">
                      {format(new Date(blog?.created_at), "d MMMM yyyy")}
                    </h3>
                  )}
                </div>
              </div>
            </footer>
          </Link>
        ))}
      </div>

      <div
        onClick={() => setPage((prevState) => prevState + 1)}
        className="m-auto w-fit border-[1px] rounded-[10px] px-[30px] py-[10px] mt-[40px]"
      >
        <h2 className="text-[16px] leading-[24px] font-medium text-[#696A75]">
          Load More
        </h2>
      </div>
    </div>
  );
};

export default Blogs;
