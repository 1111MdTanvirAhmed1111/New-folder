import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import PrimaryButton from "../Reusable/PrimaryButton/PrimaryButton";

const JoinUs = () => {
  return (
    <div className="">
      <div className="flex flex-col-reverse lg:flex-row gap-[30px]">
        <div className="flex flex-col items-center w-full lg:w-[50%]">
          <Image src={IMAGES.pdf} alt="" />
          {/* Card 1 */}
          <div className="bg-neutral-10 rounded-2xl relative px-4 lg:px-9 py-4 lg:py-9 h-fit ">
            <Image
              src={IMAGES.gradientBottomLeft}
              alt=""
              className="absolute bottom-0 left-0"
            />
            <Image
              src={IMAGES.gradientTopRight}
              alt=""
              className="absolute top-0 right-0"
            />
            <div className="absolute top-0 left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="224"
                height="210"
                viewBox="0 0 224 210"
                fill="none"
              >
                <g clip-path="url(#clip0_3_7975)">
                  <g filter="url(#filter0_f_3_7975)">
                    <circle
                      cx="20.5"
                      cy="18.6001"
                      r="93.5"
                      fill="#FF7800"
                      fill-opacity="0.1"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_3_7975"
                    x="-174"
                    y="-175.9"
                    width="389"
                    height="389"
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
                      result="effect1_foregroundBlur_3_7975"
                    />
                  </filter>
                  <clipPath id="clip0_3_7975">
                    <path
                      d="M0 16.1001C0 7.26354 7.16344 0.100098 16 0.100098H224V209.1H0V16.1001Z"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1
                style={{
                  backgroundImage:
                    "linear-gradient(88deg, #FFE601 1.95%, #FF7800 69.42%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="text-[28px] font-bold font-Jost text-center"
              >
                PDF
              </h1>
              <p className="text-white text-center font-Inter mt-4 text-xs lg:text-base">
                Global Crypto Alliance aims to build a safe, transparent and
                accessible digital ecosystem for all. Through our platform every
                person will to ensure a fair opportunity for financial Freedom,
                data privacy and a strong career development through blockchain
                technology.
              </p>
              <p className="text-white text-center font-Inter mt-3 lg:mt-0 text-xs lg:text-base">
                Download our official document and learn how the C3 community
                system works automatically and sustainably.
              </p>

              <PrimaryButton label="View More" className="w-full mt-8" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-neutral-10 rounded-2xl relative p-5 xl:p-9 w-full lg:w-[50%] mt-0 xl:mt-[285px] flex flex-col justify-end h-[210px] xl:h-fit">
           <Image
                      src={IMAGES.linnerBgRight}
                      alt=""
                      className="absolute top-0 right-0 h-full rounded-r-2xl"
                    />
                    <Image
                      src={IMAGES.linnerBgLeft}
                      alt=""
                      className="absolute top-0 left-0 rotate-180 h-full rounded-l-2xl"
                    />

          <div className="flex flex-col items-center justify-center">
            <Image src={ICONS.telegramIcon} alt="" className="size-[85px]" />

            <h1 className="text-white text-2xl font-semibold font-Inter text-center">
              Join Our Telegram
            </h1>

            {/* Button */}
            <div
              className="w-full p-[1px] text-white font-semibold text-xl rounded-full cursor-pointer mt-3"
              style={{
                background: "linear-gradient(90deg, #FF7800 0%, #FFE601 100%)",
              }}
            >
              <div className="bg-secondary-10 flex justify-center rounded-full relative">
                <div
                  className="absolute h-full w-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(254, 119, 1, 0.10) 0%, rgba(255, 230, 1, 0.10) 100%);",
                  }}
                ></div>

                <button
                  className="text-transparent flex flex-row items-center justify-center bg-clip-text px-[39px] py-[8px] xl:py-[17px] text-lg font-medium gap-2"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #FF7801 0%, #FFE601 100%)",
                  }}
                >
                  Click Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
