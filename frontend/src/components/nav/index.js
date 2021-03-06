import React from 'react';
import { Link } from "react-router-dom";
import { Header, HR, NavMenu, MyName, NavContainer } from "./styles.js";

const Nav = () => {
  return (
    <NavContainer>
      <Header>
        <MyName>Guilherme Montenegro</MyName>
        <NavMenu>
          <Link to="/">Home</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/contact">Contato</Link>
        </NavMenu>
      </Header>
      <HR />
    </NavContainer>
  )
}

export default Nav;