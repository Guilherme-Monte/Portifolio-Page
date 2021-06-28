import React from 'react';
import { Socials, ContactContainer, MainBlock, CurriculumBlock, Question, PtButton, EnButton, InfoContainer, SmallLetter } from './styles';
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div>
      <ContactContainer>
        <MainBlock>
          <IconContext.Provider value={{ size: "60px" }}>
            <div>
              <Socials href="https://www.linkedin.com/in/guilherme-montenegro-4a0050204/" target="_blank" rel="noreferrer">
                <FaLinkedin color="#0076b5" />
                LinkedIn
              </Socials>
              <Socials href="mailto:guilhermemonte.dev@gmail.com">
                <SiGmail color="#c6483a" />
                Gmail
              </Socials>
            </div>
          </IconContext.Provider>
          <CurriculumBlock>
            <Question>Quer uma cópia do meu currículo?</Question>
            <PtButton href="https://drive.google.com/file/d/1fUsMWCQZEn7DydRuQsUxz4A6a-Z5chbK/view?usp=sharing" target="_blank" rel="noreferrer">Baixe uma cópia</PtButton>
            <EnButton href="https://drive.google.com/file/d/1xSD_OJs6tpcqW4_Vo6KIQMv-8d_huyFh/view?usp=sharing" target="_blank" rel="noreferrer">CV English version</EnButton>
          </CurriculumBlock>
        </MainBlock>
        <InfoContainer>
          <h3>Info (atualizado todo mês):</h3>
          <h4>O que pretendo estudar:</h4>
          <SmallLetter>✅ = Concluído / ❌ Na espera / ⌛ Em andamento</SmallLetter>
          <article>
            <p>❌ Elixir ou NestJs</p>
            <p>❌ Docker</p>
            <p>⌛ TypeScript:</p>
            <p>✅ Styled components</p>
            <p>⌛ React Native</p>
            <p>✅ Web Design</p>
            <p>✅ Softwares de Web Design (Canva, Figma e Dribble)</p>
          </article>
          <SmallLetter>De 22 de junho de 2021</SmallLetter>
        </InfoContainer>
      </ContactContainer>
    </div>
  )
}

export default Contact;