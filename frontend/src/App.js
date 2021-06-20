import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* Nav component */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          {/* o path "/" tem que ser o último para funcionar */}
          <Route path="/">
            {/* Hero section e about me juntos
                Posso combinar os dois num componente
                Main = Hero + About */}
            <Home />
          </Route>
        </Switch>

        <h2>Footer</h2>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Projects() {
  return <h2>Projects</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;
