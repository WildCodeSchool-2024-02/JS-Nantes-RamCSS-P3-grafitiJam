import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Register.css";

function Register() {
  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

    // eslint-disable-next-line no-shadow
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  };

  const handleRegister = () => {
    if (!validatePassword(password)) {
        // eslint-disable-next-line no-alert
      alert(
        "Password must contain at least 8 characters, 1 uppercase letter, 1 number, and 1 special character"
      );
      return;
    }

    if (password !== confirmPassword) {
        // eslint-disable-next-line no-alert
      alert("Passwords do not match");
      return;
    }

    // Add register logic here

    // Redirect to home page after successful registration
    navigate("/");
  };

  // Rest of the code remains the same

  return (
    <form id="registerForm">
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
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-buttons">
        <button type="button" id="registerButton" onClick={handleRegister}>
          Register
        </button>
      </div>
    </form>
  );
}

export default Register;
