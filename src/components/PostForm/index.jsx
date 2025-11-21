import React, { Component } from "react";
import "./style.css";

const inputsArray = [
  {
    id: "title",
    name: "title",
    type: "text",
    label: "Title",
  },
  {
    id: "body",
    name: "body",
    type: "textarea",
    label: "Body",
  },
];

class PostForm extends Component {
  state = {
    title: "",
    body: "",
    isGetFirstTime: false,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.post && !state.isGetFirstTime) {
      return {
        title: props.post.title,
        body: props.post.body,
        isGetFirstTime: true,
      };
    }
    return null;
  }

  handleOnChangeInputs = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      body: this.state.body,
    };
    this.props.handleSubmit(data);
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        {inputsArray.map((input) => (
          <div>
            <label htmlFor={input.id}>{input.label}</label>
            {input.type === "textarea" ? (
              <textarea
                name={input.name}
                value={this.state[input.id]}
                id={input.id}
                rows={5}
                onChange={this.handleOnChangeInputs}
              />
            ) : (
              <input
                name={input.name}
                id={input.id}
                value={this.state[input.id]}
                onChange={this.handleOnChangeInputs}
              />
            )}
          </div>
        ))}
        <button type="submit">
          {this.props.isLoading ? "Loading ..." : "Submit"}
        </button>
      </form>
    );
  }
}

export default PostForm;
