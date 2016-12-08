export const fetchSuggestedUsers = (success) => {
  return (
  $.ajax({
    method: 'GET',
    url: 'api/users/suggested_users',
    success,
  })
);
};
