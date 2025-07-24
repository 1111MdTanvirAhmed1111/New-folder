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
      profit: "+00 BNB",
      isNew: true,
    },
    {
      position: 2,
      time: "26 Min",
      program: "Royalty",
      id: "481045",
      avatar: IMAGES.user,
      profit: "+10 BNB",
      isViewProfileDisabled: true,
    },
    {
      position: 1,
      time: "26 Min",
      program: "Partner",
      id: "481029",
      avatar: IMAGES.user,
      profit: "+10 BNB",
    },
    {
      position: 2,
      time: "26 Min",
      program: "Genaration",
      id: "481045",
      avatar: IMAGES.user,
      profit: "+10 BNB",
    },
    {
      position: 1,
      time: "26 Min",
      program: "Level",
      id: "481029",
      avatar: IMAGES.user,
      profit: "+10 BNB",
    },
    {
      position: 2,
      time: "26 Min",
      program: "Global",
      id: "481045",
      avatar: IMAGES.user,
      profit: "+10 BNB",
    },
    {
      position: 2,
      time: "26 Min",
      program: "Bonus",
      id: "481045",
      avatar: IMAGES.user,
      profit: "+10 BNB",
      isViewProfileDisabled: true,
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

          <div className="w-full max-w-[1000px] mx-auto mt-10 scale-[0.9] -translate-x-3">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 text-xs md:text-lg text-neutral-40 mb-7 font-medium w-full">
              <span className="text-center">User ID</span>
              <span className="text-center">Profit</span>
              <span className="text-center">Time</span>
              <span className="text-center">Program</span>
              <span className="text-center">User Profile</span>
            </div>

            {/* Table Rows */}
            <div className="flex flex-col gap-2 md:gap-4 w-full">
              {leaderboardData.map((user, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 gap-4 items-center text-white text-[10px] xl:text-lg font-semibold w-full"
                >
                  {/* User ID */}
                  <div
                    className={`px-2 py-[6px] rounded-md relative mx-auto text-center ${
                      user?.isUserIdDisabled
                        ? "bg-neutral-55 text-neutral-10"
                        : "bg-primary-10 text-white"
                    }`}
                    style={{ minWidth: "50px" }}
                  >
                    {user?.isNew && (
                      <div className="bg-[#2AB500] rounded-[25px] px-2 py-[1px] text-white text-[10px] text-center absolute -top-[10px] left-0 right-0 mx-auto w-fit">
                        New
                      </div>
                    )}
                    {user.id}
                  </div>

                  {/* Profit */}
                  <span className="text-center">{user.profit}</span>

                  {/* Time */}
                  <span className="text-center">{user.time}</span>

                  {/* Program */}
                  <span className="text-center">{user.program}</span>

                  {/* View Profile Button */}
{user?.isViewProfileDisabled ? (
  <button
    className="rounded-[25px] bg-neutral-55 text-neutral-10 text-xs md:text-sm max-w-[130px] min-w-[100px] w-full h-[38px] inline-flex justify-center items-center
    overflow-hidden whitespace-nowrap text-ellipsis box-border px-3 py-[9px]"
    title="View Profile"
  >
    View Profile
  </button>
) : (
  <div
    className="flex justify-center max-w-[130px] min-w-[100px] w-full h-[38px] rounded-[25px] p-[1px]"
    style={{
      backgroundImage:
        "linear-gradient(90deg, #FF7800 0%, #FFE601 100%)",
      boxSizing: "border-box",
    }}
  >
    <div className="bg-neutral-10 rounded-[25px] h-full flex items-center justify-center w-full">
      <button
        className="text-white  text-xs sm:text-sm md:text-base font-medium text-nowrap h-full w-full rounded-[25px] overflow-hidden whitespace-nowrap text-ellipsis px-3 py-[9px] box-border"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255, 120, 0, 0.20) 49.52%, rgba(255, 230, 1, 0.20) 100%)",
        }}
        title="View Profile"
      >
        View Profile
      </button>
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
