import React from 'react';
import { Switch, Route } from "react-router-dom";
import { MainSection, VideoContainer, VideoPlayer, VideoPlayerAfter } from "./styles.js";
import Hero from "./hero";
import video from "../../assets/videos/Lake.mp4";

const Main = () => {
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
          <Hero />
        </Route>
      </Switch>

      <VideoContainer>
        <VideoPlayer src={video} playsinline autoPlay muted loop></VideoPlayer>
      </VideoContainer>
      <VideoPlayerAfter></VideoPlayerAfter>

    </MainSection>
  )
}

export default Main;