import Container from "@/components/Reusable/Container/Container";
import TutorialCard from "@/components/WatchTutorial/TutorialCard";
import React from "react";

const WatchTutorial = () => {
  return (
    <div>
      <Container>
        <div className="my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full m-2">
          <TutorialCard title="Wallet Tutorial" description="Wallet Tutorial" />
          <TutorialCard title="Article" description="Article" />
        </div>
        </div>
        
      </Container>
    </div>
  );
};

export default WatchTutorial;
