const loginReducer = (loginData = null, action) => {
  if (action.type === "SEND_LOGINDATA") {
    return action.payload;
  }
  return loginData;
};

export default loginReducer;
