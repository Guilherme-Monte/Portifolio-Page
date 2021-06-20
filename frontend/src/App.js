import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle, MainSection } from "./globalStyles.js";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Main from "./components/main";

function App() {
  return (
    <Router>
      <MainSection>
        <Nav />
        <Main />
      </MainSection>
      <Footer />
      <GlobalStyle />
    </Router>
  );
}

export default App;
