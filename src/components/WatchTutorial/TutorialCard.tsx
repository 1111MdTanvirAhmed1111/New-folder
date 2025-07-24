import { IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";

interface TutorialCardProps {
  title: string;
  description: string;
}

const TutorialCard: React.FC<TutorialCardProps> = ({ title, description }) => {
  return (
    <div className="relative w-full h-full">
      {/* Blurred background layer */}
      <Image
        src={IMAGES.tutorialcardBg}
        alt="Blurred Background"
        fill
        className="object-fit absolute w-full inset-0 z-0 rounded-lg"
      />

      {/* Content above the blurred background */}
      <div className="relative z-10 px-10 pb-7 pt-5 md:pt-6">
        <div className="py-3 gap-6 flex flex-col justify-between items-center w-full">
          <div>
            <p className="text-white font-semibold">{title}</p>
          </div>
          <div
            className="flex w-full h-[256px] justify-center items-center px-4 py-2 rounded-lg"
            style={{
              backgroundImage: "linear-gradient(132deg, #FF7800 32.18%, #FFE601 100%)",
            }}
          >
            <p className="text-black font-medium">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
