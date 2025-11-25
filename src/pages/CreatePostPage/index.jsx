import React, { useState } from "react";
import Container from "../../components/Container";
import PostForm from "../../components/PostForm";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../router/paths";
import axios from "axios";
import { API_URL } from "../../config/api";

const CreatePostPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCreatePost = async (body) => {
    setIsLoading(true);
    try {
      await axios.post(`${API_URL}/posts`, body);
      console.log('body is ', body);
      navigate(PATHS.POST.ROOT);
    } catch (err) {
      setError(err.message);
      console.log('Error is ', error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div>
      <Container>
        <p>Creating Post</p>
        <PostForm handleSubmit={handleCreatePost} isLoading={isLoading} />
      </Container>
    </div>
  );
};

// class CreatePostPage extends Component {
//   handleCreatePost = async (body) => {
//     this.setState({ isLoading: true });
//     try {
//       const res = await axios.post(
//         `https://jsonplaceholder.typicode.com/posts}`,
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
// 
//   render() {
//     return (
//       <div>
//         <Container>
//           <p>Creating Post</p>
//           <PostForm
//             handleSubmit={this.handleCreatePost}
//             isLoading={this.state.isLoading}
//           />
//         </Container>
//         {this.state.isGoToListPage && <Navigate to={PATHS.POST.ROOT} replace />}
//       </div>
//     );
//   }
// }

export default CreatePostPage;