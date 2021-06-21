import axios from "axios";

export const usersApi = axios.create({
  baseURL: "https://api.github.com/users",
});

export const reposApi = axios.create({
  baseURL: "https://api.github.com/users/Guilherme-Monte/repos",
});