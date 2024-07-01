import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectToken } from "../redux/features/auth/authSlice";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const token = useSelector(selectToken);
console.log(token);
  if (!token) {
    return (
      <Navigate
        to="/login"
        replace={true}
        state={{ pathName: location.pathname }}
      />
    );
  }

  return children;
};

export default PrivateRoute;
