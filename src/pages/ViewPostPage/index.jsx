import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { API_URL } from "../../config/api";
import UseApi from "../../hooks/useApi";

const ViewPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { item, getById, isLoading, error } = UseApi(`${API_URL}/posts`);

  useEffect(() => {
    getById(id);
  }, [id]);

  if (error?.status === 404) {
    return <Navigate to={PATHS.ERRORS.PAGE_NOT_FOUND} replace={true} />;
  } else {
    return (
      <div>
        {console.log("Data From View Page ", item)}
        {isLoading && <p>Loading ...</p>}
        {!isLoading && (
          <>
            <p>View Post Page !!</p>
            <p>{item.title}</p>
            <p>ID : {item.id}</p>
            <button
              onClick={() => navigate(PATHS.POST.EDIT.replace(":id", item.id))}
            >
              Edit
            </button>
          </>
        )}
      </div>
    );
  }
};
export default ViewPostPage;
