import api from "@/api";

export const getPosts = async () => {
  try {
    const response = await api.get(`/posts`);
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
  } catch (error) {
    throw error.response;
  }
};

export const deletePost = async (id) => {
  try {
    await api.delete(`/posts/${id}`);
  } catch (error) {
    throw error.response;
  }
};

export const editPost = async (id, post) => {
  try {
    await api.put(`/posts/${id}`, post);
  } catch (error) {
    throw error.response;
  }
};
