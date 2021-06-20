import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles.js";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Main from "./components/main";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Main />
        <Footer />
        <GlobalStyle />
      </div>
    </Router>
  );
}

export default App;
