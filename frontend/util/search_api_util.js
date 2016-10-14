export const fetchUsers = (username, success) => {
  $.ajax({
    method: 'GET',
    url: `api/users?username=${username}`,
    success
  });
};
