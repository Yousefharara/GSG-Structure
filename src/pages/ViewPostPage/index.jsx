import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { API_URL } from "../../config/api";
import UseApi from "../../hooks/useApi";

const ViewPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, get, isLoading, error } = UseApi();

  useEffect(() => {
    get(`${API_URL}/posts/${id}`);
  }, [id]);

  if (error?.status === 404) {
    return <Navigate to={PATHS.ERRORS.PAGE_NOT_FOUND} replace={true} />;
  } else {
    return (
      <div>
        {console.log("Data From View Page ", data)}
        {isLoading && <p>Loading ...</p>}
        {!isLoading && (
          <>
            <p>View Post Page !!</p>
            <p>{data.title}</p>
            <p>ID : {data.id}</p>
            <button
              onClick={() => navigate(PATHS.POST.EDIT.replace(":id", data.id))}
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