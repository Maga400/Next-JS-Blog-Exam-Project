"use client";

import React, { useState } from "react";
import { useThemeStore } from "@/store";

const AddBlog = () => {
  const [blog, setBlog] = useState({});
    const theme = useThemeStore((state) => state.theme);
  

  const addBlog = async () => {
    alert(blog.title);
    alert(blog.category);
    alert(blog.thumbnail);
    alert(blog.body);
  };

  return (
    <div className={`w-full flex flex-col items-center ${theme ? "bg-[#181A2A] text-white" : "bg-white text-[#232536]"}`} >
      <h1 className="mt-[50px] text-[48px] leading-[64px] font-bold">
        Write a new blog
      </h1>
      <form className="w-fit flex flex-col items-center">
        <input
          value={blog.title}
          onChange={(e) =>
            setBlog((prevState) => ({ ...prevState, title: e.target.value }))
          }
          placeholder="Add title for blog"
          className="w-[700px] mt-[50px] px-[20px] py-[20px] text-[16px] leading-[28px] text-[#232536] border-[2px] border-gray-500 rounded-[5px]"
        />
        <div className="relative">
          <select
            value={blog.category}
            onChange={(e) =>
              setBlog((prevState) => ({
                ...prevState,
                category: e.target.value,
              }))
            }
            className="appearance-none w-[700px] text-[#232536] mt-[20px] px-[20px] py-[20px] border-[2px] border-gray-500 rounded-[5px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[16px] leading-[28px] bg-white"
            defaultValue="category"
          >
            <option value="category" disabled>
              Select category
            </option>
            <option value="option1">Option One</option>
            <option value="option2">Option Two</option>
            <option value="option3">Option Three</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 top-[20px] right-[20px] flex items-center text-gray-500">
            ▼
          </div>
        </div>

        <input
          value={blog.thumbnail}
          onChange={(e) =>
            setBlog((prevState) => ({
              ...prevState,
              thumbnail: e.target.value,
            }))
          }
          placeholder="Add thumbnail image"
          className="w-[700px] mt-[20px] pl-[20px] py-[20px] text-[16px] leading-[28px] text-[#232536] border-[2px] border-gray-500 rounded-[5px]"
        />

        <textarea
          value={blog.body}
          onChange={(e) =>
            setBlog((prevState) => ({ ...prevState, body: e.target.value }))
          }
          placeholder="Add blog body"
          className="w-[700px] h-[350px] mt-[20px] px-[30px] py-[30px] text-[16px] leading-[28px] text-[#232536] border-[2px] border-gray-500 rounded-[5px]"
        />

        <button
          onClick={addBlog}
          type="submit"
          className="w-full my-[40px] py-[20px] bg-[#FFD050] text-[#232536] text-[24px] leading-[32px] font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
