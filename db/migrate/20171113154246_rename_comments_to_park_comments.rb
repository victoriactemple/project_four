class RenameCommentsToParkComments < ActiveRecord::Migration[5.1]
  def change
    rename_table :comments, :park_comments
  end
end
