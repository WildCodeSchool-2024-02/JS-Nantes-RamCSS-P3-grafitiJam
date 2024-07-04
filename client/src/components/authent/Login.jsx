import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ConnexionContext } from "../../Contextes/ConnexionContexte";

// eslint-disable-next-line react/prop-types
function Login({ showRegister }) {
  const [alias, setAlias] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(ConnexionContext); // Import and use the context
  const navigate = useNavigate();

  const handleAliasChange = (event) => {
    const { value } = event.target;
    setAlias(value);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleLoginClick = async (event) => {
    event.preventDefault();
    try {
      await handleLogin(alias, password);
      navigate("/profile");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleSignUp = () => {
    showRegister();
  };

  return (
    <form id="loginForm" onSubmit={handleLoginClick}>
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
