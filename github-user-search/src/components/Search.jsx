import React, { useState } from "react";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.status === 404) {
        setUserData(null);
        setError("Looks like we cant find the user");
      } else {
        const data = await response.json();
        setUserData(data);
        setError("");
      }
    } catch (err) {
      console.error("Error fetching user:", err);
      setError("Looks like we cant find the user");
      setUserData(null);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* User Info */}
      {userData && (
        <div className="user-card">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            width="120"
            height="120"
          />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio || "No bio available"}</p>
          <p>
            <strong>Followers:</strong> {userData.followers} |{" "}
            <strong>Following:</strong> {userData.following}
          </p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;


