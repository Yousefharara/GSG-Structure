import React, { Component } from "react";
import PostForm from "../../components/PostForm";
import Container from "../../components/Container";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { PATHS } from "../../router/paths";

class EditPostPage extends Component {
  state = {
    post: null,
    isLoading: true,
    isGoToListPost: false,
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${this.props?.params?.id}`
      );
      this.setState({ post: data });
    } catch (err) {
      this.setState({ err: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleEditPost = async (body) => {
    this.setState({ isLoading: true });
    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${this.props?.params?.id}`,
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
          <p>Editing Post</p>
          <PostForm
            post={this.state.post}
            handleSubmit={this.handleEditPost}
            isLoading={this.state.isLoading}
          />
        </Container>
        {this.state.isGoToListPage && <Navigate to={PATHS.POST.ROOT} />}
      </div>
    );
  }
}

export default EditPostPage;
