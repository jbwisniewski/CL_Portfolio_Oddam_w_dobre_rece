import React from "react";
import HomeWhoIs from "./HomeWhoIs";
import HomeFooter from "./HomeFooter";
import Navigation from '../Navigation/Navigation';
import HomeHeader from "./HomeHeader";
import HomeContact from "./HomeContact";
import HomeThreeCols from "./HomeThreeCols";
import HomeFourSteps from "./HomeFourSteps";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeMainSection from "./HomeMainSection";


export default function Home() {
  return (
    <>
      <Navigation/>
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
