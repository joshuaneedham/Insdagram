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

test_user = User.create!(full_name: "Test User", username: "test", password: "testing")
user2 = User.create!(full_name: "David DiPanfilo", username: "ddipanfilo", password: "secret3")
user3 = User.create!(full_name: "John Doe", username: "jdoeee", password: "testing323")
user4 = User.create!(full_name: "Jeff Seltzer", username: "seltz", password: "secrett")
jerry = User.create!(full_name: "Eli Tee", username: "mrjerry", password: "testtt323")
drake = User.create!(full_name: "Aubrey Graham", username: "champpapi", password: "drizzy")
user7 = User.create!(full_name: "Ben Jamin", username: "benny9", password: "testing323")
user8 = User.create!(full_name: "Mike Mike", username: "mike", password: "teeest")
user9 = User.create!(full_name: "John Smith", username: "jsmith", password: "pworddd")
user10 = User.create!(full_name: "Alfred", username: "alfred", password: "okay100")
rihanna = User.create!(full_name: "Robyn Rihanna Fenty", username: "goodgirlri", password: "okay333100")

file1 = File.open("app/assets/images/Rockefeller.jpg")
file2 = File.open("app/assets/images/Grand-Central.jpg")
file3 = File.open("app/assets/images/Lake.jpg")
file4 = File.open("app/assets/images/Manhattan.jpg")
file5 = File.open("app/assets/images/Montreal.jpg")
file6 = File.open("app/assets/images/Mountains.jpg")
young_drake_picture = File.open("app/assets/images/Drake-1.jpg")
arthur_picture = File.open("app/assets/images/arthur.png")
chef_picture = File.open("app/assets/images/chef.png")
goodyear_picture = File.open("app/assets/images/good-year.png")
iron_picture = File.open("app/assets/images/iron.png")
rihanna1_picture = File.open("app/assets/images/anti.png")
rihanna2_picture = File.open("app/assets/images/rihanna2.png")
rihanna3_picture = File.open("app/assets/images/rihanna3.png")

post1 = Post.create!(caption: "NYC", user_id: test_user.id, image: file1)
rihanna_post_3 = Post.create!(caption: "new Puma colors out now", user_id: rihanna.id, image: rihanna3_picture)
iron_post = Post.create!(caption: "me too", user_id: jerry.id, image: iron_picture)
post2 = Post.create!(caption: "Grand Central", user_id: test_user.id, image: file2)
arthur_post = Post.create!(caption: "EXPLAIN THIS", user_id: jerry.id, image: arthur_picture)
rihanna_post_1 = Post.create!(caption: "ANTIANTIANTI", user_id: rihanna.id, image: rihanna1_picture)
post3 = Post.create!(caption: "lake view", user_id: test_user.id, image: file3)
chef_post = Post.create!(caption: "KOOLAID VOICE", user_id: jerry.id, image: goodyear_picture)
post4 = Post.create!(caption: "Manhattan", user_id: user2.id, image: file4)
rihanna_post_2 = Post.create!(caption: "puma", user_id: rihanna.id, image: rihanna2_picture)
post5 = Post.create!(caption: "Montreal", user_id: user2.id, image: file5)
post6 = Post.create!(caption: "mountains", user_id: user2.id, image: file6)
post7 = Post.create!(caption: "I been had these visions
  Of the life I'm livin' since I was Jimmy
  All I had to do was just go and get it", user_id: drake.id, image: young_drake_picture
)
chef_post = Post.create!(caption: "right", user_id: jerry.id, image: chef_picture)


like1 = Like.create!(user_id: jerry.id, post_id: post1.id)
like2 = Like.create!(user_id: jerry.id, post_id: post2.id)
like3 = Like.create!(user_id: jerry.id, post_id: post3.id)
like4 = Like.create!(user_id: jerry.id, post_id: post4.id)
like5 = Like.create!(user_id: jerry.id, post_id: post5.id)
like6 = Like.create!(user_id: jerry.id, post_id: post6.id)
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

follow1 = Follow.create!(follower_id: test_user.id, followed_id: user2.id)
follow2 = Follow.create!(follower_id: test_user.id, followed_id: user3.id)
follow3 = Follow.create!(follower_id: test_user.id, followed_id: user4.id)
follow4 = Follow.create!(follower_id: test_user.id, followed_id: jerry.id)
follow5 = Follow.create!(follower_id: test_user.id, followed_id: drake.id)
follow6 = Follow.create!(follower_id: user2.id, followed_id: test_user.id)
follow7 = Follow.create!(follower_id: user2.id, followed_id: user3.id)
follow8 = Follow.create!(follower_id: user3.id, followed_id: user4.id)
follow9 = Follow.create!(follower_id: user3.id, followed_id: drake.id)
follow10 = Follow.create!(follower_id: user4.id, followed_id: test_user.id)
follow11 = Follow.create!(follower_id: jerry.id, followed_id: test_user.id)
