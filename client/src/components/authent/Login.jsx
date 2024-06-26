import "./styles/Login.css";

// eslint-disable-next-line react/prop-types
function Login({ showRegister }) {
  const handleLogin = () => {
    // Add login logic here
  };

  const handleSignUp = () => {
    showRegister();
  };

  return (
    <form id="loginForm">
      <h2>Login</h2>
      <div className="form-group">
        {/* Placeholder text instead of label */}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="form-group">
        {/* Placeholder text instead of label */}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required
        />
      </div>
      <div className="form-buttons">
        <button type="button" id="loginButton" onClick={handleLogin}>
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
