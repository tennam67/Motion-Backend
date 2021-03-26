const friendsAction = (posts) => {
  return {
    type: "FRIENDS_POSTS",
    payload: posts,
  };
};

export default friendsAction;
