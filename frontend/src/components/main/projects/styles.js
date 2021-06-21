import styled from "styled-components";

export const ProjectsContainer = styled.section`
  width: 100%;
  min-height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  position: relative;
`;

export const Link = styled.a`  
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const UserAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const PublicRepoTitle = styled.h1`
  font-weight: 600;
  font-size: 1.2rem;
  width: 100%;

  text-align: center;

  color: gold;
`;

export const ReposBlock = styled.section`
  width: 100%;
  min-height: 15vh;

  display: flex;
  align-items: center;
  flex-flow: wrap;
`;

export const RepoTitle = styled.p`
  width: 100%;
  font-size: 1.1rem;
  font-weight: 600;

  margin-bottom: 0;
`;

export const RepoInfoContainer = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 10px;
`;

export const RepoCard = styled.p`
  max-width: ${props => props.bigText ? "40%" : "100%"};
  min-width: 25%;
  min-height: 50px;
  padding: 12px;

  background-color: ${props => props.color || "var(--bg-main)"};
  color: var(--text-secondary);

  transition: var(--transition-speed);
  
  &:hover {
    color: gold;
  }
`;

export const MiniFooter = styled.footer`
  font-size: 0.5rem;

  width: 109% + 5px;
  padding: 5px;
  margin: 0 -5.53%;
  text-align: center;

  background-color: var(--bg-primary);
  color: var(--text-primary);
`;