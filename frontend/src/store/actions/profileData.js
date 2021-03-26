const profileData = (data) => {
  console.log(data, "in action");
  return {
    type: "SEND_PROFILEDATA",
    payload: data,
  };
};

export default profileData;
