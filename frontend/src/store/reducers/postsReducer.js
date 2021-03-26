// friends property its not the friends data its the whole list. friendsRealOne contains friends data
const initialState = {
  friends: [],
  friendsRealOne: [],
};

const postsReducer = (state = initialState, action) => {
  console.log(state, "state reducer");
  switch (action.type) {
    case "LIST_POSTS":
      return {
        ...state,
        friends: action.payload,
      };
    case "CREATE_POST":
      return {
        ...state,
        friends: [...state.friends, action.payload],
      };
    case "FRIENDS_POSTS":
      return {
        ...state,
        friendsRealOne: [...state.friendsRealOne, action.payload],
      };
    default:
      return state;
  }
};

export default postsReducer;
