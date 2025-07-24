/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";

interface UserData {
  position: number;
  name: string;
  id: string;
  avatar: string;
  profit: string;
  medel? : any;
}

interface LeaderboardProps {
  data: UserData[];
  onJoinClick?: (user: UserData) => void;
}

const LeaderboardTable: React.FC<LeaderboardProps> = ({
  data,
  onJoinClick,
}) => {
  return (
    <div className="w-full">
      {/* Table Header */}
      <div className="flex justify-between text-xs md:text-sm text-neutral-40 mb-4 px-6">
        <span className="w-fit">Position</span>
        <span className="w-fit mr-[52px]">User</span>
        <span className="w-fit text-center">Profit</span>
        <span className="w-fit text-right">Visit Profile</span>
      </div>

      {/* Table Rows */}
      <div className="flex flex-col gap-2 md:gap-4">
        {data.map((user, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-neutral-50 rounded-full px-4 md:px-7 py-2 gap-4"
          >
            {/* Position */}
            <span className="text-white text-xs sm:text-[12px] md:text-base font-semibold w-fit">
              0{user.position}
            </span>

            {/* User Details */}
            <div className="flex items-center gap-3 flex-1 ">
              <Image
                src={user.avatar}
                alt={user.name}
                width={36}
                height={36}
                className="rounded-full size-5 md:size-9"
              />
              <div>
               <div className="relative">
                 <p className="text-white text-xs sm:text-[12px] md:text-base font-normal flex items-center">
                  {user.name}
                </p>
                 {
                  user?.medel &&
                  <Image
                src={user?.medel}
                alt="Medal"
                className="w-[9px] md:w-[17px] h-4 md:h-[24px] absolute -right-3 top-1"
              />
                 }
               </div>
                <p className="text-neutral-40 text-xs sm:text-[12px] md:text-base">
                  ID: {user.id}
                </p>
              </div>
             
            </div>

            {/* Profit */}
            <span className="text-white text-xs md:text-base font-semibold text-center w-fit">
              {user.profit}
            </span>

            {/* Button */}
            <div className="flex justify-end w-fit">
              <div
                className="flex items-center justify-center p-[1px] w-fit rounded-[25px]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FF7800 0%, #FFE601 100%)",
                }}
              >
                <div className="bg-neutral-10 rounded-[25px] h-full fle items-center justify-center">
                  <button
                    onClick={() => onJoinClick?.(user)}
                    className="px-4 py-[9px] text-white rounded-[25px] text-sm font-medium text-[8px] sm:text-[12px] md:text-base text-nowrap h-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, rgba(255, 120, 0, 0.20) 49.52%, rgba(255, 230, 1, 0.20) 100%)",
                    }}
                  >
                   View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardTable;
