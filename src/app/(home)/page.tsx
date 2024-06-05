"use client";

import styles from "../(Home)/page.module.css";
import FirstSection from "@/components/Landing Page/First Section/FirstSection";
import SecondSection from "@/components/Landing Page/Second Section/SecondSection";
import FeaturedCollection from "@/components/Landing Page/Featured Collection/FeaturedCollection";
import FlashSale from "@/components/Landing Page/Flash Sale/FlashSale";
import FifthSection from "@/components/Landing Page/Fifth Section/FifthSection";
import TeamInfo from "@/components/Landing Page/Team Info/TeamInfo";
import LatestPost from "@/components/Landing Page/Latest Post/LatestPost";
import { useEffect } from "react";
import { useOpenContext } from "@/context/OpenProvider";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const { open, setOpen } = useOpenContext();

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className={styles["landing-page-root"]}>
      <FirstSection />
      <SecondSection />
      <FeaturedCollection />
      <FlashSale />
      <FifthSection />
      <TeamInfo />
      <LatestPost />
    </div>
  );
};

export default Home;
