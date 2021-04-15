import React from "react";
import { Button, Container, Title, TomatoButton, Wrapper, ReversedButton } from "./styles";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title>
          Hello World
        </Title>
        <Container>
          <TomatoButton as={ReversedButton}>Portifolio 1</TomatoButton>
          <Button primary as="a" href="/">Primary</Button>
        </Container>
      </Wrapper>
    </div>
  );
}

export default App;
