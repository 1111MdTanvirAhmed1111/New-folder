import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import PrimaryButton from "@/components/Reusable/PrimaryButton/PrimaryButton";
import Image from "next/image";

const NeedHelp = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse lg:flex-row gap-0 lg:gap-10 mt-6 xl:mt-[100px]">
        <div className="flex flex-col items-center w-full lg:w-[50%]">
          {/* Card 1 */}
          <div className="bg-neutral-10 rounded-2xl relative py-[79px] px-9 xl:px-[45px] h-fit ">
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
                className="text-xl md:text-[28px] font-bold font-Jost text-center max-w-[412px] mx-auto"
              >
                Need Help With Using The Platform?
              </h1>
              <p className="text-white text-sm md:text-base text-center font-Inter mt-4 max-w-[412px] mx-auto">
                Get qualified support from Global Crypto Alliance experts via
                online chat
              </p>

              <PrimaryButton
                label="Contact our support team"
                className="w-full mt-8 text-sm md:text-lg"
              />
            </div>
          </div>
        </div>

        <Image src={IMAGES.needHelp} alt="" />
      </div>
    </Container>
  );
};

export default NeedHelp;
