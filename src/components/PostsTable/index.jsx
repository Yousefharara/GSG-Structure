import React, { Component } from "react";
import Table from "../Table";
import { COLUMNS_POST } from "../../constant/post";
import POSTS from "../../mock/Posts";
import { Navigate } from "react-router-dom";
import { PATHS } from "../../router/paths";

class PostsTable extends Component {
  state = {
    posts: [],
    isLoading: true,
  };

  componentDidMount() {
    this.setState({ posts: POSTS, isLoading: false });
  }

  handleEditPost = (id) => {
    console.log("Edit Post : ", id);
    this.setState({ editId: id });
  };

  handleDeletePost = (id) => {
    console.log("Delete Post : ", id);
  };

  handleViewPost = (post) => {
    console.log(post);
    this.setState({ postId: post.id });
  };

  render() {
    return (
      <div>
        <Table
          columns={COLUMNS_POST(this.handleEditPost, this.handleDeletePost)}
          data={this.state.posts}
          isLoading={this.state.isLoading}
          onRowClick={this.handleViewPost}
        />
        {this.state.postId && <Navigate to={`${this.state.postId}`} />}
        {this.state.editId && (
          <Navigate
            to={PATHS.POST.EDIT.replace(":id", this.state.editId)}
            replace
          />
        )}
      </div>
    );
  }
}

export default PostsTable;
