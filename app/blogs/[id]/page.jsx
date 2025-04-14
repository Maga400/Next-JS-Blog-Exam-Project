"use client";

import React, { useEffect, useState } from "react";
import { blogs } from "../../../data";
import { format } from "date-fns";

const Blog = ({ params }) => {
  const { id } = React.use(params);
  const [blog, setBlog] = useState({
    id: 0,
    timestamp: "",
    thumbnail: "",
    title: "",
    body: "",
    author: {
      name: "",
      thumbnail: "",
    },
    category: "",
  });

  useEffect(() => {
    const blogWithId = blogs.find((blog) => blog.id === parseInt(id));
    setBlog(blogWithId);
  }, []);

  return (
    <div className="w-full flex flex-col px-[210px]">
      <div className="mt-[30px]">
        <div className="w-fit mt-[25px] bg-[#4B6BFB] rounded-[5px]">
          <h3 className="text-[14px] px-[10px] py-[5px] text-white leading-[20px] font-semibold">
            {blog.category}
          </h3>
        </div>
        <p className="w-fit text-[24px] leading-[28px] font-semibold mt-[15px]">
          {blog.title}
        </p>
        <div className="w-fit flex flex-row mt-[20px]">
          <img src={blog.author.thumbnail} className="w-[40px] h-[40px]" />
          <h3 className="text-[16px] leading-[24px] font-medium text-[#97989F] ml-[10px] mt-[10px]">
            {blog.author.name}
          </h3>
          <h3 className="text-[16px] leading-[24px] font-medium text-[#97989F] ml-[30px] mt-[10px]">
            {/* {format(new Date(blog.timestamp), "d MMMM yyyy")} */}
            {blog.timestamp}
          </h3>
        </div>
      </div>
      <img
        alt={blog.thumbnail}
        className="w-full h-[450px] rounded-[20px] mt-[30px]"
        src={blog.thumbnail}
      />
      <div
        id="headers"
        className="mt-[30px]"
        dangerouslySetInnerHTML={{ __html: blog.body }}
      />
    </div>
  );
};

export default Blog;
