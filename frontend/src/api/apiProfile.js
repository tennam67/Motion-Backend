import axios from "axios";

const baseURL = "http://0.0.0.0:8000/backend/";

let config = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};
export const apiProfile = async () => {
  const result = await axios.get(`${baseURL}api/users/me/`, config);
  return result.data;
};

// to update we need to send a key value pair of each field we want to change
// working
export const updateProfile = async (updateData) => {
  const result = await axios.patch(
    `${baseURL}api/users/me/`,
    updateData,
    config
  );
  return result.data;
};
