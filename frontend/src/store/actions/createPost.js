import { createPostApi } from "../../api/apiPosts";

const createPost = (newPost) => async (dispatch) => {
  console.log("something");
  const response = await createPostApi(newPost, "posts/");
  dispatch({ type: "CREATE_POST", payload: response });
};

export default createPost;
