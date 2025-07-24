
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import TopLeftImage from './../../components/HomePage/TopEffects/TopLeftImage';


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SmoothScroll>
    <div className="relative bg-secondary-10 min-h-screen overflow-hidden">
  <TopLeftImage />

      {/* Content above the background */}
      <div className="relative z-10">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
      </SmoothScroll>
  );
};

export default MainLayout;
