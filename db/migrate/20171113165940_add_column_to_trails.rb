class AddColumnToTrails < ActiveRecord::Migration[5.1]
  def change
    add_column :trails, :name, :string
  end
end
