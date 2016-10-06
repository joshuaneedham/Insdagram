export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const REQUEST_POST = "REQUEST_POST";
export const CREATE_POST = "CREATE_POST";

export const requestPosts = () => ({
  type: REQUEST_POSTS
});

export const requestPost = id => ({
  type: REQUEST_POST,
  id
});

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const createPost = post => ({
  type: CREATE_POST,
  post
});
