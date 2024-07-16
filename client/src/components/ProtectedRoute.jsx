/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ConnexionContext } from "../Contextes/ConnexionContexte";

function ProtectedRoute({ element, adminOnly }) {
  const { isConnected, isAdmin } = useContext(ConnexionContext);

  if (!isConnected) {
    return <Navigate to="/auth" replace />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/profile" replace />;
  }

  return element;
}

export default ProtectedRoute;
