export const RECEIVE_USERS = "RECEIVE_USERS";
export const REQUEST_USERS = "REQUEST_USERS";

export const requestUsers = (username) => ({
  type: REQUEST_USERS,
  username
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});