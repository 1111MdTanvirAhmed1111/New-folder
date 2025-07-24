import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import React from "react";

const bonusItems = [
  "Prime Starter Bonus",
  "Limitless Generation Reward",
  "Elite Level Rewards",
  "Personal Partner Bonus",
  "Auto Global Reward",
  "Royalty Crown Bonus",
  "Coming Soon"
];

const AboutUsHero = () => {
  return (
    <div>
      <Container>
        <div className="flex text-Jost flex-col md:flex-row items-center gap-7 mb-8 z-10">
          {/* Image Section */}
          <div className="w-full md:w-[40%]">
            <Image
              src={IMAGES.aboutUsCoin}
              alt="Global Crypto Alliance Hero Image"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-[60%]">
            <h2
              className="text-xl md:text-2xl font-semibold leading-normal text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FF7800 51.71%, #FFE601 100%)",
              }}
            >
              Introduction
            </h2>

            <p className="mt-6 md:text-lg text-xs font-medium leading-normal text-white">
              C3 Global Crypto Alliance is the leading decentralized platform of
              the world, designed to transform the landscape of blockchain
              technology through innovation, transparency, and financial
              empowerment. Built on the robust BNB Chain through opBNB network,
              it offers a secure, scalable, and globally accessible ecosystem
              that places users in full control of their digital assets.
            </p>

            <p className="mt-6 md:text-lg text-xs font-medium leading-normal text-white">
              What truly sets{" "}
              <span className="text-primary-10">
                C3 Global Crypto Alliance apart is its 6+ powerful income
                sources
              </span>
              , carefully crafted to deliver you consistent and sustainable
              financial opportunities. These include:
            </p>

            {/* Bonus Items Section */}
            <div className="mt-6 w-full bg-neutral-10 rounded-[6px] p-4">
              <div className="flex flex-wrap gap-3 justify-center items-center">
                {bonusItems.map((item, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 text-[7px] sm:text-[12px] md:text-base font-medium rounded-lg border transition-colors duration-200 ${
                      item === "Coming Soon"
                        ? "text-orange-400 border-orange-400 w-full md:w-fit"
                        : "text-white border-white hover:bg-white hover:text-black w-[45%] md:w-fit"
                    }`}
                  >
                    {item}
                  </button>
                ))}
                
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsHero;
