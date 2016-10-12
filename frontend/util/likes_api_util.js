export const createLike = ( post_id, success) => {
  $.ajax({
    method: 'POST',
    url: `api/posts/${post_id}/like`,
    success
  });
};
