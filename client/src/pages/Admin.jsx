import { useEffect, useState } from "react";
import UserCard from "../components/Admin/UserCard";
import ArtCard from "../components/Admin/ArtCard";
import "./styles/admin.css";

// eslint-disable-next-line react/prop-types
function Admin({ alias }) {
  const [users, setUsers] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [showUsersVerified, setShowUsersVerified] = useState("all");
  const [showArtworksVerified, setShowArtworksVerified] = useState("all");

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

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showUsersVerified]);

  useEffect(() => {
    fetchArtworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showArtworksVerified]);

  const handleUsersRadioChange = (event) => {
    setShowUsersVerified(event.target.value);
  };

  const handleArtworksRadioChange = (event) => {
    setShowArtworksVerified(event.target.value);
  };

  const handleVerifyArt = async (id) => {
    try {
      // Fetch current artwork details to get img_date
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/art/${id}`
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch artwork details: ${response.statusText}`
        );
      }

      const artDetails = await response.json();
      const currentImgDate = artDetails.img_date; // Assuming the API returns the img_date

      // PATCH request to update isVerify to true and resend img_date
      const patchResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/api/art/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            isVerify: true,
            img_date: currentImgDate, // Resending the img_date already stored
          }),
        }
      );

      if (!patchResponse.ok) {
        throw new Error(`Error verifying artwork: ${patchResponse.statusText}`);
      }

      // After successful verification, fetch updated artworks if needed
      fetchArtworks();
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
