import React, { Component } from "react";
import Container from "../../components/Container";
import PostForm from "../../components/PostForm";
import { Navigate } from "react-router-dom";
import { PATHS } from "../../router/paths";
import axios from "axios";

class CreatePostPage extends Component {

    state = {
        isLoading: false
    }

  handleCreatePost = async (body) => {
    this.setState({ isLoading: true });
    try {
      const res = await axios.post(
        `https://jsonplaceholder.typicode.com/posts}`,
        body
      );
      this.setState({
        post: res.data,
        isGoToListPage: true,
      });
    } catch (err) {
      this.setState({ err: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <div>
        <Container>
          <p>Creating Post</p>
          <PostForm
            handleSubmit={this.handleCreatePost}
            isLoading={this.state.isLoading}
          />
        </Container>
        {this.state.isGoToListPage && <Navigate to={PATHS.POST.ROOT} replace />}
      </div>
    );
  }
}

export default CreatePostPage;
