const postsAction = (posts) => {
  return {
    type: "LIST_POSTS",
    payload: posts,
  };
};

export default postsAction;
