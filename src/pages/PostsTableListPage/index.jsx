import React, { Component } from "react";
import PostsTable from "../../components/PostsTable";
import Container from "../../components/Container";

class PostsTableListPage extends Component {
  render() {
    return (
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
            width: '100%',
            minHeight: '100vh'
          }}
        >
          <p>Posts Table List Page</p>
          <PostsTable />
        </div>
      </Container>
    );
  }
}

export default PostsTableListPage;
