import React from "react";
import { useNavigate } from "react-router-dom";
const OderPlaced = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Your Oder Has been placed</h1>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
};

export default OderPlaced;
