import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { ConnexionProvider } from "./Contextes/ConnexionContexte";
import "./global.css";

function App() {
  return (
    <ConnexionProvider>
      <Navbar />
      <Outlet />
    </ConnexionProvider>
  );
}

export default App;
