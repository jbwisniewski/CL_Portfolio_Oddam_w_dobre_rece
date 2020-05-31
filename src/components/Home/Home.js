import React from "react";
import { withAuthorization } from '../Session';

import HomeWhoIs from "./HomeWhoIs";
import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";
import HomeContact from "./HomeContact";
import HomeThreeCols from "./HomeThreeCols";
import HomeFourSteps from "./HomeFourSteps";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeMainSection from "./HomeMainSection";


const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <HomeThreeCols />
      <HomeMainSection />
      <HomeFourSteps />
      <HomeWhoIs />
      <HomeWhoWeHelp />
      <HomeContact />
      <HomeFooter />
    </>
  );
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);
