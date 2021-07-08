import styled from "styled-components";

export const ProjectsContainer = styled.section`
  width: 90%;
  min-height: 90vh;
  padding: 0 5%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  /* position: relative; */
`;

export const Link = styled.a`
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const UserAvatar = styled.img`
  width: 119px;
  height: 119px;
  border-radius: 50%;
`;

export const UserBio = styled.p`
  padding: 17.5px;
  min-height: 23px;
  width: 40%;
  font-size: 0.8rem;
  text-align: center;

  background-color: var(--bg-main);
  color: var(--text-primary);
`;

export const PublicRepoTitle = styled.h1`
  font-weight: 600;
  font-size: 1.2rem;
  width: 100%;

  text-align: center;

  color: #9EE493;
`;

export const ReposBlock = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  flex-flow: wrap;
`;

export const RepoTitle = styled.p`
  width: 100%;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0;

  color: var(--text-secondary);

  display: flex;
  align-items: center;
  gap: 20px;

  transition: var(--transition-speed);

  &:hover {
    cursor: pointer;
    color: gold;
  }
`;

export const RepoInfoContainer = styled.article`
  width: 100%;
  display: none;
  justify-content: space-between;
  align-items: center;

  gap: 17.5px;
`;

export const RepoCard = styled.p`
  box-shadow: 0 0 10px var(--bg-secondary), 0 0 20px var(--bg-secondary), 0 0 40px var(--bg-secondary);

  max-width: ${props => props.bigText ? "40%" : "100%"};
  min-width: 25%;
  min-height: 85px;
  padding: 21px;

  background-color: ${props => props.color || "var(--bg-main)"};
  color: var(--text-secondary);

  transition: var(--transition-speed);
  
  &:hover {
    color: gold;
  }
`;

export const MiniFooter = styled.footer`
  font-size: 0.5rem;

  padding: 8px;
  margin: 0 -5.53%;
  margin-top: auto;
  text-align: center;

  background-color: var(--bg-primary);
  color: var(--text-primary);
`;