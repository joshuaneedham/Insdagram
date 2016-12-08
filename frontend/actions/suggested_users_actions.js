export const REQUEST_SUGGESTED_USERS = "REQUEST_SUGGESTED_USERS";
export const RECEIVE_SUGGESTED_USERS = "RECEIVE_SUGGESTED_USERS";

export const requestSuggestedUsers = () => ({
  type: REQUEST_SUGGESTED_USERS,
});

export const receiveSuggestedUsers = users => ({
  type: RECEIVE_SUGGESTED_USERS,
  users
});
