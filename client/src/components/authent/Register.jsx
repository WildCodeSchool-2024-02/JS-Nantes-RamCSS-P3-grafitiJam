import { useRef, useState } from "react";
import "./styles/Register.css";

// eslint-disable-next-line react/prop-types
function Register({ showLogin }) {
  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const emailRef = useRef();
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (event) => {
    // eslint-disable-next-line no-shadow
    const password = event.target.value;
    setPassword(password);

    // Mettez à jour les états de validation du mot de passe
    setHasLowerCase(/[a-z]/.test(password));
    setHasUpperCase(/[A-Z]/.test(password));
    setHasNumber(/\d/.test(password));
    setHasSpecialChar(/[\W_]/.test(password));
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Prepare the data to be sent
      const data = {
        alias,
        email: emailRef.current.value,
        hashed_password: password,
      };

      const response = await fetch(`http://localhost:3310/api/user`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.status !== 201) {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      } else {
        showLogin();
      }
    } catch (err) {
      console.error(err);
    }

    if (!acceptedTerms) {
      setErrorMessage("You must accept the terms of service.");
    }
  };

  return (
    <form id="registerForm" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div className="form-group">
        <input
          type="text"
          id="alias"
          name="alias"
          placeholder="Alias"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          ref={emailRef}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
          autoComplete="new-password"
        />
        <div id="passwordCriteria">
          <p>
            Le mot de passe doit contenir :
            <span style={{ color: hasLowerCase ? "green" : "red" }}>
              {" "}
              une lettre minuscule,
            </span>
            <span style={{ color: hasUpperCase ? "green" : "red" }}>
              {" "}
              une lettre majuscule,
            </span>
            <span style={{ color: hasNumber ? "green" : "red" }}>
              {" "}
              un chiffre,
            </span>
            <span style={{ color: hasSpecialChar ? "green" : "red" }}>
              {" "}
              un caractère spécial.
            </span>
          </p>
        </div>
      </div>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        required
      />
      {/* Affichez une indication de progression de validation du mot de passe */}

      {password === confirmPassword ? "✅" : "❌"}
      <div className="form-group">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          onChange={(e) => setAcceptedTerms(e.target.checked)}
        />
        <label htmlFor="terms">
          J'accepte les <a href="/terms-of-service">conditions d'utilisation</a>
        </label>
      </div>
      <div className="form-buttons">
        <button type="submit" id="registerButton">
          Register
        </button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
}

export default Register;
