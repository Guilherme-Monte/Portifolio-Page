import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "RobotoMono";
    src: url("./assets/fonts/RobotoMono-Bold.ttf");
  }

  :root {
    font-size: 27px;
    --text-primary: #b6b6b6;
    --text-secondary: #ececec;
    --hover-color: #336699;
    --light-blue: #86BBD8;
    --bright-green: #04fccd;
    --bg-primary: #2F4858;
    --bg-secondary: #141418;
    --bg-main: #2f3542;
    --transition-speed: 300ms;
    --nav-menu-size: 8vh;
    scroll-padding-top: calc(var(--nav-menu-size) + 3vh);
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: RobotoMono, monospace;
    background-color: var(--text-primary);
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
    color: var(--text-secondary);
  }
`;

export const MainSection = styled.section`
  min-height: 90vh;
  width: 100%;

  @media(max-width: 800px) {
  }
`;