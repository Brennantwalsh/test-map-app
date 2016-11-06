class AddJourneyIdToMaps < ActiveRecord::Migration[5.0]
  def change
    add_column :maps, :journey_id, :integer
  end
end
