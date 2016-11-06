class Placement < ApplicationRecord
  belongs_to :map
  belongs_to :tile
  has_many :visibilities
  has_many :participations, through: :visibility
end
