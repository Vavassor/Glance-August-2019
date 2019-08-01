import {Card, Icon, Layout} from "antd";
import Nav from "../Nav";
import React from "react";
import {Link} from "react-router-dom";
import "./AboutPage.css";

export default function AboutPage(props) {
  return (
    <Layout>
      <Layout.Sider>
        <Nav />
      </Layout.Sider>

      <Layout>
        <Layout.Header className="layout-header">
          <h1>About</h1>
        </Layout.Header>
        
        <Layout.Content className="layout-content">
          <Card className="about-card" title="About">
            <p>Glance is a social media network app for sharing media and art. The project is open source and you can contribute to the project on <Link to="https://github.com/Vavassor/Glance">Github</Link>.</p>
          </Card>
        </Layout.Content>

        <Layout.Footer>
          <Link to="https://github.com/Vavassor/Glance"><Icon type="github" /> Github</Link>
        </Layout.Footer>
      </Layout>
    </Layout>
  );
}