class Map < ApplicationRecord
  belongs_to :user, foreign_key: :creator_id
  belongs_to :journey
  has_many :placements
  has_many :tiles, through: :placements
end
