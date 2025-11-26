import Container from "../../components/Container";
import PostForm from "../../components/PostForm";
import { PATHS } from "../../router/paths";
import { API_URL } from "../../config/api";
import UseApi from "../../hooks/useApi";

const CreatePostPage = () => {
  const { isLoading, post } = UseApi(`${API_URL}/posts`);

  const handleCreatePost = async (body) => {
    post(body, PATHS.POST.ROOT);
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
export default CreatePostPage;
