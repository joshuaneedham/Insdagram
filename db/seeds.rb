# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Post.destroy_all
Like.destroy_all
Comment.destroy_all
Follow.destroy_all

user1 = User.create!(full_name: "Test User", username: "test", password: "testing")
user2 = User.create!(full_name: "David DiPanfilo", username: "ddipanfilo", password: "secret3")
user3 = User.create!(full_name: "John Doe", username: "jdoeee", password: "testing323")
user4 = User.create!(full_name: "Jeff Seltzer", username: "seltz", password: "secrett")
user5 = User.create!(full_name: "Jerry", username: "mrjerry", password: "testtt323")
user6 = User.create!(full_name: "Drake", username: "champpapi", password: "drizzy")
user7 = User.create!(full_name: "Ben Jamin", username: "benny9", password: "testing323")
user8 = User.create!(full_name: "Mike Mike", username: "mike", password: "teeest")
user9 = User.create!(full_name: "John Smith", username: "jsmith", password: "pworddd")
user10 = User.create!(full_name: "Alfred", username: "alfred", password: "okay100")

file1 = File.open("app/assets/images/Rockefeller.jpg")
file2 = File.open("app/assets/images/Grand-Central.jpg")
file3 = File.open("app/assets/images/Lake.jpg")
file4 = File.open("app/assets/images/Manhattan.jpg")
file5 = File.open("app/assets/images/Montreal.jpg")
file6 = File.open("app/assets/images/Mountains.jpg")

post1 = Post.create!(caption: "NYC", user_id: user1.id, image: file1)
post2 = Post.create!(caption: "Grand Central", user_id: user1.id, image: file2)
post3 = Post.create!(caption: "lake view", user_id: user1.id, image: file3)
post4 = Post.create!(caption: "Manhattan", user_id: user2.id, image: file4)
post5 = Post.create!(caption: "Montreal", user_id: user2.id, image: file5)
post6 = Post.create!(caption: "mountains", user_id: user2.id, image: file6)

like1 = Like.create!(user_id: user1.id, post_id: post1.id)
like2 = Like.create!(user_id: user1.id, post_id: post2.id)
like3 = Like.create!(user_id: user1.id, post_id: post3.id)
like4 = Like.create!(user_id: user1.id, post_id: post4.id)
like5 = Like.create!(user_id: user1.id, post_id: post5.id)
like6 = Like.create!(user_id: user1.id, post_id: post6.id)
like7 = Like.create!(user_id: user3.id, post_id: post1.id)
like8 = Like.create!(user_id: user3.id, post_id: post2.id)
like9 = Like.create!(user_id: user3.id, post_id: post3.id)
like10 = Like.create!(user_id: user3.id, post_id: post4.id)
like11 = Like.create!(user_id: user3.id, post_id: post5.id)
like12 = Like.create!(user_id: user4.id, post_id: post1.id)
like13 = Like.create!(user_id: user4.id, post_id: post2.id)

comment1 = Comment.create!(user_id: user2.id, post_id: post1.id, body: "nice shot")
comment2 = Comment.create!(user_id: user2.id, post_id: post2.id, body: "cool picture")
comment3 = Comment.create!(user_id: user2.id, post_id: post3.id, body: "nice view")
comment4 = Comment.create!(user_id: user3.id, post_id: post1.id, body: "awesome")

follow1 = Follow.create!(followed_id: user1.id, follower_id: user1.id)
follow2 = Follow.create!(followed_id: user1.id, follower_id: user2.id)
follow3 = Follow.create!(followed_id: user1.id, follower_id: user2.id)
follow4 = Follow.create!(followed_id: user1.id, follower_id: user3.id)
follow5 = Follow.create!(followed_id: user1.id, follower_id: user4.id)
follow6 = Follow.create!(followed_id: user1.id, follower_id: user5.id)
