import { useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Login({ showRegister }) {
  const [alias, setAlias] = useState(""); // Ajout de l'état pour alias
  const [password, setPassword] = useState(""); // Ajout de l'état pour password
  const navigate = useNavigate();

  const handleAliasChange = (event) => setAlias(event.target.value); // Ajout de la fonction pour gérer le changement de alias
  const handlePasswordChange = (event) => setPassword(event.target.value); // Ajout de la fonction pour gérer le changement de password

  const handleFetch = async (data) => {
    const response = await fetch("http://localhost:3310/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Login failed");
    } else {
      const res = await response.json();
      console.warn(res);
      localStorage.setItem("token", res.token);
      console.info("Logged", res);
      navigate("/");
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    await handleFetch({ alias, password }); // Utilisation des nouvelles valeurs d'état
  };

  const handleSignUp = () => {
    showRegister();
  };

  return (
    <form id="loginForm" onSubmit={handleLogin}>
      {" "}
      {/* Ajout de onSubmit à la balise form */}
      <h2>Login</h2>
      <div className="form-group">
        <input
          type="text"
          id="alias"
          name="alias"
          placeholder="Alias"
          value={alias} // Utilisation de la nouvelle valeur d'état
          onChange={handleAliasChange} // Utilisation de la nouvelle fonction de gestion du changement
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={password} // Utilisation de la nouvelle valeur d'état
          onChange={handlePasswordChange} // Utilisation de la nouvelle fonction de gestion du changement
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
