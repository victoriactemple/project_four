class CreateParks < ActiveRecord::Migration[5.1]
  def change
    create_table :parks do |t|
      t.string :name
      t.string :description
      t.string :image
      t.string :address
      t.float :lon
      t.float :lat

      t.timestamps
    end
  end
end
