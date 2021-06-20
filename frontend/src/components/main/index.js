import React from 'react';
import { Switch, Route } from "react-router-dom";
import { MainSection } from "./styles.js";

const Main = () => {

  function Home() {
    return (
      <><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2><h2>Home</h2></>
    );
  }

  function Projects() {
    return <h2>Projects</h2>;
  }

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
          {/* Hero section e about me juntos
                Posso combinar os dois num componente
                Main = Hero + About */}
          <Home />
        </Route>
      </Switch>
    </MainSection>
  )
}

export default Main;