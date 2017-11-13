class ChangeColumnOnTrails < ActiveRecord::Migration[5.1]
  def change
    change_column(:trails, :distance, :float)
  end
end
