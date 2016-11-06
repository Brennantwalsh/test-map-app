class Tile < ApplicationRecord
  has_many :placements
  has_many :maps, through: :placements
end
