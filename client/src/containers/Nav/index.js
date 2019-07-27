import {Menu} from "antd";
import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">Dashboard</Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
      </nav>
    );
  }
}