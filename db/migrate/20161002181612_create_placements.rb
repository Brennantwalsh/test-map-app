class CreatePlacements < ActiveRecord::Migration[5.0]
  def change
    create_table :placements do |t|
      t.integer :row
      t.integer :column
      t.integer :map_id
      t.integer :tile_id

      t.timestamps
    end
  end
end
