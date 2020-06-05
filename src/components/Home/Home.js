import React from "react";
import { withAuthorization } from '../Session';

import HomeAboutUs from './HomeAboutUs';
import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";
import HomeContact from "./HomeContact";
import HomeThreeCols from "./HomeThreeCols";
import HomeFourSteps from "./HomeFourSteps";
import HomeWhoWeHelp from "./HomeWhoWeHelp";



const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <HomeThreeCols />
      <HomeFourSteps />
      <HomeAboutUs />
      <HomeWhoWeHelp />
      <HomeContact />
      <HomeFooter />
    </>
  );
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);
