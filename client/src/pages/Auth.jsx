import { useState } from "react";
import Register from "../components/authent/Register";
import Login from "../components/authent/Login";

function Auth() {
  const [isRegister, setIsRegister] = useState(false);

  const showRegister = () => {
    setIsRegister(true);
  };

  const showLogin = () => {
    setIsRegister(false);
  };

  return (
    <main>
      {isRegister ? (
        <Register showLogin={showLogin} />
      ) : (
        <Login showRegister={showRegister} />
      )}
    </main>
  );
}

export default Auth;
