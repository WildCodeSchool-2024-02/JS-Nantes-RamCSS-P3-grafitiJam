import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Register.css";

// eslint-disable-next-line react/prop-types
function Register({ showLogin }) {
  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPasswordTouched, setIsConfirmPasswordTouched] =
    useState(false);
  const emailRef = useRef();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validEmail = emailPattern.test(email);
  const hasAtSymbol = /@/.test(email);
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[\W_]/.test(password);
  const hasMinLength = password.length >= 8;
  const passwordMatch = password === confirmPassword;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setIsConfirmPasswordTouched(true);
  };

  const handleTermsChange = (event) => {
    setAcceptedTerms(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !validEmail ||
      !passwordMatch ||
      !acceptedTerms ||
      !hasLowerCase ||
      !hasUpperCase ||
      !hasNumber ||
      !hasSpecialChar ||
      !hasMinLength
    ) {
      setErrorMessage("Please correct the errors in the form.");
      return;
    }

    try {
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
          onChange={handleEmailChange}
          required
        />
        <div id="emailCriteria">
          <p>
            Email must contain:
            <span style={{ color: hasAtSymbol ? "green" : "red" }}>
              {" "}
              @ symbol
            </span>
          </p>
        </div>
        {!validEmail && email !== "" && (
          <p className="error-message">Invalid email format.</p>
        )}
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
              special character,
            </span>
            <span style={{ color: hasMinLength ? "green" : "red" }}>
              {" "}
              at least 8 characters.
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
      {isConfirmPasswordTouched && (
        <p>
          {passwordMatch ? (
            <span style={{ color: "green" }}>✅ Passwords match</span>
          ) : (
            <span style={{ color: "red" }}>❌ Passwords do not match</span>
          )}
        </p>
      )}
      <div className="form-group">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          onChange={handleTermsChange}
          checked={acceptedTerms}
        />
        <label htmlFor="terms">
          I accept the <Link to="/terms-of-service">terms of service</Link>
        </label>
        {!acceptedTerms && (
          <p className="error-message" style={{ color: "red" }}>
            You must accept the terms of service.
          </p>
        )}
      </div>
      <div className="form-buttons">
        <button
          type="submit"
          id="registerButton"
          disabled={
            !hasLowerCase ||
            !hasUpperCase ||
            !hasNumber ||
            !hasSpecialChar ||
            !passwordMatch ||
            !acceptedTerms ||
            !validEmail ||
            !hasMinLength
          }
        >
          Register
        </button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
}

export default Register;
