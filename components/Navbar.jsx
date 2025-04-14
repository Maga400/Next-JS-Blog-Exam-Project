"use client";

import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row justify-start">
        <img src="/icons/union.svg" className="w-[35px] h-[35px]" />
        <h3 className="text-[#141624] mt-[4px] ml-[9px] text-[20px]">Meta</h3>
        <h2 className="text-[#141624] mt-[4px] ml-[2px] text-[20px] font-bold">
          Blog
        </h2>
      </div>
      <div className="flex flex-row justify-start text-[#3B3C4A] pt-[5px]">
        <Link href="/blogs" className="font-normal text-[16px] leading-[24px]">
          Home
        </Link>
        <Link
          href="/blogs/add-blog"
          className="font-normal text-[16px] leading-[24px] ml-[40px]"
        >
          Write a Blog
        </Link>
        <Link
          href="/blogs/my-blogs"
          className="font-normal text-[16px] leading-[24px] ml-[40px]"
        >
          My Blogs
        </Link>
        <p
          onClick={() => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
          className="font-normal text-[16px] leading-[24px] ml-[40px]"
        >
          Contact
        </p>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row relative ">
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            className="w-[180px] text-[14px] bg-[#F4F4F5] py-[8px] pl-[10px] pr-[25px] rounded-sm"
            placeholder="Search..."
          />
          <img
            src="/icons/search.svg"
            className="absolute right-[5px] top-[10px] w-[18px] h-[18px]"
          />
        </div>

        <button className="ml-[20px] py-[5px] px-[40px] bg-blue-600 text-white text-[16px] font-semibold rounded-md">
          Login
        </button>

        <div className="ml-[20px] pt-[3px]">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
