import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle, MainSection } from "./globalStyles.js";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Main from "./components/main";
import ScrollToTop from "./ScrollToTop.js";

function App() {
  return (
    <Router>
      <ScrollToTop />
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
