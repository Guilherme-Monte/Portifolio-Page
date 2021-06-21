import React from 'react';
import { Switch, Route } from "react-router-dom";
import { MainSection } from "./styles.js";
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
        </Route>

        <Route path="/contact">
          <Contact />
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