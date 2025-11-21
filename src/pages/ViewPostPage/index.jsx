import React, { Component } from "react";
import WithParams from "../../components/WithParams";

class ViewPostPage extends Component {
  render() {
    const { id } = this.props.params;
    return (
      <div>
        <p>View Post Page !!</p>
        <p>ID : {id}</p>
      </div>
    );
  }
}

export default WithParams(ViewPostPage);
