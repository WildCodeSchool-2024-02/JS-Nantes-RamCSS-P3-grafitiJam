import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ConnexionContext } from "../Contextes/ConnexionContexte";

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ element, adminOnly }) {
  const { isConnected, isAdmin } = useContext(ConnexionContext);

  // Redirect to login if not connected
  if (!isConnected) {
    return <Navigate to="/auth" replace />;
  }

  // Redirect to profile if adminOnly route and not admin
  if (adminOnly && !isAdmin) {
    return <Navigate to="/profile" replace />;
  }

  return element;
}

export default ProtectedRoute;
