# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  full_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base

  attr_reader :password
  after_initialize :ensure_session_token

  validates :username, :full_name, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :username, length: {in: 4..25}
  validates :password, length: {in: 6..16, allow_nil: true}

  has_many :posts
  has_many :comments
  has_many :likes

  has_many :followeds,
    class_name: "Follow",
    foreign_key: :follower_id

  has_many :following_users,
    through: :followeds,
    source: :following_user

  has_many :followings,
    class_name: "Follow",
    foreign_key: :followed_id

  has_many :followed_users,
    through: :followings,
    source: :followed_user

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
