# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ActiveRecord::Base

  validates :user_id, :post_id, presence: true;
  validates_uniqueness_of :user_id, :scope => :post_id

  belongs_to :user
  belongs_to :post
end
