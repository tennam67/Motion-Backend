import axios from "axios";

// const BASE_URL = "https://motion.propulsion-home.ch/backend/api/social/";

const BASE_URL = "http://0.0.0.0:8000/backend/api/";
let token = localStorage.getItem("token");
let config = {
  headers: {
    Authorization: "Bearer " + token,
  },
};

export const getPostsApi = async (url) => {
  if (!token) return new Error("Log in please");
  const response = await axios.get(`${BASE_URL}${url}`, config);
  return response.data.results;
};

export const createPostApi = async (data, URL) => {
  if (!token) return new Error("Log in please");
  let url = `${BASE_URL}${URL}`;
  let dataToSend = data;
  if (!data.images.length){
    dataToSend = {content: data.content}
  }
  const response = await axios.post(
    url,
    dataToSend,
    config
  );
  return response.data;
};

// working. Getting status 200 without any data. Check what they mean with user. Username?
export const searchApi = async (term) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
    params: term,
  };
  if (!token) return new Error("Log in please");
  const response = await axios.get(
    `${BASE_URL}posts/?search=<str:${term}>`,
    config
  );
  console.log(response, "response from search");
  //   return response.data;
};

export const deletePost = async (id) => {
  const response = await axios.delete(`${BASE_URL}posts/${id}/`, config);
  console.log(response, "response from delete api");
};

// api/social/posts/toggle-like/int:post_id>/
// export toggleLike = () => {
//   const response = await axios.post(
//     url,
//     { content: data.content, images: data.images },
//     config
//   );
//   return response.data;
// }
