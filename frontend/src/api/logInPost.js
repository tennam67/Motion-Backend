import axios from "axios";

// const baseURL = "https://motion.propulsion-home.ch/backend/";
// const data = {
//   email: "calvo.ezequias@gmail.com",
//   password: "1234",
// };
const baseURL = "http://0.0.0.0:8000/backend/";

export const loginPost = async (data) => {
  const response = await axios.post(`${baseURL}api/auth/token/`, data);
  return response;
};



// USING FETCH
// export const loginPost = async () => {
//   const response = await fetch(`${baseURL}api/auth/token/`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   const content = await response.json();

//   console.log(content);
// };
