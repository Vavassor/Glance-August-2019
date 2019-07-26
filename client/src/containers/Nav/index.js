import React from "react";
import {Link} from "react-router-dom";

export default function Nav(props) {
  return (
    <header>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}