import styled from "styled-components";

export const AboutContainer = styled.section`  
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;

  min-height: 70vh;
  width: 100%;

  margin-top: calc(var(--nav-menu-size) + 3vh);
  padding: 50px 0;

  background-color: var(--light-blue);
  opacity: 0.9;
  color: var(--text-secondary);
`;

export const WhoAmIContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;
  height: 550px;
  padding: 50px;

  display: flex;
  flex-direction: column;

  background-color: var(--bg-secondary);
`;

export const AboutArticle = styled.article`
  display: flex;
  flex-direction: ${props => props.column ? "column" : "row"};
  align-items: ${props => props.column ? "flex-start" : "center"};
  margin: ${props => props.column ? "0 150px" : ""};
  
  text-align: justify;
  font-size: 0.65rem;

  color: ${props => props.green ? "var(--bright-green)" : ""};
`;

export const MyStackContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 30%;
  height: 550px;
  padding: 50px;

  text-align: center;

  background-color: var(--bg-secondary);
`;