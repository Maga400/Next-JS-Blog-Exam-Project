import React from "react";
import { blogs } from "../../data";
import { format } from "date-fns";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="mt-[50px]">
      <div className="relative w-full">
        <img
          alt={blogs[0].thumbnail}
          className="w-full h-[450px] rounded-[20px]"
          src={blogs[0].thumbnail}
        />
        <div className="absolute bottom-[40px] left-[40px] right-[40px] w-full">
          <div className="w-fit mt-[25px] bg-[#4B6BFB] rounded-[5px]">
            <h3 className="text-[14px] px-[10px] py-[5px] text-white leading-[20px] font-medium">
              {blogs[0].category}
            </h3>
          </div>
          <p className="w-[60%] text-[36px] mt-[15px] leading-[40px] font-semibold text-white">
            {blogs[0].title}
          </p>
          <div className="w-fit flex flex-row mt-[25px]">
            <img
              src={blogs[0].author.thumbnail}
              className="w-[40px] h-[40px]"
            />
            <h3 className="text-[16px] leading-[24px] font-medium text-[white] ml-[10px] mt-[10px]">
              {blogs[0].author.name}
            </h3>
            <h3 className="text-[16px] leading-[24px] font-normal text-[white] ml-[30px] mt-[10px]">
              {format(new Date(blogs[0].timestamp), "d MMMM yyyy")}
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-[65px] grid grid-cols-3 gap-[20px]">
        {blogs.map((blog) => (
          <Link href={`/blogs/${blog.id}`}
            key={blog.id}
            className="w-fit border-[1px] border-[#E8E8EA] rounded-[12px] p-[15px] flex flex-col justify-between"
          >
            <header>
              <img
                src={blog.thumbnail}
                className="w-full h-[250px] object-cover rounded-[6px]"
              />
              <div className="w-fit mt-[25px] px-[10px] py-[5px] bg-[#4B6BFB0D]">
                <h3 className="text-[14px] text-[#4B6BFB] leading-[20px] font-medium">
                  {blog.category}
                </h3>
              </div>
            </header>
            <main>
              <p className="w-fit text-[24px] leading-[28px] font-semibold mt-[15px]">
                {blog.title}
              </p>
            </main>
            <footer>
              <div className="w-fit flex flex-row mt-[20px]">
                <img
                  src={blog.author.thumbnail}
                  className="w-[40px] h-[40px]"
                />
                <h3 className="text-[16px] leading-[24px] font-medium text-[#97989F] ml-[10px] mt-[10px]">
                  {blog.author.name}
                </h3>
                <h3 className="text-[16px] leading-[24px] font-medium text-[#97989F] ml-[30px] mt-[10px]">
                  {format(new Date(blog.timestamp), "d MMMM yyyy")}
                </h3>
              </div>
            </footer>
          </Link>
        ))}
      </div>

      <div className="m-auto w-fit border-[1px] rounded-[10px] px-[30px] py-[10px] mt-[40px]">
        <h2 className="text-[16px] leading-[24px] font-medium text-[#696A75]">
          Load More
        </h2>
      </div>
    </div>
  );
};

export default Blogs;
