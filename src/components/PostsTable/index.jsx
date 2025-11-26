import { useEffect } from "react";
import Table from "../Table";
import { COLUMNS_POST } from "../../constant/post";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { API_URL } from "../../config/api";
import UseApi from "../../hooks/useApi";

const PostsTable = () => {
  const navigate = useNavigate();
  const { data, isLoading, get, del } = UseApi(`${API_URL}/posts`);

  useEffect(() => {
    get();
  }, []);

  const handleEditPost = (id) => {
    console.log("Edit Post : ", id);
    navigate(PATHS.POST.EDIT.replace(":id", id));
  };

  const handleDeletePost = async (id) => {
    console.log("Delete Post : ", id);
    del(id);
  };

  const handleViewPost = (post) => {
    console.log(post);
    navigate(PATHS.POST.VIEW.replace(":id", post.id));
  };

  return (
    <>
      <button onClick={() => navigate(PATHS.POST.CREATE)}>Create Post</button>
      <Table
        columns={COLUMNS_POST(handleEditPost, handleDeletePost)}
        data={data}
        isLoading={isLoading}
        onRowClick={handleViewPost}
      />
    </>
  );
};

export default PostsTable;
