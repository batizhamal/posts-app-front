import api from "@/api";
import errorApi from "@/api/errors";

export const getPosts = async (params) => {
  try {
    const response = await api.get(`/posts`, { params });
    return response.data;
  } catch (error) {
    throw error.response;
  }
};

export const getPostById = async (id) => {
  try {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error.response;
  }
};

export const addPost = async (post) => {
  try {
    await api.post(`/posts`, post);
    // await errorApi.post(`/401`);
  } catch (error) {
    throw error.response;
  }
};

export const deletePost = async (id) => {
  try {
    await api.delete(`/posts/${id}`);
    // await errorApi.delete(`/401`);
  } catch (error) {
    throw error.response;
  }
};

export const editPost = async (id, post) => {
  try {
    await api.put(`/posts/${id}`, post);
    // await errorApi.put(`/401`);
  } catch (error) {
    throw error.response;
  }
};
