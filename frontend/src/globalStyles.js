import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "RobotoMono";
    src: url("./assets/fonts/RobotoMono-Bold.ttf");
  }

  :root {
    font-size: 16px;
    --text-primary: #b6b6b6;
    --text-secondary: #ececec;
    --hover-color: #a55eea;
    --bg-primary: #23232e;
    --bg-secondary: #141418;
    --bg-main: #2f3542;
    --transition-speed: 600ms;
    --nav-menu-size: 7vh;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: RobotoMono, monospace;
    /* background-color: var(--text-primary); */
  }

  body::-webkit-scrollbar {
    width: 0.4rem;
  }

  body::-webkit-scrollbar-track {
    background-color: var(--hover-color);
  }

  body::-webkit-scrollbar-thumb {
    background-color: #1e1e24;
  }

  a {
    text-decoration: none;
    outline: none;
  }
`;

export const MainSection = styled.section`
  min-height: 100vh;
  width: 100%;

  @media(max-width: 800px) {
  }
`;