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
    <div className={isHidden ? "hidden" : ""}>
     

 <Image
            src={IMAGES.logo}
            alt="Logo"
            className="md:w-[100px] w-[69px] fixed top-5 left-5 z-10 "
          />


          <div className="fixed -top-10 -left-10">
<div class="relative animate-spin w-40 h-40 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-700 animate-spin-slow">
  <div class="absolute inset-4 bg-black rounded-full"></div>
</div>
</div>



    </div>
  );
}

export default TopLeftImage;
