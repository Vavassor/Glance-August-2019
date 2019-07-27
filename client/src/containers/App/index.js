import AboutPage from "../AboutPage";
import DashboardPage from "../DashboardPage";
import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";

export default function App(props) {
  return (
    <Router>
      <Provider store={props.store}>
        <>
          <Route path="/" exact component={DashboardPage} />
          <Route path="/about" component={AboutPage} />
        </>
      </Provider>
    </Router>
  );
}