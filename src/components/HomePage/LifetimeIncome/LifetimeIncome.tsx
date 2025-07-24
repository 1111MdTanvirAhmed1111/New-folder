/* eslint-disable react/no-unescaped-entities */
import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";

const LifetimeIncome = () => {
  return (
    <Container>
   
      <div className="rounded-2xl bg-neutral-10 relative p-3 xl:p-6 flex flex-col-reverse xl:flex-row gap-0 xl:gap-10 items-center justify-between  xl:mt-[110px]">
     

        <Image
          src={IMAGES.linnerBg2}
          alt=""
          className="absolute top-3 xl:top-6 right-3 xl:right-6"
        />
        <Image
          src={IMAGES.linnerBg2}
          alt=""
          className="absolute bottom-3 xl:bottom-6 left-3 xl:left-6 rotate-180"
        />

        <div className="absolute top-0 left-0 rounded-l-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="224"
            height="209"
            viewBox="0 0 224 209"
            fill="none"
          >
            <g clip-path="url(#clip0_3_4250)">
              <g filter="url(#filter0_f_3_4250)">
                <circle
                  cx="20.5"
                  cy="18.5"
                  r="93.5"
                  fill="#FF7800"
                  fill-opacity="0.1"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_3_4250"
                x="-174"
                y="-176"
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
                  result="effect1_foregroundBlur_3_4250"
                />
              </filter>
              <clipPath id="clip0_3_4250">
                <path
                  d="M0 16C0 7.16344 7.16344 0 16 0H224V209H0V16Z"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="p-5 xl:p-[90px]">
          <h1
            style={{
              backgroundImage:
                "linear-gradient(90deg, #4B4A4A -6.99%, #FD8721 24.9%, #FD8721 78.25%, #4B4A4A 109.86%)",
            }}
            className="text-base xl:text-[28px] font-bold text-transparent bg-clip-text font-Jost text-center xl:text-start max-w-full xl:max-w-[685px] mx-auto xl:mx-0"
          >
            Imagine LIFETIME Income Simply By Growing Your Community! You Build
            Once, and Earn FOREVER!
          </h1>
          <p className="text-sm xl:text-lg font-medium text-white font-Inter mt-3 xl:mt-5 text-center xl:text-start">
            There are no limits, no middlemen. Begin your business journey with
            C3 Crypto Global Alliance – a platform that's fully decentralized,
            transparent, and 100% secured by blockchain technology on opBNB, a
            Layer 2 blockchain by Binance.
          </p>
          <p className="text-sm font-medium text-white font-Inter mt-3 xl:mt-5 text-center xl:text-start">
            Because freedom isn't just a dream – it's a system that works for
            you.
          </p>
        </div>
        <div className="relative w-[170px] xl:w-[500px] mt-10 xl:mt-0">
          <Image
            src={IMAGES.lifetimeEarning}
            alt=""
          />
          <div className="absolute top-[20px] right-0 left-[22px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="124"
              viewBox="0 0 124 124"
              fill="none"
            >
              <g filter="url(#filter0_f_3_4241)">
                <circle cx="62" cy="62" r="18" fill="#FF7800" />
              </g>
              <circle cx="62" cy="62" r="38" fill="white" fill-opacity="0.03" />
              <defs>
                <filter
                  id="filter0_f_3_4241"
                  x="0"
                  y="0"
                  width="124"
                  height="124"
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
                    stdDeviation="22"
                    result="effect1_foregroundBlur_3_4241"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LifetimeIncome;
