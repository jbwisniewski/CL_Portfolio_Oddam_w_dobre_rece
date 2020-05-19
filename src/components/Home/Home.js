import React from "react";
import HomeHeader from "./HomeHeader";
import HomeMainSection from "./HomeMainSection";
import HomeThreeCols from "./HomeThreeCols";
import HomeFourSteps from "./HomeFourSteps";
import HomeWhoIs from "./HomeWhoIs";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeMainSection />
      <HomeThreeCols />
      <HomeFourSteps />
      <HomeWhoIs />
      <HomeWhoWeHelp />
      <HomeContact />
      <HomeFooter />
    </>
  );
}
