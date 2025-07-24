"use client"
import { ICONS, IMAGES } from "@/assets";
import LeaderboardTable from "../Tables/LeadrerBoardTble";

const leaderboardData = [
  { position: 1, name: "Marco Jems", id: "481029", avatar: IMAGES.user, profit: "$942", medel : ICONS.medel },
  { position: 2, name: "Marco Jems", id: "481045", avatar: IMAGES.user, profit: "$657",  medel : ICONS.silverMedel },
  { position: 3, name: "Marco Jems", id: "481029", avatar: IMAGES.user, profit: "$542",  medel : ICONS.medel2 },
  { position: 4, name: "Marco Jems", id: "481045", avatar: IMAGES.user, profit: "$763" },
  { position: 5, name: "Marco Jems", id: "481029", avatar: IMAGES.user, profit: "$843" },
];

export default function MonthlyLeaderBoard() {

  return (
    <>
      {/* Mobile (< md) */}
      <div className="block md:hidden">
        <LeaderboardTable
          data={leaderboardData}
          onJoinClick={(user) => console.log("Join clicked", user)}
        />
      </div>

      {/* Desktop (>= md) */}
      <div className="hidden md:block">
        <LeaderboardTable
          data={leaderboardData}
          onJoinClick={(user) => console.log("Join clicked", user)}
        />
      </div>
    </>
  );
}
