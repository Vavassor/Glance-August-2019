import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

export default function App(props) {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <Route path="/" exact component={Dashboard} />
      <Route path="/about" component={About} />
    </Router>
  );
}