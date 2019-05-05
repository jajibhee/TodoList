import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
      <h1>BheeList</h1>
    </header>
  );
}
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center"
};
const linkStyle = {
  color: "#fff"
};

export default Header;
