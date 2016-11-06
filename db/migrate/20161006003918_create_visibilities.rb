class CreateVisibilities < ActiveRecord::Migration[5.0]
  def change
    create_table :visibilities do |t|
      t.integer :participation_id
      t.integer :placement_id

      t.timestamps
    end
  end
end
