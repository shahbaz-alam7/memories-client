import axios from "axios";
// const API = axios.create({ baseURL: "http://localhost:5000" });
const API = axios.create({
//   baseURL: "https://memories-backend-production-e1c0.up.railway.app",
  baseURL:"https://memories-backend-knxx.onrender.com"
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = ` Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPost = (id) => API.get(`/posts/${id}`);

// export const fetchPostBySearch = (query) =>
//   API.get(
//     `/posts/search?searchQuery=${query.search || "none"}&tags=${query.tags}`
//   );
export const fetchPostBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const createPost = (newPost) => API.post("/posts", newPost);

export const updatePost = (id, updatedData) =>
  API.patch(`/posts/${id}`, updatedData);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const comment = (value, id) =>
  API.post(`/posts/${id}/commentPost`, { value });

export const signUp = (formData) => API.post(`/user/signup`, formData);

export const signIn = (formData) => API.post(`/user/signin`, formData);
