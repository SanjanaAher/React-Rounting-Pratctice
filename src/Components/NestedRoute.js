import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NestedRoute = () => {
  return (
    <div>
      <input type="search" placeholder="serach here" />

      <nav className="secondary">
        <NavLink to="featured">featured</NavLink>
        <NavLink to="New">New</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default NestedRoute;
