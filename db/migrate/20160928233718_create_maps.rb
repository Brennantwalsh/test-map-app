class CreateMaps < ActiveRecord::Migration[5.0]
  def change
    create_table :maps do |t|
      t.string :name
      t.string :description
      t.integer :row_number
      t.integer :column_number
      t.integer :creator_id

      t.timestamps
    end
  end
end
