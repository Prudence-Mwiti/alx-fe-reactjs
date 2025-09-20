// src/services/githubService.js
import axios from "axios";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    // throw so Search.jsx can catch it
    throw new Error("User not found");
  }
};
