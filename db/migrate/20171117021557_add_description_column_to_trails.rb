class AddDescriptionColumnToTrails < ActiveRecord::Migration[5.1]
  def change
    add_column :trails, :description, :string
  end
end
