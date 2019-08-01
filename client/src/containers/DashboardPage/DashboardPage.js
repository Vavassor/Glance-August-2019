import ComposeForm from "../ComposeForm";
import {connect} from "react-redux";
import {getPost} from "../../actions";
import {Icon, Layout} from "antd";
import Nav from "../Nav";
import React, {Component} from "react";
import Timeline from "../../components/Timeline";
import {Link, withRouter} from "react-router-dom";

class DashboardPage extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getPost());
  }

  render() {
    const {posts} = this.props;

    return (
      <Layout>
        <Layout.Sider>
          <Nav />
        </Layout.Sider>

        <Layout>
          <Layout.Header className="layout-header">
            <h1>Timeline</h1>
          </Layout.Header>

          <Layout.Content className="layout-content">
            <ComposeForm />
            <Timeline posts={posts} />
          </Layout.Content>

          <Layout.Footer>
            <Link to="https://github.com/Vavassor/Glance"><Icon type="github" /> Github</Link>
          </Layout.Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.timeline.posts,
  };
};

export default withRouter(connect(mapStateToProps)(DashboardPage));