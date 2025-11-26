import { useEffect } from "react";
import PostForm from "../../components/PostForm";
import Container from "../../components/Container";
import { Navigate, useParams } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { API_URL } from "../../config/api";
import UseApi from "../../hooks/useApi";

const EditPostPage = () => {
  const { id } = useParams();

  const { data, isLoading, error, getById, patch } = UseApi(`${API_URL}/posts`);

  useEffect(() => {
    getById(id);
  }, [id]);

  const handleEditPost = async (body) => {
    patch(body, PATHS.POST.ROOT);
  };

  if (error?.status === 404) {
    return <Navigate to={PATHS.ERRORS.PAGE_NOT_FOUND} replace={true} />;
  } else
    return (
      <div>
        {isLoading ? (
          <h1>Is Loading ....</h1>
        ) : (
          <Container>
            <p>Editing Post</p>
            {console.log("Before Form")}
            <PostForm
              _post={data}
              handleSubmit={handleEditPost}
              isLoading={isLoading}
            />
            {console.log("After Form")}
          </Container>
        )}
      </div>
    );
};
export default EditPostPage;
