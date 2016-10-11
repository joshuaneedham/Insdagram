json.extract! post, :id, :user_id, :caption, :created_at
json.image_url asset_url(post.image.url)

json.user do
  json.username post.user.username
end

json.comments post.comments.each do |comment|
  json.body comment.body
  json.username comment.user.username
end
