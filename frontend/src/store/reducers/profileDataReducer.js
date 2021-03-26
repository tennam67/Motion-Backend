let initialState = {};

const profileDataReducer = (state = initialState, action) => {
    if (action.type === "SEND_PROFILEDATA") {
      return action.payload;
    }
    return state;
  };
  

  export default profileDataReducer;
  