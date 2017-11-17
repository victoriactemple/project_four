class ChangePetFriendlyColumnOnTrails < ActiveRecord::Migration[5.1]
  def change
    change_column(:trails, :pet_friendly, :string)
  end
end
