class Trail < ApplicationRecord
  belongs_to :park
  has_many :trail_comments, dependent: :destroy
  has_many :users, through: :trail_comments
end
