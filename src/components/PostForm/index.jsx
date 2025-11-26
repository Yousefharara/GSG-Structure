import React, { useEffect, useState } from "react";
import "./style.css";

const inputsArray = [
  {
    id: "title",
    name: "title",
    type: "text",
    label: "Title",
  },
  {
    id: "body",
    name: "body",
    type: "textarea",
    label: "Body",
  },
];

const PostForm = ({ _post, handleSubmit, isLoading }) => {
  const [post, setPost] = useState({});
  useEffect(() => {
    if (_post) {
      setPost({
        title: _post.title,
        body: _post.body,
      });
    }
  }, [_post]);

  const handleOnChangeInputs = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
    console.log(post);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: post.title,
      body: post.body,
    };
    // ? handleCreatePost()
  // ?const handleCreatePost = async (body) => {
  // ?  post(`${API_URL}/posts`, body, PATHS.POST.ROOT);
  // ?};
    handleSubmit(data);
  };

  return (
    <form onSubmit={handleOnSubmit} className="form__edit__data">
      {inputsArray.map((input) => (
        <div key={input.id}>
          <label htmlFor={input.id}>{input.label}</label>
          {input.type === "textarea" ? (
            <textarea
              name={input.name}
              value={post[input.id] || ""}
              id={input.id}
              rows={5}
              onChange={handleOnChangeInputs}
            />
          ) : (
            <input
              name={input.name}
              id={input.id}
              value={post[input.id] || ""}
              onChange={handleOnChangeInputs}
            />
          )}
        </div>
      ))}
      <button type="submit">{isLoading ? "Loading ..." : "Submit"}</button>
    </form>
  );
};

export default PostForm;
