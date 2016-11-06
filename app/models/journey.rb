class Journey < ApplicationRecord
  belongs_to :user, foreign_key: :dm_id
  has_many :maps
  has_many :participations
  has_many :participated_users, through: :participations, source: :user
end
