json.extract! post, :id, :user_id, :caption, :created_at
json.image_url asset_url(post.image.url)

json.user do
  json.username post.user.username
end

json.likes post.likes

json.comments post.comments.order(created_at: :asc).each do |comment|
  json.body comment.body
  json.username comment.user.username
  json.id comment.id
  json.created_at comment.created_at
  json.user_id comment.user.id
end
