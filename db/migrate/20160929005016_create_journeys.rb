class CreateJourneys < ActiveRecord::Migration[5.0]
  def change
    create_table :journeys do |t|
      t.string :name
      t.string :description
      t.integer :dm_id

      t.timestamps
    end
  end
end
