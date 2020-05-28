import React from "react";
import Decoration from '../Decoration';
import HeaderButtons from "./HeaderButtons";


export default function HomeHeader() {
  return (
  <div className='main-container home__header'>
    <div className='home__header-image'></div>
    <div className='home__header-intro'>
      <h2>
        Zacznij pomagać!
        <br/>
        Oddaj niechciane rzeczy w zaufane ręce
      </h2>
      <Decoration />
      <HeaderButtons />
    </div>
  </div>
  );
}
