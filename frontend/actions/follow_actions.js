export const CREATE_FOLLOW = "CREATE_FOLLOW";
export const DESTROY_FOLLOW = "DESTROY_FOLLOW";

export const createFollow = (userId) => {
  return {
    type: CREATE_FOLLOW,
    userId
  };
};

export const destroyFollow = (userId) => {
  return {
    type: DESTROY_FOLLOW,
    userId
  };
};
