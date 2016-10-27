export const fetchPosts = function(success){
  $.ajax({
    method: 'GET',
    url: 'api/posts',
    success,
  });
};

export const createPost = (formData, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/posts',
    contentType: false,
    processData: false,
    data: formData,
    success
  });
};
