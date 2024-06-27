import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Register.css";

function Register() {
  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
    const emailRef = useRef();

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Appel à l'API pour créer un nouvel utilisateur
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/user`,
                {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        alias,
                        email: emailRef.current.value,
                        password,
                    }),
                }
            );

            // Redirection vers la page de connexion si la création réussit
            if (response.status === 201) {
                navigate("/login");
            } else {
                // Log des détails de la réponse en cas d'échec
                console.info(response);
            }
        } catch (err) {
            // Log des erreurs possibles
            console.error(err);
        }
    };

  // Rest of the code remains the same

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
        />

      </div>
      <div className="form-group">
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
      </div>
      <div className="form-buttons">
          <button type="submit" id="registerButton">

              Register
          </button>
      </div>
    </form>
  );
}

export default Register;
