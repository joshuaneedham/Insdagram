json.array! @users.each do |user|
  json.id user.id
  json.username user.username
  json.full_name user.full_name
end

# json.array! @users.each do |user|
#   json.partial! 'api/users/user', user: user
# end
