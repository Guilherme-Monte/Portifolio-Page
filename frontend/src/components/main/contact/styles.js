import styled from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;

  color: var(--text-secondary);
`;

export const MainBlock = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 40px;
`;

export const Socials = styled.a`
  display: flex;
  align-items: center;
  gap: 3px;

  color: var(--text-secondary);
`;

export const CurriculumBlock = styled.div`
  display: grid;  

  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  grid-template-areas: 
    "question question"
    "pt-button en-button";
`;

export const Question = styled.h3`
  grid-area: question;
`;

export const PtButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--text-secondary);
  color: var(--text-secondary);
  background-color: transparent;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;

  transition: var(--transition-speed);

  position: relative;

  width: 140px;
  font-size: 0.8rem;
  height: 40px;
  margin: auto;
  grid-area: pt-button;

  &::before {
    background-color: var(--hover-color);

    left: 0;
    width: 100%;
    height: 0%;
    /* The height has to be here so the transition can function  properly */
    z-index: -1;
    
    transition: 300ms;
    
    content: "";
    position: absolute;

    top: 0;
    border-radius: 0 0 50% 50%;
  }

  &:hover {
    color: var(--bg-primary);
    border: 1px solid var(--hover-color);
  }

  &:hover&::before {
    height: 180%;
  }
`;

export const EnButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--text-secondary);
  color: var(--text-secondary);
  background-color: transparent;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;

  transition: var(--transition-speed);

  position: relative;

  width: 140px;
  font-size: 0.8rem;
  height: 40px;
  margin: auto;
  grid-area: en-button;

  &::before {
    background-color: var(--hover-color);

    left: 0;
    width: 100%;
    height: 0%;
    /* The height has to be here so the transition can function  properly */
    z-index: -1;
    
    transition: 300ms;
    
    content: "";
    position: absolute;

    top: 0;
    border-radius: 0 0 50% 50%;
  }

  &:hover {
    color: var(--bg-primary);
    border: 1px solid var(--hover-color);
  }

  &:hover&::before {
    height: 180%;
  }
`;

export const InfoContainer = styled.div`
  padding: 40px 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SmallLetter = styled.p`
  font-size: 0.6rem;
  margin: 0;
`;