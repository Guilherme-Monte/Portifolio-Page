import React from 'react';
import { HeroContainer, HeroCaption, Description, Button, VideoContainer, VideoPlayer, VideoPlayerAfter, BgLocation } from './styles';
import About from "./about";
import video from "../../../assets/videos/Lake.mp4";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <div>
          <HeroCaption>Quem sou eu?</HeroCaption>
          <Description>Desenvolvedor React Front-End com experiência extensiva em suporte ao cliente, motivado a aumentar a otimização de códigos.</Description>
          <a href="#about">
            <Button>
              Sobre mim
            </Button>
          </a>
        </div>
        <VideoContainer>
          <VideoPlayer src={video} playsinline autoPlay muted loop></VideoPlayer>
        </VideoContainer>
        <VideoPlayerAfter></VideoPlayerAfter>
        <BgLocation>Perast, Baía de Kotor</BgLocation>
      </HeroContainer>
      <About />
    </>
  )
}

export default Hero;