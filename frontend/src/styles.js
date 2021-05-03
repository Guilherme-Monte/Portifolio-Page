import styled, { css } from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border-radius: 3px;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  margin: 0 1em;
  padding: 0.5em 2em;

  ${props =>
    props.primary &&
    css`
      background-color: var(--primary-color);
      color: white;
    `};
`;

export const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: var(--primary-color);
`;

export const Wrapper = styled.section`
  /* padding: 4em; */
  background: papayawhip;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// You can pass special properties like this one with the "as" prop:
export const ReversedButton = props =>
  <Button {...props} children={props.children.split('').reverse()} />

// Para criar tema: (em um arquivo)

export default {
  border: {
    radius: "10px"
  },
  theme_colors: {
    primary: "#fff",
    secondary: "#f3f300"
  }
}

// Not recomended:

// injectGlobal`
//   @font-face {
//     font-family: 'Operator Mono';
//     src: url('../fonts/Operator-Mono.ttf');
//   }

//   body {
//     margin: 0;
//   }
// `;