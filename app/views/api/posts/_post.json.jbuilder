json.extract! post, :id, :user_id, :caption, :created_at
json.user do
  json.username post.user.username
end
json.image_url asset_url(post.image.url)
