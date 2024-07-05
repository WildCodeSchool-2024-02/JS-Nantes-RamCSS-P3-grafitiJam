import { useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Login({ showRegister }) {
  const [alias, setAlias] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAliasChange = (event) => {
    setAlias(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFetch = async (data) => {
    try {
      const response = await fetch("http://localhost:3310/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Login failed", errorText);
      } else {
        const res = await response.json();
        localStorage.setItem("token", res.token);
        navigate("/profile");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    await handleFetch({ alias, password });
  };

  const handleSignUp = () => {
    showRegister();
  };

  return (
    <form id="loginForm" onSubmit={handleLogin}>
      <h2>Login</h2>
      <div className="form-group">
        <input
          type="text"
          id="alias"
          name="alias"
          placeholder="Alias"
          value={alias}
          onChange={handleAliasChange}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-buttons">
        <button type="submit" id="loginButton">
          Login
        </button>
        <button type="button" id="signUpButton" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default Login;
