import Container from "@/components/Reusable/Container/Container";
import React from "react";
import ReusableHeading from "@/components/Reusable/Heading/Heading";
import MonthlyLeaderBoard from "./MonthlyLeaderBoard";
import PrimaryButton from "@/components/Reusable/PrimaryButton/PrimaryButton";

const MonthlyTopEarners = () => {
  return (
    <div className="mt-6 xl:mt-12 z-10 relative">
      <Container>
        <div className="flex justify-center mt-4 mb-8">
          <ReusableHeading highlight="Monthly Top Earners" />
        </div>

        <MonthlyLeaderBoard />
        <PrimaryButton label="View More" className="mt-2 w-full" />
      </Container>
    </div>
  );
};

export default MonthlyTopEarners;
