json.extract! user, :id, :username, :full_name
json.posts user.posts
json.posts user.posts.each do |post|
  json.post_id post.id
  json.caption post.caption
  json.created_at post.created_at
  json.image_file_name post.image_file_name
  json.image_content_type post.image_content_type
  json.image_file_size post.image_file_size
  json.image_url asset_url(post.image.url)
end
