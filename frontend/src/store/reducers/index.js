import { combineReducers } from "redux";
import profileData from "./profileDataReducer";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";
import profileDataReducer from "./profileDataReducer";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
  loginData: loginReducer,
  email: signupReducer,
  userData: profileDataReducer,
  posts: postsReducer,
});
export default rootReducer;
