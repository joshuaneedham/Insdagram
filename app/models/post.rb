# == Schema Information
#
# Table name: posts
#
#  id                 :integer          not null, primary key
#  caption            :text
#  user_id            :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Post < ActiveRecord::Base
  validates :user_id, presence: true

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user
  has_many :comments
  has_many :likes

  has_many :likers,
    through: :likes,
    source: :user
end
