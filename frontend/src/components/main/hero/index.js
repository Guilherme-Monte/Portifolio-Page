import React from 'react';
import { HeroContainer, HeroCaption, Description } from './styles';

const Hero = () => {
  return (
    <HeroContainer>
      <div>
        <HeroCaption>Quem sou eu?</HeroCaption>
        <Description>Desenvolvedor React Front-End com experiência extensiva em suporte ao cliente, motivado a aumentar a otimização de códigos.</Description>
      </div>
    </HeroContainer>
  )
}

export default Hero;