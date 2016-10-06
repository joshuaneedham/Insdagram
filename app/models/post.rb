# == Schema Information
#
# Table name: posts
#
#  id                 :integer          not null, primary key
#  image_url          :string           not null
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
  validates :image_url, :user_id, presence: true

  class Post < ActiveRecord::Base
    has_attached_file :image, default_url: "missing.png"
    validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  end

  belongs_to :user

end
