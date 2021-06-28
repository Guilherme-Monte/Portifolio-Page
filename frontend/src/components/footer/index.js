import React from 'react';
import { Link } from "react-router-dom";
import { FooterSection, FooterNav, FooterArticle, FooterColumn, Socials } from './styles';

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <FooterSection>

      <FooterColumn>
        <FooterArticle>
          Guilherme Montenegro
          <p>DESENVOLVEDOR REACT FRONT-END</p>
        </FooterArticle>

        <FooterArticle oneRow>
          <Socials href="https://www.linkedin.com/in/guilherme-montenegro-4a0050204/" target="_blank" rel="noreferrer">
            <FaLinkedin size="35" />
          </Socials>

          <Socials href="mailto:guilhermemonte.dev@gmail.com">
            <SiGmail size="35" />
          </Socials>

          <Socials href="https://github.com/Guilherme-Monte" target="_blank" rel="noreferrer">
            <FaGithub size="35" />
          </Socials>
        </FooterArticle>
      </FooterColumn>

      <FooterColumn>
        <FooterNav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/contact">Contato</Link>
        </FooterNav>

        <FooterArticle availability>
          Disponibilidade de segunda à sexta das 07:00 às 18:00
        </FooterArticle>
      </FooterColumn>

    </FooterSection >
  )
}

export default Footer;