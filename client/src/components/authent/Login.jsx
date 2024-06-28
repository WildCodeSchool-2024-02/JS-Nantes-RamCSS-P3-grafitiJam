import "./styles/Login.css";

// eslint-disable-next-line react/prop-types
function Login({ showRegister }) {
  // eslint-disable-next-line no-undef
  const [isEmail, setIsEmail] = useState(true);
  // eslint-disable-next-line no-undef
  const [isPassword, setIsPassword] = useState(true);

  const handleFetch = async (data) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      setIsEmail(() => false);
      setIsPassword(() => false);
    } else {
      const res = await response.json();
      localStorage.setItem("token", res.token);
      console.info("Logged", res);
    }
  };

  const handleLogin = async (event) => {
    try {
      event.preventDefault();

      const email = event.target.email.value;
      // eslint-disable-next-line no-undef
      const isEmailValid = emailValidation(email);

      const password = event.target.password.value;
      // eslint-disable-next-line no-undef
      const isPasswordValid = passwordValidation(password);

      setIsEmail(() => isEmailValid);
      setIsPassword(() => isPasswordValid);

      if (isEmailValid && isPasswordValid) {
        await handleFetch({ email, password });
      }
    } catch (error) {
      console.error(error.message);
    }
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
          autoComplete="off"
          onFocus={() => !isEmail && setIsEmail(true)}
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
          autoComplete="off"
          onFocus={() => !isPassword && setIsPassword(true)}
        />
      </div>
      <div className="form-buttons">
        <button type="submit" id="loginButton" onSubmit={handleLogin}>
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
