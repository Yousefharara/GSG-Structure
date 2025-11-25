import React, { Component, useEffect, useState } from "react";
import WithParams from "../../components/WithParams";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { API_URL } from "../../config/api";

const ViewPostPage = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${API_URL}/posts/${id}`);
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return (
    <div>
      {isLoading && <p>Loading ...</p>}
      {!isLoading && (
        <>
          <p>View Post Page !!</p>
          <p>{post.title}</p>
          <p>ID : {post.id}</p>
          <button
            onClick={() => navigate(PATHS.POST.EDIT.replace(":id", post.id))}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};
export default ViewPostPage;

// class ViewPostPage extends Component {
//   render() {
//     const { id } = this.props.params;
//     return (
//       <div>
//         <p>View Post Page !!</p>
//         <p>ID : {id}</p>
//       </div>
//     );
//   }
// }

// export default WithParams(ViewPostPage);
