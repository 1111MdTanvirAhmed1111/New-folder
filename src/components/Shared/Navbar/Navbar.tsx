
import { ICONS, IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";

import clsx from "clsx";

const Navbar = () => {


  return (
    <div
      className={clsx(
        "w-full z-50 transition-all duration-300",
      )}
    >
      <Container>
        <div className={`flex justify-between items-center py-5 `}>
      
          <div
            className="md:w-[100px] w-[69px]"
          />
          <div
            className="w-fit md:w-[220px] p-[1px] text-white font-semibold text-xl rounded-full"
            style={{
              background: "linear-gradient(90deg, #FF7800 0%, #FFE601 100%)",
            }}
          >
            <div className="bg-secondary-10 flex justify-center rounded-full relative">
              <div
                className="absolute h-full w-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(254, 119, 1, 0.10) 0%, rgba(255, 230, 1, 0.10) 100%)",
                }}
              ></div>

              <button
                className="text-transparent flex flex-row items-center justify-center bg-clip-text p-4 sm:text-lg text-sm font-medium gap-2"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FF7801 0%, #FFE601 100%)",
                }}
              >
                <Image
                  src={ICONS.wallet}
                  alt="wallet"
                  className="size-[14px] md:size-5"
                />
                <span>Connect Wallet</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
