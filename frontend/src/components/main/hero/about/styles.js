import styled from "styled-components";

export const AboutContainer = styled.section`  
  display: flex;
  justify-content: space-between;

  min-height: 70vh;
  width: 100%;

  margin-top: calc(var(--nav-menu-size) + 3vh);
`;

export const WhoAmIContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;
  height: 550px;
  padding: 0 34px 50px 34px;

  display: flex;
  flex-direction: column;

  background-color: var(--bg-main);

  color: var(--text-primary);
`;

export const AboutArticle = styled.article`
  display: flex;
  flex-direction: ${props => props.column ? "column" : "row"};
  align-items: center;
  
  text-align: justify;
  font-size: 0.65rem;

  color: ${props => props.golden ? "gold" : ""};
`;

export const MyStackContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 30%;
  height: 550px;
  padding: 0 34px 50px 34px;

  text-align: center;

  background-color: var(--bg-secondary);
  color: var(--text-primary);
`;