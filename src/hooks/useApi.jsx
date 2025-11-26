import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UseApi = (url) => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const get = async (config) => {
    try {
      const res = await axios.get(url, { ...config });
      setIsLoading(true);
      setData(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getById = async (id, config) => {
    try {
      const res = await axios.get(`${url}/${id}`, { ...config });
      setIsLoading(true);
      setItem(res.data)
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const post = async (body, path, config) => {
    try {
      const res = await axios.post(url, body, config);
      setIsLoading(true);
      setData((prev) => [...prev, res.data]);
      setMessage("Success !!");
      if (path) {
        navigate(path);
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const patch = async (body, path, config) => {
    try {
      const res = await axios.patch(url, body, config);
      setIsLoading(true);
      if (path) {
        navigate(path);
      }
      setData((prev) =>
        prev.map((item) => (item.id === body.id ? res.data : item))
      );
      setMessage("Success !!");
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const del = async (id, config) => {
    try {
      await axios.delete(`${url}/${id}`, config);
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
    item,
    get,
    post,
    patch,
    del,
    getById
  };
};

export default UseApi;
