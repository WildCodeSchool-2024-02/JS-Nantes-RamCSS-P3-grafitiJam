import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ConnexionContext } from "../Contextes/ConnexionContexte";
import UserCard from "../components/Admin/UserCard";
import ArtCard from "../components/Admin/ArtCard";
import "./styles/admin.css";

// eslint-disable-next-line react/prop-types
function Admin({ alias }) {
  const [users, setUsers] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [showUsersVerified, setShowUsersVerified] = useState("all");
  const [showArtworksVerified, setShowArtworksVerified] = useState("all");
  // eslint-disable-next-line no-unused-vars
  const { isAdmin, handleLogin } = useContext(ConnexionContext);
  const navigate = useNavigate();

  // Check if user is admin on component mount
  useEffect(() => {
    if (!isAdmin) {
      navigate("/"); // Redirect to home if not admin
    }
  }, [isAdmin, navigate]);

  // Check if token exists on component mount
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const token = localStorage.getItem("token");
  }, []);

  // Fetch users from the server based on verification status
  const fetchUsers = () => {
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
  };

  // Fetch artworks from the server based on verification status
  const fetchArtworks = () => {
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
  };

  // Fetch users when the verification filter changes
  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showUsersVerified]);

  // Fetch artworks when the verification filter changes
  useEffect(() => {
    fetchArtworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showArtworksVerified]);

  // Handle radio button change for users filter
  const handleUsersRadioChange = (event) => {
    setShowUsersVerified(event.target.value);
  };

  // Handle radio button change for artworks filter
  const handleArtworksRadioChange = (event) => {
    setShowArtworksVerified(event.target.value);
  };

  // Handle verification of artwork
  const handleVerifyArt = async (id) => {
    try {
      const patchResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/api/art/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            isVerify: 1,
          }),
        }
      );

      if (patchResponse.status === 204) {
        fetchArtworks(); // Refresh the artworks list
      } else {
        const errorText = await patchResponse.text();
        console.error(
          "Error verifying artwork:",
          patchResponse.statusText,
          errorText
        );
      }
    } catch (error) {
      console.error("Error verifying artwork:", error);
    }
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
          <ArtCard key={art.id} art={art} onVerify={handleVerifyArt} />
        ))}
      </div>
    </div>
  );
}

export default Admin;
