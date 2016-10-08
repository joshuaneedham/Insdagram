export const fetchPosts = function(success){
  $.ajax({
    method: 'GET',
    url: 'api/posts',
    success,
    error: () => console.log('error')
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
