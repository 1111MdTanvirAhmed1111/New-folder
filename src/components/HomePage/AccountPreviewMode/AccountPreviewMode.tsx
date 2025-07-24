import { GRADIENT_BG } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import PrimaryButton from "@/components/Reusable/PrimaryButton/PrimaryButton";
import Image from "next/image";
import React from "react";

const AccountPreviewMode = () => {
  return (
    <div className="bg-secondary-20 pt-6 border-b-8 border-black xl:mt-[90px] relative">
      <div className="absolute top-0 left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="154"
          height="164"
          viewBox="0 0 154 164"
          fill="none"
        >
          <g filter="url(#filter0_f_3_4185)">
            <circle cx="20" cy="30" r="33" fill="#FF7800" />
          </g>
          <defs>
            <filter
              id="filter0_f_3_4185"
              x="-114"
              y="-104"
              width="268"
              height="268"
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
                stdDeviation="50.5"
                result="effect1_foregroundBlur_3_4185"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <Container>
        <div className="relative w-full overflow-hidden">
          {/* Gradient background as absolute layer */}
          <div className="absolute -top-10 -left-10 h-[570px] z-0 pointer-events-none" />

          <div className="flex flex-col gap-6 items-center px-2 py-5 md:px-18 z-10 md:py-8 ">
            <h2 className="text-white text-center font-Jost text-xl md:text-5xl font-bold">
              Account Preview Mode
            </h2>
            <div className="flex flex-col md:flex-row w-full gap-3 md:gap-8">
              <div className="bg-secondary-10 rounded-2xl w-full py-4 px-3">
                <p className="font-Inter text-base xl:text-[22px] font-semibold text-center text-neutral-20">
                  Enter User ID Number
                </p>
                <div className="flex flex-col gap-5 justify-center mt-4">
                  <input
                    type="text"
                    placeholder="Example:97463"
                    className="rounded-full bg-neutral-10 w-full py-[13px] border text-center border-secondary-30 text-neutral-20 focus:outline-none focus:border-primary-10 transition duration-300"
                  />
                  <div
                    className="w-full p-[1px] text-white font-semibold text-xl rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #FF7800 0%, #FFE601 100%)",
                    }}
                  >
                    <div className="bg-secondary-10 flex justify-center rounded-full relative">
                      <div
                        className="absolute h-full w-full rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(254, 119, 1, 0.10) 0%, rgba(255, 230, 1, 0.10) 100%)",
                        }}
                      ></div>

                      <button
                        className="text-transparent bg-clip-text px-[39px] py-3 xl:py-[17px] text-lg font-medium"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, #FF7801 0%, #FFE601 100%)",
                        }}
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col items-center w-full bg-secondary-20 border border-primary-10 rounded-2xl ">
                <Image
                  src={GRADIENT_BG.accountPreview}
                  alt=""
                  className="absolute w-full h-full object-cover rounded-2xl"
                />
                <div className="py-4 px-3 h-full w-full flex flex-col gap-6 justify-between">
                  <p
                    className="text-transparent bg-clip-text text-center font-Jost text-[14px] xl:text-[22px] font-bold "
                    style={{
                      backgroundImage:
                        " linear-gradient(90deg, #FF7800 57.15%, #FFE601 108.01%)",
                    }}
                  >
                    View a Random Account
                  </p>
                  <PrimaryButton label="Check Demo" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AccountPreviewMode;
