import { loginPost } from "../../api/logInPost";

const logIn = (credentials, history) => async (dispatch) => {
  const response = await loginPost(credentials);
  dispatch({ type: "SEND_LOGINDATA", payload: response.data.access });
  localStorage.setItem("token", response.data.access);
  history.push("/feed");
};

export default logIn;
