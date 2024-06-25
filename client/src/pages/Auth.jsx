import { useState } from "react";
import Register from "../components/authent/Register";
import Login from "../components/authent/Login";

function Auth() {
  const [isRegister, setIsRegister] = useState(false);

  const showRegister = () => {
    setIsRegister(true);
  };

  return (
    <main>
      <h1>Connect you</h1>
      {isRegister ? <Register /> : <Login showRegister={showRegister} />}
    </main>
  );
}

export default Auth;
