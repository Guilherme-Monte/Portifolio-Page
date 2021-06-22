import React, { useState } from 'react';
import { usersApi, reposApi } from "../../../services/githubApi";
import { UserAvatar, UserInfo, ProjectsContainer, Link, ReposBlock, RepoTitle, PublicRepoTitle, RepoInfoContainer, RepoCard, MiniFooter, UserBio } from "./styles";

const Projects = () => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  React.useEffect(() => {
    getProfile();
    getRepos();
  }, [])

  async function getProfile() {
    const response = await usersApi.get("/guilherme-monte")
      .catch(err => console.log(err));

    setUser(response.data);
  }

  async function getRepos() {
    const response = await reposApi.get()
      .catch(err => console.log(err));

    setRepos(response.data);
  }

  return (
    <ProjectsContainer>
      <UserInfo>
        <Link href="https://github.com/Guilherme-Monte/" target="_blank" rel="noreferrer">
          <UserAvatar src={user.avatar_url} alt="Imagem de usuário"></UserAvatar>
          <p>Guilherme-Monte</p>
        </Link>

        <UserBio>{user.bio}</UserBio>
      </UserInfo>
      <div>
        <PublicRepoTitle>Repositórios públicos: {user.public_repos}</PublicRepoTitle>
        {
          repos.map((element) => {
            return (
              <ReposBlock key={element.name}>
                <RepoTitle>{element.name}</RepoTitle>
                <RepoInfoContainer>
                  <RepoCard bigText color="var(--hover-color)">{element.description}</RepoCard>
                  <RepoCard color="">Maior uso do {element.language}</RepoCard>
                  {
                    element.homepage ?
                      <Link href={element.homepage} target="_blank" rel="noreferrer">
                        <RepoCard color="green">Hospedado aqui 😄</RepoCard>
                      </Link>
                      :
                      <RepoCard color="red">Não está hospedado ☹️</RepoCard>
                  }
                </RepoInfoContainer>
              </ReposBlock>
            )
          })
        }
      </div>
      <MiniFooter>Página feita utilizando a API do Github</MiniFooter>
    </ProjectsContainer >
  )
}

export default Projects;