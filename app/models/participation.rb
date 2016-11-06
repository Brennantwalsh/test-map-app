class Participation < ApplicationRecord
  belongs_to :user
  belongs_to :journey
  has_many :visibilities
  has_many :placements, through: :visibilities
end
