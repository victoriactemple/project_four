class Park < ApplicationRecord
has_many :park_comments, dependent: :destroy
has_many :users, through: :park_comments
    
end
