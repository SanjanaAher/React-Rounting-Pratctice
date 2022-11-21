import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

const Navbar = () => {
  const navstylelink = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  const auth = useAuth();
  return (
    <nav className="primary">
      <NavLink style={navstylelink} to="/">
        Home
      </NavLink>
      <NavLink style={navstylelink} to="/about">
        About
      </NavLink>
      <NavLink style={navstylelink} to="/products">
        Products
      </NavLink>
      <NavLink style={navstylelink} to="/profile">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={navstylelink} to="/login">
          {" "}
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
