export const createLike = ( postId, success) => {
  $.ajax({
    method: 'POST',
    url: `api/posts/${postId}/like`,
    success
  });
};

export const destroyLike = ( postId, success) => {
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${postId}/unlike`,
    success
  });
};
