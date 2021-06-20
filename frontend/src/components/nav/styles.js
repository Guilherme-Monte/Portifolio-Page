import styled from "styled-components";

export const NavContainer = styled.section`
  width: 100%;
  /* Remove the following code and the margin on the main section to get rid of the fixed-nav styling */
  position: fixed;
  top: 0;
  left: 0;

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
`;

export const NavMenu = styled.nav`
  gap: 20px;

  display: flex;
  justify-content: space-between;
  
  a {
    color: var(--text-secondary);
  }
`;

export const HR = styled.hr`
  width: 90%;
  margin-top: 0;
  border: 1px solid var(--text-primary);
  border-radius: 50px;
`;