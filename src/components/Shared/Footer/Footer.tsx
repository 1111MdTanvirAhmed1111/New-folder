import { ICONS, IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      icon: ICONS.telegram,
      href: "",
    },
    {
      icon: ICONS.youtube,
      href: "",
    },
    {
      icon: ICONS.facebook,
      href: "",
    },
    {
      icon: ICONS.whatsapp,
      href: "",
    },
  ];
  return (
    <div className="bg-neutral-10 pt-[56px] font-Inter mt-7 xl:mt-[100px]">
      <Container>
        <div className="flex flex-col items-center justify-center mb-[29px] md:mb-[22px]">
          <Image src={IMAGES.logo} alt="" className="w-[88px] md:w-[200px]" />
          <div className="text-white text-lg flex items-center gap-1 mt-3 md:mt-6">
            <Link href={"/terms-and-conditions"} className="hover:underline">
              Terms & Conditions
            </Link>
            <p>-</p>
            <Link href={"/privacy-policy"} className="hover:underline">
              Privacy Policy
            </Link>
          </div>

          <div className="flex items-center gap-3 mt-5 md:mt-7">
            {socialLinks?.map((item, index) => (
              <a key={index} href={item?.href}>
                <Image src={item?.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </Container>
      <div className="shadow-footer py-5">
        <p className="font-Jost text-sm xl:text-lg text-white text-center">
          ©copyright2025@Globalcryptoallaiance.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
