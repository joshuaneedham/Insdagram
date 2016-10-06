# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  image_url  :string           not null
#  caption    :text
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ActiveRecord::Base
  validates :image_url, :user_id, presence: true

  belongs_to :user

end
