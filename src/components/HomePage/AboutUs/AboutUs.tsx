"use client"
import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import ReusableHeading from "@/components/Reusable/Heading/Heading";
import PrimaryButton from "@/components/Reusable/PrimaryButton/PrimaryButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlurIn } from '@/components/Reusable/Container/BlurIn';
import { TextFade } from '@/components/Reusable/Container/TextFade';

const AboutUs = () => {
  return (
    <div>
      <Container>
        <div className="bg-gradient-future-roadmap backdrop-blur-[24px] flex flex-col-reverse md:flex-row w-full rounded-2xl mt-6 xl:mt-[90px] px-[6px] md:px-17 pb-6 xl:pb-0 h-fit xl:h-[511px]">
          <div className="w-full md:w-[60%] flex flex-col justify-center items-center md:items-baseline">
            
            <ReusableHeading  highlight="About Global Crypto Alliance" />
         <TextFade direction="down">
             <p className="text-sm xl:text-lg font-Inter text-center md:text-start  text-white font-medium leading-[1.6] mt-4">
              Global Crypto Alliance is the leading decentralized platform of
              the world, designed to transform the landscape of blockchain
              technology through innovation, transparency, and financial
              empowerment. Built on the robust BNB Chain through opbnb network
              and seamlessly integrated with USDT, it offers a secure, scalable,
              and globally accessible ecosystem that places users in full
              control of their digital assets.
            </p>
         </TextFade>
            <Link href={"/about-us"}>
              <PrimaryButton
                label="View More"
                className="xl:w-[320px] mt-[10px] animate-pulse"
              />
            </Link>
          </div>

          <div className="w-full overflow-hidden md:w-[40%] ">
            <BlurIn>
            <Image
              width={500}
              height={200}
              src={IMAGES.coinImage}
              alt="Global Crypto Alliance Hero Image"
              className="w-full h-full object-contain animate-wiggleSpin5s"
            />
            </BlurIn>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
