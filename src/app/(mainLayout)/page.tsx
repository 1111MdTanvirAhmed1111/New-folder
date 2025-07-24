import FutureRoadMap from "@/components/FutureRoadMap/FutureRoadMap";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import AccountPreviewMode from "@/components/HomePage/AccountPreviewMode/AccountPreviewMode";
import Hero from "@/components/HomePage/Hero/Hero";
import LifetimeIncome from "@/components/HomePage/LifetimeIncome/LifetimeIncome";
import PlatformOffers from "@/components/HomePage/PlatformOffers/PlatformOffers";
import MonthlyTopEarners from "@/components/HomePage/MonthlyTopEarners/MonthlyTopEarners";
import AlltimeTopEarners from "@/components/HomePage/AlltimeTopEarners/AlltimeTopEarners";
import NeedHelp from "@/components/HomePage/NeedHelp/NeedHelp";
import UserActivity from "@/components/HomePage/UserActivity/UserActivity";
  
export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <AccountPreviewMode />



      
      <LifetimeIncome />
      <PlatformOffers />
      <MonthlyTopEarners />
      <AlltimeTopEarners />
      <UserActivity />
      <FutureRoadMap />
      <NeedHelp />
    </div>
  );
}
