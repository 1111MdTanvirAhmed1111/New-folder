import Container from "@/components/Reusable/Container/Container";
import UserStats from "./UserStats";
import { GRADIENT_BG, IMAGES } from "@/assets";
import Image from "next/image";
import PrimaryButton from "@/components/Reusable/PrimaryButton/PrimaryButton";

const UserActivity = () => {
  const leaderboardData = [
    {
      position: 1,
      time: "26 Min",
      program: "Starter",
      id: "481029",
      avatar: IMAGES.user,
      profit: "+00 BNB",
      isNew: true,
    },
    {
      position: 2,
      time: "26 Min",
      program: "Royalty",
      id: "481045",
      avatar: IMAGES.user,
      profit: "+10 BNB",
      isViewProfileDisabled: true,
    },
    {
      position: 1,
      time: "26 Min",
      program: "Partner",
      id: "481029",
      avatar: IMAGES.user,
      profit: "+10 BNB",
    },
    {
      position: 2,
      time: "26 Min",
      program: "Genaration",
      id: "481045",
      avatar: IMAGES.user,
      profit: "+10 BNB",
    },
    {
      position: 1,
      time: "26 Min",
      program: "Level",
      id: "481029",
      avatar: IMAGES.user,
      profit: "+10 BNB",
    },
    {
      position: 2,
      time: "26 Min",
      program: "Global",
      id: "481045",
      avatar: IMAGES.user,
      profit: "+10 BNB",
    },
    {
      position: 2,
      time: "26 Min",
      program: "Bonus",
      id: "481045",
      avatar: IMAGES.user,
      profit: "+10 BNB",
      isUserIdDisabled: true,
    },
  ];
  return (
    <Container>
      <div>
        <UserStats />

        <div className="bg-neutral-10 px-3 py-[10px] rounded-t-2xl rounded-b-3xl border-b-2 xl:border-b-8 border-primary-10 relative flex flex-col items-center mt-[30px]">
          <Image
            src={GRADIENT_BG.gradientCircle}
            alt=""
            className="absolute top-0 left-0 rounded-tl-2xl"
          />
          <h1 className="text-white text-2xl md:text-[30px] font-medium text-center">
            User Activity
          </h1>

          <div className="w-full max-w-[1000px] mx-auto mt-10">
            {/* Table Header */}
            <div className="flex justify-between text-xs md:text-lg text-neutral-40 mb-7 font-medium">
              <span className="w-fit mr-7">User ID</span>
              <span className="w-fit mr-5">Profit</span>
              <span className="w-fit text-center">Time</span>
              <span className="w-fit text-center">Program</span>
              <span className="w-fit text-right">User Profile</span>
            </div>

            {/* Table Rows */}
            <div className="flex flex-col gap-2 md:gap-4">
              {leaderboardData.map((user, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center gap-4 text-white text-[10px] xl:text-lg font-semibold text-center"
                >
                  {/* Position */}
                  <div className={`w-[60px] xl:w-fit px-2 py-[6px] rounded-md relative ${user?.isUserIdDisabled ? "bg-neutral-55 text-neutral-10" : "bg-primary-10 text-white"}`}>
                    {user?.isNew && (
                      <div className="bg-[#2AB500] rounded-[25px] px-2 py-[1px] text-white text-[10px] text-center absolute -top-[10px] left-0 right-0 w-fit mx-auto">
                        New
                      </div>
                    )}
                    {user.id}
                  </div>

                  {/* Profit */}
                  <span className="w-fit">{user.profit}</span>

                  {/* Time */}
                  <span className="w-fit text-nowrap">{user.time}</span>

                  {/* Program */}
                  <span className="w-fit">{user.program}</span>

                  {/* Button */}
                  {user?.isViewProfileDisabled ? (
                    <button className="rounded-[25px] bg-neutral-55 px-3 py-2 text-neutral-10 w-fit">
                      View Profile
                    </button>
                  ) : (
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
                  )}
                </div>
              ))}
            </div>
          </div>
          <PrimaryButton
            label="View More"
            className="w-full max-w-[1000px] mx-auto mt-8"
          />
        </div>
      </div>
    </Container>
  );
};

export default UserActivity;
