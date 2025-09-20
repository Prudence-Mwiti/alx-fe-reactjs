// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async (username, location, minRepos, page = 1) => {
  try {
    let query = username ? `${username}` : "";

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`${BASE_URL}${query}&page=${page}&per_page=10`);

    // Now fetch more details for each user (repos, location)
    const usersWithDetails = await Promise.all(
      response.data.items.map(async (user) => {
        const detailResponse = await axios.get(`https://api.github.com/users/${user.login}`);
        return { ...user, ...detailResponse.data };
      })
    );

    return usersWithDetails;
  } catch (error) {
    throw error;
  }
};




