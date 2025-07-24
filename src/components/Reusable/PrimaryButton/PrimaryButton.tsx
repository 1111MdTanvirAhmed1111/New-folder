import { IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface GradientButtonProps {
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

const PrimaryButton: React.FC<GradientButtonProps> = ({
  label,
  icon,
  className,
}) => {
  return (
    <div
      className={twMerge(
  `
  cursor-pointer
  relative w-[300px] px-[39px] py-[14px] xl:py-[17px]
  text-lg text-neutral-10 font-Jost rounded-full font-semibold
  flex flex-col justify-center items-center gap-1
  bg-[linear-gradient(90deg,_#FF7800_0%,_#FFE601_100%)]
  transition-all duration-300
  hover:bg-[linear-gradient(90deg,_#FFE601_0%,_#FF7800_100%)]
  active:bg-[linear-gradient(90deg,_#FFE601_0%,_#FF7800_100%)]
  overflow-hidden
  `,
  className
)}

    >
      <Image
        src={IMAGES.buttonDesign}
        alt=""
        className="absolute animate-spin-slow top-0 right-0 h-full pointer-events-none"
      />

      <button className="flex flex-row justify-center items-center gap-2 z-10 d">
        {icon && <span className="size-5">{icon}</span>}
        {label}
      </button>
    </div>
  );
};

export default PrimaryButton;
