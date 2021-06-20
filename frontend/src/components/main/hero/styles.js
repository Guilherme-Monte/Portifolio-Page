import styled from "styled-components";

export const HeroContainer = styled.section`
  height: calc(100vh - var(--nav-menu-size));
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeroCaption = styled.p`
  width: 30%;
  font-size: 1.2rem;
  z-index: 2;

  color: var(--text-secondary);
`;

export const Description = styled.p`
  width: 30%;
  text-align: justify;
  font-size: 0.8rem;
  z-index: 2;

  color: var(--text-secondary);
`;