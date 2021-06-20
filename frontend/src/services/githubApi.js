import axios from "axios";

export const usersApi = axios.create({
  baseURL: "https://api.github.com/users",
});