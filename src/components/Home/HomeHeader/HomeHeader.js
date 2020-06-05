import React from "react";
import HeaderButtons from "./HeaderButtons";
import decoUrl from '../../../assets/Decoration.svg'
import headImgUrl from '../../../assets/Home-Hero-Image.jpg'
import Navigation from "../../Navigation";

export default function HomeHeader() {
  return (
    <>
      <Navigation/>
      <div className='main-container home__header' id='top'>
        <div className='home__header-image'>
          <img src={headImgUrl} alt='box with stuff'/>
        </div>
        <div className='home__header-intro'>
          <h2 className='home__header-intro-title'>
            Zacznij pomagać!
            <br/>
            Oddaj niechciane rzeczy w zaufane ręce
          </h2>
          <img src={decoUrl} alt='decoration'/>
          <HeaderButtons />
        </div>
      </div>
    </>
  );
}
