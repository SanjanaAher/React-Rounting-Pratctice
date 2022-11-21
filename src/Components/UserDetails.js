import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  const userId = params.userid;
  return (
    <div>
      <h1>User Details {userId}</h1>
    </div>
  );
};

export default UserDetails;
