import "./styles/Login.css";

function Login() {
  const handleLogin = () => {
    // Add login logic here
  };

  const handleSignUp = () => {
    // Add sign up logic here
  };

  return (
    <form id="loginForm">
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
