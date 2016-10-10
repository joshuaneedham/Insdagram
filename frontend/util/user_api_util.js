export const fetchUser = (user, success, error) => (
  $.ajax({
    method: 'GET',
    url: 'api/users/${user.id}',
    data: { user },
    success,
    error
  })
);
