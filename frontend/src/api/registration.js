import axios from "axios";

// const baseURL = "https://motion.propulsion-home.ch/backend/";
// {
//   email: "agustin@gmail";
// }
const baseURL = "http://0.0.0.0:8000/backend/";

export const registration = async (data) => {
  const response = await axios.post(`${baseURL}api/auth/registration/`, data);
  return response;
};
