const signupReducer = (email = "", action) => {
  if (action.type === "SEND_EMAIL") {
    return action.payload;
  }
  return email;
};

export default signupReducer;
