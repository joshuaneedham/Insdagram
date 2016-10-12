export const CREATE_LIKE = "CREATE_LIKE";
export const DESTROY_LIKE = "DESTROY_LIKE";

export const createLike = (postId) => {
  return {
    type: CREATE_LIKE,
    postId
  };
};

export const destroyLike = (postId) => {
  return {
    type: DESTROY_LIKE,
    postId
  };
};
