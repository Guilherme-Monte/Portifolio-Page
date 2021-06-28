import styled from "styled-components";

export const FooterSection = styled.section`
  width: 85%;
  height: 45vh;
  font-size: 1.1rem;
  padding: 0 7.5%;

  display: flex;
  justify-content: space-between;

  background-color: rgb(0, 0, 0, 0.8);
`;

export const FooterNav = styled.nav`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const FooterArticle = styled.article`
  display: flex;
  flex-direction: ${props => props.oneRow ? "row" : "column"};
  justify-content: ${props => (props.flexStart ? 'flex-start' : 'center')};
  color: var(--text-primary);

  text-align: ${props => props.availability ? "end" : ""};
  width: ${props => props.availability ? "100%" : ""};
  font-size: ${props => props.availability ? "0.6rem" : ""};

  gap: ${props => props.oneRow ? "10px" : ""};

  p {
    font-size: 0.5rem;
  }
`;

export const Socials = styled.a`
  display: flex;
  gap: 5px;

  transition: var(--transition-speed);

  &:hover {
    color: var(--bright-green);
  }
`;

export const FooterColumn = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 30px;
`;