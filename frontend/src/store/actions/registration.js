import { registration } from "../../api/registration";
import history from "../../history";

const setSignUp = (email) => async (dispatch) => {
  const response = await registration(email);
  const data = await JSON.parse(response.config.data);
  dispatch({ type: "SEND_EMAIL", payload: data });
  history.push("/congratulations");
};

export default setSignUp;


