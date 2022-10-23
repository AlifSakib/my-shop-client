import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../AuthContext/AuthContext";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthProvider);

  if (loading) {
    return (
      <div className="text-2xl flex justify-center items-center">
        Loading . . .
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
