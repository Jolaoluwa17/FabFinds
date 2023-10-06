"use client";
import React, { useEffect } from "react";
import "./landingPage.css";
import FirstSection from "@/components/Landing Page/First Section/FirstSection";
import SecondSection from "@/components/Landing Page/Second Section/SecondSection";
import FeaturedCollection from "@/components/Landing Page/Featured Collection/FeaturedCollection";
import FlashSale from "@/components/Landing Page/Flash Sale/FlashSale";
import FifthSection from "@/components/Landing Page/Fifth Section/FifthSection";
import TeamInfo from "@/components/Landing Page/Team Info/TeamInfo";
import LatestPost from "@/components/Landing Page/Latest Post/LatestPost";
import Footer from "@/components/Footer/Footer";

const LandingPage = () => {
  return (
    <div className="landing-page-root">
      <FirstSection />
      <SecondSection />
      <FeaturedCollection />
      <FlashSale />
      <FifthSection />
      <TeamInfo />
      <LatestPost />
      <Footer />
    </div>
  );
};

export default LandingPage;
