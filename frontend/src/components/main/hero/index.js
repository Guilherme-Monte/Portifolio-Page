import React from 'react';
import { HeroContainer, HeroCaption, Description, Button } from './styles';
import About from "./about";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <div>
          <HeroCaption>Quem sou eu?</HeroCaption>
          <Description>Desenvolvedor React Front-End com experiência extensiva em suporte ao cliente, motivado a aumentar a otimização de códigos.</Description>
          <a href="#about">
            <Button>
              About me
            </Button>
          </a>
        </div>
      </HeroContainer>
      <About />
    </>
  )
}

export default Hero;