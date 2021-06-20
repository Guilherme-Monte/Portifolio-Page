import styled from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  justify-content: space-between;

  min-height: 90vh;
  width: 100%;

  margin-top: calc(var(--nav-menu-size) + 3vh);
`;

export const WhoAmIContainer = styled.section`
  width: 50%;
  height: 90%;
  padding: 0 20px 25px 20px;

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
  width: 30%;
  height: 90%;
  padding: 0 20px 25px 20px;

  text-align: center;

  background-color: var(--bg-secondary);
  color: var(--text-primary);
`;