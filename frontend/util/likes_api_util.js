export const createLike = (data, post_id, success) => {
  $.ajax({
    method: 'POST',
    url: `api/posts/${post_id}/like`,
    data,
    success
  });
};
