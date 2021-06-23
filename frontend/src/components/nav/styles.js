import styled from "styled-components";

export const NavContainer = styled.section`
  width: 100%;
  /* Remove the following code and the margin on the main section to get rid of the fixed-nav styling */
  position: fixed;
  top: 0;
  left: 0;

  z-index: 2;

  background-color: transparent;
`;

export const Header = styled.header`
  padding: 0 5%;
  height: var(--nav-menu-size);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MyName = styled.p`
  font-weight: bolder;
  font-size: 1.4rem;

  color: var(--text-secondary);
  transition: var(--transition-speed);

  :hover {
    color: var(--hover-color);
  }
`;

export const NavMenu = styled.nav`
  gap: 34px;

  display: flex;
  justify-content: space-between;
  
  a {
    transition: var(--transition-speed);
    color: var(--text-secondary);
    :hover {
    color: var(--hover-color);
  }
  }
`;

export const HR = styled.hr`
  width: 90%;
  margin-top: 0;
  border: 1px solid var(--text-secondary);
  border-radius: 50px;
`;