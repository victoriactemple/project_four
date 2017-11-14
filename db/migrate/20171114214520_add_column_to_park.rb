class AddColumnToPark < ActiveRecord::Migration[5.1]
  def change
    add_column :parks, :zipcode, :integer
  end
end
