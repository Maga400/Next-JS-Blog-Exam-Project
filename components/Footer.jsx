import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-start">
      <div className="flex flex-row justify-start">
        <div>
          <h2 className="text-[#181A2A] text-[18px] leading-[28px] font-semibold">
            About
          </h2>
          <p className="mt-[5px] text-[16px] leading-[24px] text-[#696A75] w-[280px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="flex flex-row justify-start mt-[25px]">
            <h3 className="text-[#181A2A] text-[16px] leading-[24px] font-semibold">
              Email
            </h3>
            <h4 className="text-[#181A2A] text-[16px] leading-[24px] font-normal">
              {" "}
              : info@jstemplate.net
            </h4>
          </div>
          <div className="flex flex-row justify-start">
            <h3 className="text-[#181A2A] text-[16px] leading-[24px] font-semibold">
              Phone
            </h3>
            <h4 className="text-[#181A2A] text-[16px] leading-[24px] font-normal">
              {" "}
              : 880 123 456 789
            </h4>
          </div>
        </div>

        <div className="ml-[140px]">
          <h2 className="text-[#181A2A] text-[18px] leading-[28px] font-semibold mb-[12px]">
            Quick Link
          </h2>

          <h3 className="text-[#181A2A] text-[16px] leading-[24px] mt-[8px] font-normal">
            Home
          </h3>
          <h3 className="text-[#181A2A] text-[16px] leading-[24px] mt-[8px] font-normal">
            About
          </h3>
          <h3 className="text-[#181A2A] text-[16px] leading-[24px] mt-[8px] font-normal">
            Blog
          </h3>
          <h3 className="text-[#181A2A] text-[16px] leading-[24px] mt-[8px] font-normal">
            Archived
          </h3>
          <h3 className="text-[#181A2A] text-[16px] leading-[24px] mt-[8px] font-normal">
            Author
          </h3>
          <h3 className="text-[#181A2A] text-[16px] leading-[24px] mt-[8px] font-normal">
            Contact
          </h3>
        </div>

        <div className="ml-[80px]">
          <h2 className="text-[#181A2A] text-[18px] leading-[28px] font-semibold mb-[12px]">
            Category
          </h2>

          <h3 className="text-[#181A2A] text-[16px] leading-[24px] mt-[8px] font-normal">
            Lifestyle
          </h3>
          <h3 className="text-[#181A2A] text-[16px] leading-[24px] mt-[8px] font-normal">
            Technology
          </h3>
          <h3 className="text-[#181A2A] text-[16px] leading-[24px] mt-[8px] font-normal">
            Travel
          </h3>
          <h3 className="text-[#181A2A] text-[16px] leading-[24px] mt-[8px] font-normal">
            Business
          </h3>
          <h3 className="text-[#181A2A] text-[16px] leading-[24px] mt-[8px] font-normal">
            Economy
          </h3>
          <h3 className="text-[#181A2A] text-[16px] leading-[24px] mt-[8px] font-normal">
            Sports
          </h3>
        </div>
      </div>
      <div className="flex-col mt-[65px] w-full rounded border-[1px] border-zinc-400"></div>
      <div className="flex flex-row justify-between mt-[30px]">
        <div className="flex flex-row justify-start">
          <img src="/icons/logo.svg" className="w-[50px] h-[50px] " />
          <div>
            <div className="flex flex-row justify-start">
              <h3 className="text-[#141624] ml-[5px] text-[20px] leading-[28px]">
                Meta
              </h3>
              <h2 className="text-[#141624] text-[20px] leading-[28px] font-extrabold">
                Blog
              </h2>
            </div>
            <h3 className="text-[#141624] ml-[5px] text-[16px] leading-[24px]">
              © JS Template 2023. All Rights Reserved.
            </h3>
          </div>
        </div>

        <div className="flex flex-row justify-start mt-[15px]">
          <h3 className="text-[#3B3C4A] text-[16px] leading-[24px]">
            Terms of Use
          </h3>
          <h3 className="text-[#3B3C4A] text-[16px] leading-[24px] ml-[30px]">
            Privacy Policy
          </h3>
          <h3 className="text-[#3B3C4A] text-[16px] leading-[24px] ml-[30px]">
            Cookie Policy
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
