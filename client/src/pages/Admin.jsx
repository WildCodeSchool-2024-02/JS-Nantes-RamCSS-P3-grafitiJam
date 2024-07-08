import { useEffect, useState } from "react";
import UserCard from "../components/Admin/UserCard";
import ArtCard from "../components/Admin/ArtCard";
import "./styles/admin.css";

// eslint-disable-next-line react/prop-types
function Admin({ alias }) {
  const [users, setUsers] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [showUsersVerified, setShowUsersVerified] = useState("all"); // "all" for all users, "true" for verified, "false" for non-verified
  const [showArtworksVerified, setShowArtworksVerified] = useState("all"); // "all" for all artworks, "true" for verified, "false" for non-verified

  useEffect(() => {
    // Fetch users from the API
    let userUrl = `${import.meta.env.VITE_API_URL}/api/user`;
    if (showUsersVerified !== "all") {
      userUrl += `?verify=${showUsersVerified}`;
    }

    fetch(userUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [showUsersVerified]);

  useEffect(() => {
    // Fetch artworks from the API
    let artUrl = `${import.meta.env.VITE_API_URL}/api/art`;
    if (showArtworksVerified !== "all") {
      artUrl += `?verify=${showArtworksVerified}`;
    }

    fetch(artUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setArtworks(data);
      })
      .catch((error) => {
        console.error("Error fetching artworks:", error);
      });
  }, [showArtworksVerified]);

  const handleUsersRadioChange = (event) => {
    setShowUsersVerified(event.target.value);
  };

  const handleArtworksRadioChange = (event) => {
    setShowArtworksVerified(event.target.value);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {alias}! You have admin privileges.</p>
      <div>
        <label>
          Show Users:
          <input
            type="radio"
            value="all"
            checked={showUsersVerified === "all"}
            onChange={handleUsersRadioChange}
          />{" "}
          All Users
          <input
            type="radio"
            value="true"
            checked={showUsersVerified === "true"}
            onChange={handleUsersRadioChange}
          />{" "}
          Verified Users
          <input
            type="radio"
            value="false"
            checked={showUsersVerified === "false"}
            onChange={handleUsersRadioChange}
          />{" "}
          Non-Verified Users
        </label>
      </div>
      <div className="user-cards">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <div>
        <label>
          Show Artworks:
          <input
            type="radio"
            value="all"
            checked={showArtworksVerified === "all"}
            onChange={handleArtworksRadioChange}
          />{" "}
          All Artworks
          <input
            type="radio"
            value="true"
            checked={showArtworksVerified === "true"}
            onChange={handleArtworksRadioChange}
          />{" "}
          Verified Artworks
          <input
            type="radio"
            value="false"
            checked={showArtworksVerified === "false"}
            onChange={handleArtworksRadioChange}
          />{" "}
          Non-Verified Artworks
        </label>
      </div>

      <div className="art-cards">
        {artworks.map((art) => (
          <ArtCard key={art.id} art={art} />
        ))}
      </div>
    </div>
  );
}

export default Admin;
