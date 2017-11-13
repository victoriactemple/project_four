class CreateTrails < ActiveRecord::Migration[5.1]
  def change
    create_table :trails do |t|
      t.string :difficulty
      t.string :elevation_profile
      t.string :image
      t.boolean :pet_friendly
      t.integer :distance
      t.references :park, foreign_key: true

      t.timestamps
    end
  end
end
