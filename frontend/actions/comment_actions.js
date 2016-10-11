export const CREATE_COMMENT = "CREATE_COMMENT";

export const createComment = (comment, success) => ({
  type: CREATE_COMMENT,
  success,
  comment
});
