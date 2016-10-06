json.extract! post, :id, :user_id, :caption
json.image_url asset_url(post.image.url)
