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

    // Update password validation states
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
      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
      }

      // Prepare the data to be sent
      const data = {
        alias,
        email: emailRef.current.value,
        hashed_password: password,
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Registration error:", errorData);
        setErrorMessage(errorData.message);
      } else {
        showLogin();
      }
    } catch (err) {
      console.error("Registration failed:", err);
      setErrorMessage("Failed to register. Please try again later.");
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
            Password must contain:
            <span style={{ color: hasLowerCase ? "green" : "red" }}>
              {" "}
              lowercase letter,
            </span>
            <span style={{ color: hasUpperCase ? "green" : "red" }}>
              {" "}
              uppercase letter,
            </span>
            <span style={{ color: hasNumber ? "green" : "red" }}> number,</span>
            <span style={{ color: hasSpecialChar ? "green" : "red" }}>
              {" "}
              special character.
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

      {password === confirmPassword ? "✅" : "❌"}
      <div className="form-group">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          onChange={(e) => setAcceptedTerms(e.target.checked)}
        />
        <label htmlFor="terms">
          I accept the <a href="/terms-of-service">terms of service</a>
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
