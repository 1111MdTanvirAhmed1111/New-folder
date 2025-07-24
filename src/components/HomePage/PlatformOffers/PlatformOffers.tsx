/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ICONS, IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { Navigation } from "swiper/modules";

import "swiper/css";

const PlatformOffers = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const platformOffers = [
    { title: "PRIME STARTER BONUS", image: IMAGES.primeStarter },
    { title: "PERSONAL PARTNER BOUNDS", image: IMAGES.personalPartner },
    {
      title: "LIMITELESS GENERATION REWARDS",
      image: IMAGES.limitlessGeneration,
    },
    { title: "PRIME STARTER BONUS", image: IMAGES.primeStarter2 },
    { title: "ELITE LEVEL REAWARDS", image: IMAGES.eliteLevel },
    { title: "ROYALTY CROWN BOUNDS", image: IMAGES.royaltyBrown },
  ];

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center mt-6 xl:mt-[100px] z-10 relative">
        <h2 className="text-xl md:text-[40px] text-center font-bold max-w-[530px] mx-auto font-Inter">
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FF7800 43.75%, #FFE601 100%)",
            }}
          >
            Our Platform Offers <span className="text-white">6</span> Types Of Income Strems
          </span>
        </h2>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 gap-[30px] mt-12 w-full">
          {platformOffers.map((item, index) => (
            <div
              key={`desktop-${index}`}
              className="bg-neutral-10 rounded-t-2xl rounded-b-3xl border-b-2 xl:border-b-8 border-primary-10 p-6 h-[217px] flex flex-col gap-4"
            >
              <Image src={item.image} alt="" className="w-[122px] mx-auto" />
              <h1 className="text-white text-xl font-semibold font-Jost leading-4 xl:leading-8 text-center">
                {item.title}
              </h1>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden w-full mt-8">
          {/* Top Numbered Pagination */}
          <div className="flex justify-between gap-4 mb-4 bg-neutral-45 p-4 rounded-[30px]">
            {platformOffers.map((_, idx) => (
              <button
                key={idx}
                className={`w-6 h-6 flex items-center justify-center font-bold ${
                  activeIndex === idx
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-white"
                }`}
                onClick={() => {
                  setActiveIndex(idx);
                  swiperRef.current?.slideTo(idx);
                }}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          {/* Carousel with Custom Arrows */}
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={handleSlideChange}
            >
              {platformOffers.map((item, index) => (
                <SwiperSlide key={`mobile-${index}`}>
                  <div className="bg-neutral-10 rounded-t-2xl rounded-b-3xl border-b-4 border-primary-10 p-6 h-[206px] lg:h-[250px] flex flex-col gap-4 mx-auto max-w-full xl:max-w-[280px] relative">
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
                    <Image
                      src={item.image}
                      alt=""
                      className="w-[100px] mx-auto h-full"
                    />
                    <h1 className="text-white text-lg font-semibold font-Jost leading-5 text-center">
                      {item.title}
                    </h1>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Left Arrow */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 border border-primary-10 bg-neutral-10 size-[34px] rounded-full flex items-center justify-center z-10 text-primary-10"
            >
              <Image src={ICONS.arrowRight} alt="" className="rotate-180" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 border border-primary-10 bg-neutral-10 size-[34px] rounded-full flex items-center justify-center z-10 text-primary-10"
            >
               <Image src={ICONS.arrowRight} alt="" className="rotate-360" />
            </button>
          </div>
        </div>

        <Image src={IMAGES.rocket} alt="" className="mt-12 md:mt-[100px]" />
      </div>
    </Container>
  );
};

export default PlatformOffers;
