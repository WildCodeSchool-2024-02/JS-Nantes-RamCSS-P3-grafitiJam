import { useEffect, useState } from "react";
import UserCard from "../components/Admin/UserCard";
import "./styles/admin.css";

// eslint-disable-next-line react/prop-types
function Admin({ alias }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the API
    fetch("http://localhost:3310/api/users")
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
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {alias}! You have admin privileges.</p>
      <div className="user-cards">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Admin;
