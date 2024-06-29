import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ConnexionProvider } from './Contextes/ConnexionContexte';

function App() {
    return (
        <ConnexionProvider>
            <Navbar />
            <Outlet />
        </ConnexionProvider>
    );
}

export default App;
