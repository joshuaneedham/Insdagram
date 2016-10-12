# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  followed_id :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ActiveRecord::Base
  validates_uniqueness_of :followed_id, :scope => :follower_id

  belongs_to :follower_user,
    class_name: "User",
    foreign_key: :follower_id

  belongs_to :followed_user,
    class_name: "User",
    foreign_key: :followed_id

  has_many :followed_posts,
    through: :followed_user,
    source: :posts
end
