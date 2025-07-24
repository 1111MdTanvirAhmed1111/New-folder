'use client'
import Image from "next/image";
import { IMAGES } from "@/assets";
import React, { useEffect, useState } from "react";

function TopLeftImage() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isSmallDevice = window.innerWidth < 768; // Tailwind's md: breakpoint
      if (isSmallDevice) {
        if (window.scrollY > 1600) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      } else {
        setIsHidden(false); // Always show on medium and up
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Also run once on mount in case already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Image
        src={IMAGES.layoutBg}
        alt="Background"
        className={`${isHidden ? "hidden" : ""} 
          -top-18 -left-20 
          md:top-0 md:left-0 
          w-[286px] md:w-[356px] 
          animate-wiggleSpin10s 
          origin-top-left object-cover 
          z-0 fixed`}
      />
    </div>
  );
}

export default TopLeftImage;
