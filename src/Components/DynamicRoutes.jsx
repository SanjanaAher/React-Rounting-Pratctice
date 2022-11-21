import React from "react";
import { Outlet, NavLink, useSearchParams } from "react-router-dom";

const DynamicRoutes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter ") === "active";
  return (
    <div>
      <NavLink to="1">User 1</NavLink>
      <NavLink to="2">User 2</NavLink>
      <NavLink to="3">User 3</NavLink>
      {/* <h2> User 1</h2>
      <h2> User 2</h2>
      <h2> User 3</h2> */}
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset filter</button>
      </div>
      {showActiveUsers ? (
        <h2>Showing Active Users</h2>
      ) : (
        <h2>Showing All users</h2>
      )}
    </div>
  );
};

export default DynamicRoutes;
