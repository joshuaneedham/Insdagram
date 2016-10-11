export const CREATE_COMMENT = "CREATE_COMMENT";

export const createComment = (comment) => {
  return {type: CREATE_COMMENT,
  comment};
};
