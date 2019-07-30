import {Card, Icon, Layout} from "antd";
import Nav from "../Nav";
import React from "react";
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
            <p>This is a site.</p>
          </Card>
        </Layout.Content>

        <Layout.Footer>
          <a href="https://github.com/Vavassor/Glance"><Icon type="github" /> Github</a>
        </Layout.Footer>
      </Layout>
    </Layout>
  );
}