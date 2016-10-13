export const createFollow = ( userId, success) => {
  $.ajax({
    method: 'POST',
    url: `api/users/${userId}/follow`,
    success
  });
};

export const destroyFollow = ( userId, success) => {
  $.ajax({
    method: 'DELETE',
    url: `api/users/${userId}/unfollow`,
    success
  });
};
