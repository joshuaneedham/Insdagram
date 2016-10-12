export const CREATE_LIKE = "CREATE_LIKE";

export const createLike = (post_id) => {
  return {
    type: CREATE_LIKE,
    post_id
  };
};
