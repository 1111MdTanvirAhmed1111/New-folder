/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const RoadMapCard = ({ item }: { item: any }) => {
  return (
    <div className="relative flex flex-col w-[136px] xl:w-[307px] ">
      <div className="hidden xl:flex flex-col items-center justify-center relative">
        <h1 className="text-primary-10 text-base xl:text-2xl font-bold font-Jost leading-6 text-center absolute top-0">
          {item?.sl}
        </h1>
        {/* Circle */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 90 91"
          fill="none"
          className="size-[90px]"
        >
          <g filter="url(#filter0_f_3_8055)">
            <circle cx="45" cy="45.1001" r="15" fill="#FF7800" />
          </g>
          <circle cx="45" cy="45.1001" r="11.25" fill="#FF7800" />
          <defs>
            <filter
              id="filter0_f_3_8055"
              x="0"
              y="0.100098"
              width="90"
              height="90"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3_8055"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="flex xl:hidden flex-col items-center justify-center absolute bottom-[68px] left-0 right-0">
        <h1 className="text-primary-10 text-base xl:text-2xl font-bold font-Jost leading-6 text-center absolute top-0">
          {item?.sl}
        </h1>
        {/* Circle */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 90 91"
          fill="none"
          className="size-14 xl:size-[90px]"
        >
          <g filter="url(#filter0_f_3_8055)">
            <circle cx="45" cy="45.1001" r="15" fill="#FF7800" />
          </g>
          <circle cx="45" cy="45.1001" r="11.25" fill="#FF7800" />
          <defs>
            <filter
              id="filter0_f_3_8055"
              x="0"
              y="0.100098"
              width="90"
              height="90"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_3_8055"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="bg-neutral-10 rounded-t-2xl rounded-b-3xl border-b-2 xl:border-b-8 border-primary-10 px-[18px] xl:px-[40px] py-5 xl:py-[50px] h-[80px] xl:h-[178px]">
        <h1 className="text-white text-xs xl:text-[22px] font-bold font-Inter leading-4 xl:leading-8 text-center">
          {item?.text}
        </h1>
      </div>
    </div>
  );
};

export default RoadMapCard;
