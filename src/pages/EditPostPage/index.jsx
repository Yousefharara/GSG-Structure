import React, { useEffect, useState } from "react";
import PostForm from "../../components/PostForm";
import Container from "../../components/Container";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { API_URL } from "../../config/api";

const EditPostPage = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${API_URL}/posts/${id}`);
        console.log(data);
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  const handleEditPost = async (body) => {
    setIsLoading(true);
    try {
      const { data } = await axios.patch(`${API_URL}/posts/${id}`, body);
      setPost(data);
      console.log("is Updated !! ?", data);
      navigate(PATHS.POST.ROOT);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Container>
        <p>Editing Post</p>
        <PostForm
          _post={post}
          handleSubmit={handleEditPost}
          isLoading={isLoading}
        />
      </Container>
    </div>
  );
};

// class EditPostPage extends Component {
//   state = {
//     post: null,
//     isLoading: true,
//     isGoToListPost: false,
//   };

//   async componentDidMount() {
//     try {
//       const { data } = await axios.get(
//         `https://jsonplaceholder.typicode.com/posts/${this.props?.params?.id}`
//       );
//       this.setState({ post: data });
//     } catch (err) {
//       this.setState({ err: err.message });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   }

//   handleEditPost = async (body) => {
//     this.setState({ isLoading: true });
//     try {
//       const res = await axios.put(
//         `https://jsonplaceholder.typicode.com/posts/${this.props?.params?.id}`,
//         body
//       );
//       this.setState({
//         post: res.data,
//         isGoToListPage: true,
//       });
//     } catch (err) {
//       this.setState({ err: err.message });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   render() {
//     return (
//       <div>
//         <Container>
//           <p>Editing Post</p>
//           <PostForm
//             post={this.state.post}
//             handleSubmit={this.handleEditPost}
//             isLoading={this.state.isLoading}
//           />
//         </Container>
//         {this.state.isGoToListPage && <Navigate to={PATHS.POST.ROOT} />}
//       </div>
//     );
//   }
// }

export default EditPostPage;
