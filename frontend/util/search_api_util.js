export const fetchUsers = (username, success) => (
  $.ajax({
    method: 'POST',
    url: 'api/users/search',
    data,
    success
  })
);
