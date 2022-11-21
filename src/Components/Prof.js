import React from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

const Prof = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      <h1>Welcome {auth.user}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Prof;
