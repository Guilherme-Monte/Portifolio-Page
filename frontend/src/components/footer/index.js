import React from 'react';
import { Link } from "react-router-dom";
import { FooterSection, FooterNav, FooterArticle, GlobalStyle, Socials } from './styles';

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <FooterSection>

      <FooterNav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </FooterNav>

      <FooterArticle>
        Disponibilidade:
        <article>De segunda à sexta das 07:00 às 18:00</article>
      </FooterArticle>

      <FooterArticle>
        <Socials href="https://www.linkedin.com/in/guilherme-montenegro-4a0050204/" target="_blank" rel="noreferrer">
          <FaLinkedin />
          LinkedIn
        </Socials>

        <Socials href="mailto:guilhermemonte.dev@gmail.com">
          <SiGmail />
          Gmail
        </Socials>

        <Socials href="https://github.com/Guilherme-Monte" target="_blank" rel="noreferrer">
          <FaGithub />
          Github
        </Socials>
      </FooterArticle>

      <GlobalStyle />
    </FooterSection>
  )
}

export default Footer;