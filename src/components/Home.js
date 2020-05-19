import React from "react";
import HomeHeader from "./Home/HomeHeader";
import HomeMainSection from "./Home/HomeMainSection";
import HomeThreeCols from "./Home/HomeThreeCols";
import HomeFourSteps from "./Home/HomeFourSteps";
import HomeWhoIs from "./Home/HomeWhoIs";
import HomeWhoWeHelp from "./Home/HomeWhoWeHelp";
import HomeContact from "./Home/HomeContact";
import HomeFooter from "./Home/HomeFooter";

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
