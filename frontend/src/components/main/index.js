import React from 'react';
import { Switch, Route } from "react-router-dom";
import { MainSection, BgImgContainer, BgImgAfter } from "./styles.js";
import Hero from "./hero";
import Projects from './projects/index.js';

const Main = () => {
  function Contact() {
    return <h2>Contact</h2>;
  }

  return (
    <MainSection>
      <Switch>
        <Route path="/projects">
          <Projects />
          <BgImgContainer></BgImgContainer>
          <BgImgAfter></BgImgAfter>
        </Route>

        <Route path="/contact">
          <Contact />
          <BgImgContainer></BgImgContainer>
          <BgImgAfter></BgImgAfter>
        </Route>

        {/* o path "/" tem que ser o último para funcionar */}
        <Route path="/">
          <Hero />
        </Route>
      </Switch>
    </MainSection>
  )
}

export default Main;