import { IMAGES } from "@/assets";
import Image from "next/image";

const UserStats = () => {
  const platformOffers = [
    {
      title: "Members Total",
      description: <>876,32,658</>,
      image: IMAGES.members,
    },
    {
      title: "Members Received",
      description: (
        <>
          876 326 258.64 <span className="text-primary-10">BNB</span>
        </>
      ),
      image: IMAGES.membersReceived,
    },
    {
      title: "Members Received",
      description: (
        <>
          876 326 258.64 <span className="text-primary-10">USDT</span>
        </>
      ),
      image: IMAGES.membersTransfered,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] xl:gap-[30px] mt-12 w-full">
      {platformOffers.map((item, index) => (
        <div
          key={index}
          className="bg-neutral-10 rounded-t-2xl rounded-b-3xl border-b-2 xl:border-b-8 border-primary-10 p-6 flex flex-col font-Inter h-[209px] md:h-[260px] relative"
        >
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
            className="size-[100px] md:size-[116px] mx-auto"
          />
          <p className="text-white text-sm md:text-lg text-center">
            {item.title}
          </p>
          <h1 className="text-white text-2xl md:text-[32px] font-medium text-center mt-1 md:mt-2">
            {item.description}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default UserStats;
