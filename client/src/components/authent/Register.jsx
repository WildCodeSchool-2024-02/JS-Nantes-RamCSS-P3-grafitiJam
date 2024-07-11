import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Register.css";

// eslint-disable-next-line react/prop-types
function Register({ showLogin }) {
  // State variables to hold form data and validation states
  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPasswordTouched, setIsConfirmPasswordTouched] =
    useState(false);
  const emailRef = useRef(); // Reference for email input field
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Regular expression pattern for validating email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Derived validation states
  const validEmail = emailPattern.test(email); // Check if email matches the pattern
  const hasAtSymbol = /@/.test(email); // Check if email contains '@' symbol
  const hasLowerCase = /[a-z]/.test(password); // Check if password contains a lowercase letter
  const hasUpperCase = /[A-Z]/.test(password); // Check if password contains an uppercase letter
  const hasNumber = /\d/.test(password); // Check if password contains a number
  const hasSpecialChar = /[\W_]/.test(password); // Check if password contains a special character
  const hasMinLength = password.length >= 8; // Check if password has at least 8 characters
  const passwordMatch = password === confirmPassword; // Check if password and confirm password match

  // Event handler for email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Event handler for password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Event handler for confirm password input change
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setIsConfirmPasswordTouched(true);
  };

  // Event handler for terms checkbox change
  const handleTermsChange = (event) => {
    setAcceptedTerms(event.target.checked);
  };

  // Event handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if form data is valid before submitting
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
        showLogin(); // Show login form on successful registration
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
