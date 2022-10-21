import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Hooks
          </Link>
          <Link to="/" className="navbar">
            Usestate
          </Link>
          <Link to="/useeffect" className="navbar">
            UseEffect
          </Link>
          <Link to="/useref" className="navbar">
            UseRef
          </Link>
          <Link to="/usecon" className="navbar">
            UseContext
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
