import React from "react";
import HeroSection from "../components/ui/HeroSection";
import LiveAuction from "../components/ui/live-auction/LiveAuction";
import SellerSection from "../components/ui/seller-section/SellerSection";
import Trending from "../components/ui/trending-section/Trending";
import StepSection from "../components/ui/step-section/StepSection";

const Home = () => {
  return (
  <>
    <HeroSection />
    <LiveAuction/>
    <SellerSection/>
    <Trending/>
    <StepSection/>
  </>
  )
};

export default Home;
