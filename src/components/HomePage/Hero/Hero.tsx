import { ICONS, IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import { StaggeredFade } from "@/components/Reusable/Heading/StaggeredFade";
import PrimaryButton from "@/components/Reusable/PrimaryButton/PrimaryButton";
import Image from "next/image";
import { BlurIn } from '@/components/Reusable/Container/BlurIn';
import { TextFade } from '@/components/Reusable/Container/TextFade';

const Hero = () => {
  return (
    <Container>
      <div className="relative w-full h-full xl:mt-[180px]">
        {/* Blurred background layer */}
        <Image
          src={IMAGES.heroBg}
          alt="Blurred Background"
          fill
          className="object-fit hidden md:block h-full absolute inset-0 z-0"
        />
        {/* <Image
          src={IMAGES.heroBgSmall}
          alt="Blurred Background"
          fill
          className=" md:hidden h-full absolute inset-0 z-0"
        /> */}

        {/* Content above the blurred background */}
        {/* <div className="bg-gradient-future-roadmap p-[1px] backdrop-blur-[24px] rounded-2xl"> */}
        <div className="flex w-full md:w-[60%] bg-gradient-future-roadmap backdrop-blur-[24px] border border-primary-10/60 flex-col pb-5 xl:pb-0 md:py-10 md:pl-21 justify-center items-center md:items-start px-2 rounded-2xl relative">
          <div className="size-[114px] rounded-full bg-gradient-hero-circle blur-[22px] absolute top-20 z-0"></div>
          <Image
            src={IMAGES.companyNameLogo}
            alt="Global Crypto Alliance"
            className="w-[211px] h-[143px] z-10 mt-[30px] float-up-down"
          />

          <p className="text-xl text-white leading-[26px] font-semibold font-Jost mt-9">
              <StaggeredFade text="Welcome To" />
          </p>
        <BlurIn>
            <Image
            src={IMAGES.logoName}
            alt="Global Crypto Alliance"
            className="z-10 mt-3 w-[253px]"
          />
        </BlurIn>
        
        <TextFade  direction="down">
          <p className="mt-2 font-Inter text-sm md:text-lg text-center md:text-start font-medium leading-[22px] text-white text-shadow-2xs">
            Unique and Revolutionary Business Model of 21st Century
            SUSTAINABILITY-SCALABILITY TRANSPARENCY & SECURITY Limitless
            Opportunities.
          </p>
          </TextFade>
          <div className="flex flex-col-reverse lg:flex-row gap-3 items-center md:items-baseline w-full mt-3">
            <PrimaryButton
              label="Watch Tutorial"
              icon={<Image src={ICONS.gMeet} alt=" " className="size-5" />}
              className="xl:w-[320px]"
            />

            <div
              className="w-[300px] p-[1px] text-white font-semibold text-xl rounded-full cursor-pointer z-10"
              style={{
                background: "linear-gradient(90deg, #FF7800 0%, #FFE601 100%)",
              }}
            >
              <div className="bg-secondary-10 flex justify-center rounded-full relative group overflow-hidden">
                <div
                  className="absolute h-full w-full rounded-full pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(254, 119, 1, 0.10) 0%, rgba(255, 230, 1, 0.10) 100%)",
                  }}
                ></div>

                <button
                  className={`
        text-transparent 
        flex flex-row items-center justify-center 
        bg-clip-text 
        px-[39px] py-[14px] xl:py-[17px] 
        text-lg font-medium gap-2 
        transition-all duration-300 
        bg-[linear-gradient(90deg,_#FF7801_0%,_#FFE601_100%)] 
        group-hover:bg-[linear-gradient(90deg,_#E66F00_0%,_#D4C101_100%)]
      `}
                >
                  <Image src={ICONS.wallet} alt=" " className="size-5" />
                  <span>Connect Wallet</span>
                </button>
              </div>
            </div>

            <Image
              src={IMAGES.heroGradient2}
              alt=""
              className="absolute right-0 bottom-0 rounded-br-2xl z-0"
            />
            <Image
              src={IMAGES.linnerBgRight}
              alt=""
              className="absolute top-0 right-0 rounded-tr-2xl"
            />
          </div>
        </div>
        {/* </div> */}
      </div>
    </Container>
  );
};

export default Hero;
