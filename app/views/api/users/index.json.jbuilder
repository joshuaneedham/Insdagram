json.array! @users.each do |user|
  json.id user.id
  json.username user.username
  json.full_name user.full_name
  json.follows_specific current_user.followings.exists?(user.id)
end

# json.array! @users.each do |user|
#   json.partial! 'api/users/user', user: user
# end
