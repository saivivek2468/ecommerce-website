import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    toast("You should first login");
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
