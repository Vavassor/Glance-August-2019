import {Button, Card, Form, Input} from "antd";
import {connect} from "react-redux";
import {createPost} from "../../actions";
import React, {Component} from "react";

class ComposeForm extends Component {
  componentDidMount() {
    // To disable the submit button at the beginning.
    this.props.form.validateFields();
  }

  onSubmit = (event) => {
    event.preventDefault();

    const {dispatch} = this.props;

    this.props.form.validateFields((error, values) => {
      if (!error) {
        const post = {
          content: values["content"],
          title: values["title"],
        };
        dispatch(createPost(post));
      }
    });
  };

  render() {
    const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

    const hasErrors = (fieldsError) => {
      return Object
        .keys(fieldsError)
        .some(field => fieldsError[field]);
    };

    const titleError = isFieldTouched("title") && getFieldError("title");
    const contentError = isFieldTouched("content") && getFieldError("content");

    return (
      <Card title="Compose">
        <Form layout="vertical" onSubmit={this.onSubmit}>
          <Form.Item
            label="Title"
            validateStatus={titleError ? "error" : ""}
            help={titleError || ""}
          >
            {getFieldDecorator("title", {
              rules: [
                {
                  required: true,
                  message: "Please enter a title.",
                },
              ],
            })(
              <Input />
            )}
          </Form.Item>

          <Form.Item
            label="Content"
            validateStatus={contentError ? "error" : ""}
            help={contentError || ""}
          >
            {getFieldDecorator("content", {
              rules: [
                {
                  required: true,
                  message: "Please enter post content.",
                },
              ],
            })(
              <Input.TextArea rows={3} />
            )}
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              disabled={hasErrors(getFieldsError())}
            >
              Post
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

const WrappedComposeForm = Form.create({name: "compose"})(ComposeForm);
export default connect()(WrappedComposeForm);