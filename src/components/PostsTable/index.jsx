import React, { useEffect, useState } from "react";
import Table from "../Table";
import { COLUMNS_POST } from "../../constant/post";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../router/paths";
import axios from "axios";
import { API_URL } from "../../config/api";
import Container from "../Container";

const PostsTable = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `${API_URL}/posts`
        );
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleEditPost = (id) => {
    console.log("Edit Post : ", id);
    navigate(PATHS.POST.EDIT.replace(':id', id))
  };
  
  const handleDeletePost = async (id) => {
    console.log("Delete Post : ", id);
    try{
      await axios.delete(`${API_URL}/posts/${id}`)
      setPosts(posts.filter(post => post.id !== id))
    }catch(err) {
      setError(err.message)
    }finally {
      setIsLoading(false)
    }
  };
  
  const handleViewPost = (post) => {
    console.log(post);
    navigate(PATHS.POST.VIEW.replace(':id', post.id))
  };

  return (
    <>
      <button onClick={() => navigate(PATHS.POST.CREATE)}>Create Post</button>
      <Table
        columns={COLUMNS_POST(handleEditPost, handleDeletePost)}
        data={posts}
        isLoading={isLoading}
        onRowClick={handleViewPost}
      />
    </>
  );
};

// class PostsTable extends Component {
//   componentDidMount() {
//     this.setState({ posts: POSTS, isLoading: false });
//   }

//   handleEditPost = (id) => {
//     console.log("Edit Post : ", id);
//   };

//   handleDeletePost = (id) => {
//     console.log("Delete Post : ", id);
//   };

//   handleViewPost = (post) => {
//     console.log(post);
//     this.setState({ postId: post.id });
//   };

//   render() {
//     return (
//       <div>
//         <Table
//           columns={COLUMNS_POST(this.handleEditPost, this.handleDeletePost)}
//           data={this.state.posts}
//           isLoading={this.state.isLoading}
//           onRowClick={this.handleViewPost}
//         />
//       </div>
//     );
//   }
// }

export default PostsTable;
