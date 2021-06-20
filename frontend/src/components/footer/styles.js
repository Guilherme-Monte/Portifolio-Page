import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  a {
    color: var(--hover-color);
  }
`;

export const FooterSection = styled.section`
  width: 100%;
  height: 20vh;
  font-size: 0.8rem;

  display: flex;
  justify-content: space-evenly;

  background-color: var(--bg-secondary);
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FooterArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.flexStart ? 'flex-start' : 'center')};
  color: var(--text-primary);
`;

export const Socials = styled.a`
  display: flex;
  gap: 3px;
`;