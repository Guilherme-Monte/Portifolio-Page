import React from 'react';
import { Link } from "react-router-dom";
import { AboutContainer, WhoAmIContainer, AboutArticle, MyStackContainer } from './styles';
import { Button } from "../styles";
import { RiCactusFill, RiBookletFill, RiComputerLine } from "react-icons/ri";
import { GiBackpack } from "react-icons/gi";
import { FaRegGrinTongueSquint } from "react-icons/fa";

import { IconContext } from "react-icons";

const About = () => {
  return (
    <AboutContainer id="about">
      <IconContext.Provider value={{ size: "50px", style: { marginRight: '10px' } }}>
        <WhoAmIContainer>
          <h2>Quem sou eu:</h2>

          <AboutArticle>
            <RiCactusFill size="39px" title="Cactus" color="green" />
            <p>Brasileiro, atualmente residindo em Teofilândia - BA</p>
          </AboutArticle>

          <AboutArticle>
            <RiBookletFill title="Book" color="brown" />
            <p>Em 2017, iniciei o curso de Sistemas de Informação na Universidade Salvador de Feria de Santana e concluí em 2020</p>
          </AboutArticle>

          <AboutArticle>
            <GiBackpack title="Backpack" color="purple" />
            <p>Iniciei minha carreira com um estágio de desenvolvimento de uma aplicação dashboard na Genius Mineração e Terraplanagem</p>
          </AboutArticle>

          <AboutArticle>
            <RiComputerLine size="50px" title="Computer" />
            <p>Atuei na área por 5 meses na Econvert Digital, como desenvolvedor Front-End e fornecendo suporte ao cliente</p>
          </AboutArticle>

          <AboutArticle>
            <FaRegGrinTongueSquint color="#f39c12" size="34px" title="Tongue emote" />
            <p>Sou fluente na língua inglesa e estou estudando polonês</p>
          </AboutArticle>
          <Link to="/contact"><Button>Fale comigo</Button></Link>
        </WhoAmIContainer>
      </IconContext.Provider>

      <MyStackContainer>
        <h2>Meu stack:</h2>
        <AboutArticle column golden>
          <h2>Front-end:</h2>
          <div>- ReactJS (Hooks, ContextAPI, Router)</div>
          <div>- HTML, CSS, SCSS e JavaScript (ES6, 7 e 8)</div>
          <div>- Styled Components</div>
        </AboutArticle>

        <AboutArticle column golden>
          <h2>Back-end:</h2>
          <div>- NodeJS, RESTful e Express API</div>
          <div>- PostgreSQL e MySQL</div>
          <div>- MongoDB</div>
        </AboutArticle>

        <Link to="/projects"><Button>Meus projetos</Button></Link>
      </MyStackContainer>
    </AboutContainer>
  )
}

export default About;