# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Post.destroy_all

user1 = User.create!(full_name: "Test User", username: "test", password: "testing")

file1 = File.open("app/assets/images/Rockefeller.jpg")
post1 = Post.create!(caption: "NYC", user_id: user1.id, image: file1)
