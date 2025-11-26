import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UseApi = () => {
  // ! Error in input [ null | [] ]
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const get = async (url, config) => {
    try {
      console.log("From UseApi ", data, " , ", url);
      const res = await axios.get(url, { ...config });
      setIsLoading(true);
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const post = async (url, body, path, config) => {
    try {
      const res = await axios.post(url, body, config);
      setIsLoading(true);
      setData((prev) => [...prev, res.data]);
      setMessage("Success !!");
      if(path) {
        navigate(path);
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const patch = async (url, body, path, config) => {
    try {
      const res = await axios.patch(url, body, config);
      setIsLoading(true);
      //   ? Search this
      if (path) {
        navigate(path);
      }
      setData((prev) =>
        prev.map((item) => (item.id === body.id ? res.data : item))
      );
      // setData(res.data)
      setMessage("Success !!");
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const del = async (url, id, config) => {
    try {
      await axios.delete(url, config); 
      setIsLoading(true);
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    isLoading,
    error,
    message,
    get,
    post,
    patch,
    del,
  };
};

export default UseApi;
