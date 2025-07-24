import { IMAGES } from "@/assets";
import Container from "../Reusable/Container/Container";
import RoadMapCard from "./RoadMapCard";
import Image from "next/image";
import JoinUs from "./JoinUs";

const FutureRoadMap = () => {
  const cardRow1Details = [
    {
      sl: "01",
      text: "NEW MATRIX PROGRAM",
    },
    {
      sl: "02",
      text: "SINGLE LEG PROGRAM",
    },
    {
      sl: "03",
      text: "GLOBAL  AUTOPOOL BONUS 2",
    },
  ];
  const cardRow2Details = [
    {
      sl: "04",
      text: "C3 COIN LAUNCH",
    },
    {
      sl: "05",
      text: "STAKING & MINING",
    },
    {
      sl: "06",
      text: "NFT & GAMING PROGRAM",
    },
  ];
  const cardRow3Details = [
    {
      sl: "07",
      text: "DAILY GAME EARNING",
    },
    {
      sl: "08",
      text: "EXCHANGER",
    },
    {
      sl: "09",
      text: "AI TRADING",
    },
  ];
  const cardRow4Details = [
    {
      sl: "10",
      text: "E-COMMERCE PLATFORM",
    },
    {
      sl: "11",
      text: "SOCIAL MEDIA & OTHER APPS",
    },
    {
      sl: "12",
      text: "WEB 3.0 PROJECTS",
    },
  ];

  const cardRow1DetailsMobile = [
    {
      sl: "01",
      text: "NEW MATRIX PROGRAM",
    },
    {
      sl: "02",
      text: "SINGLE LEG PROGRAM",
    },
  ];
  const cardRow2DetailsMobile = [
    {
      sl: "03",
      text: "GLOBAL  AUTOPOOL BONUS 2",
    },
    {
      sl: "04",
      text: "C3 COIN LAUNCH",
    },
  ];
  const cardRow3DetailsMobile = [
    {
      sl: "05",
      text: "STAKING & MINING",
    },
    {
      sl: "06",
      text: "NFT & GAMING PROGRAM",
    },
  ];
  const cardRow4DetailsMobile = [
    {
      sl: "07",
      text: "DAILY GAME EARNING",
    },
    {
      sl: "08",
      text: "EXCHANGER",
    },
  ];
  const cardRow5DetailsMobile = [
    {
      sl: "09",
      text: "AI TRADING",
    },
    {
      sl: "10",
      text: "E-COMMERCE PLATFORM",
    },
  ];
  const cardRow6DetailsMobile = [
    {
      sl: "11",
      text: "SOCIAL MEDIA & OTHER APPS",
    },
    {
      sl: "12",
      text: "WEB 3.0 PROJECTS",
    },
  ];
  return (
    <div className="relative mt-7 xl:mt-[100px]">
      <div className="absolute top-[700px] xl:top-[500px] -left-10 xl:-left-40 size-[171px] xl:size-[542px] rounded-full bg-gradient-to-r from-[#FF7800] to-[#FFE601] p-7 xl:p-16 flex items-center justify-center">
        <div className="relative w-full h-full rounded-full bg-neutral-10"></div>
      </div>
      <Container>
        <JoinUs />
        <div className="backdrop-blur-[24px] h-[1000px] xl:h-[1500px] bg-gradient-future-roadmap border border-primary-15 rounded-2xl mt-7 xl:mt-24">
          <div className="relative z-10 flex flex-col-reverse md:flex-row justify-between backdrop-blur-md rounded-2xl items-center w-full">
            <div className="flex flex-col w-full">
              <h1
                className="text-xl md:text-[48px] text-white font-Jost leading-[52px] font-bold text-center mt-9"
                style={{
                  backgroundImage:
                    "linear-gradient(88deg, #FFE601 1.95%, #FF7800 69.42%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Future Road Map
              </h1>

              <div className="relative w-full mt-10 xl:mt-28">
                <div className="hidden xl:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // width="1093"
                    height="934"
                    viewBox="0 0 1093 934"
                    fill="none"
                    className="w-full"
                  >
                    <path
                      d="M0 0.600098H1092.5V311.6H2.5V622.6H1092.5V933.407H0"
                      stroke="#FF7800"
                      stroke-dasharray="5 5"
                    />
                  </svg>
                </div>

                <div className="block xl:hidden ml-1">
                  <Image src={IMAGES.lineBg} alt="" className="" />
                </div>

                {/* For mobile */}
                <div className="grid grid-cols-2 gap-5 xl:hidden absolute top-5 left-5">
                  {cardRow1DetailsMobile?.map((item) => (
                    <RoadMapCard key={item?.sl} item={item} />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-5 xl:hidden absolute top-[167px] left-5">
                  {cardRow2DetailsMobile?.map((item) => (
                    <RoadMapCard key={item?.sl} item={item} />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-5 xl:hidden absolute top-[313px] left-5">
                  {cardRow3DetailsMobile?.map((item) => (
                    <RoadMapCard key={item?.sl} item={item} />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-5 xl:hidden absolute bottom-[200px] left-5">
                  {cardRow4DetailsMobile?.map((item) => (
                    <RoadMapCard key={item?.sl} item={item} />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-5 xl:hidden absolute bottom-[54px] left-5">
                  {cardRow5DetailsMobile?.map((item) => (
                    <RoadMapCard key={item?.sl} item={item} />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-5 xl:hidden absolute -bottom-[92px] left-5">
                  {cardRow6DetailsMobile?.map((item) => (
                    <RoadMapCard key={item?.sl} item={item} />
                  ))}
                </div>

                {/* For desktop */}
                <div className="hidden xl:grid grid-cols-3 gap-[30px] absolute -top-11 left-20 2xl:left-[175px]">
                  {cardRow1Details?.map((item) => (
                    <RoadMapCard key={item?.sl} item={item} />
                  ))}
                </div>

                <div className="hidden xl:grid grid-cols-3 gap-[30px] absolute top-[266px] right-20 2xl:right-[175px]">
                  {cardRow2Details?.map((item) => (
                    <RoadMapCard key={item?.sl} item={item} />
                  ))}
                </div>

                <div className="hidden xl:grid grid-cols-3 gap-[30px] absolute bottom-[87px] left-20 2xl:left-[175px]">
                  {cardRow3Details?.map((item) => (
                    <RoadMapCard key={item?.sl} item={item} />
                  ))}
                </div>

                <div className="hidden xl:grid grid-cols-3 gap-[30px] absolute -bottom-[224px] right-20 2xl:right-[175px]">
                  {cardRow4Details?.map((item) => (
                    <RoadMapCard key={item?.sl} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FutureRoadMap;
