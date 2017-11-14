# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171114214520) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "park_comments", force: :cascade do |t|
    t.string "title"
    t.string "content"
    t.bigint "user_id"
    t.bigint "park_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["park_id"], name: "index_park_comments_on_park_id"
    t.index ["user_id"], name: "index_park_comments_on_user_id"
  end

  create_table "parks", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image"
    t.string "address"
    t.float "lon"
    t.float "lat"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "zipcode"
  end

  create_table "trail_comments", force: :cascade do |t|
    t.string "title"
    t.string "content"
    t.bigint "trail_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trail_id"], name: "index_trail_comments_on_trail_id"
    t.index ["user_id"], name: "index_trail_comments_on_user_id"
  end

  create_table "trails", force: :cascade do |t|
    t.string "difficulty"
    t.string "elevation_profile"
    t.string "image"
    t.boolean "pet_friendly"
    t.float "distance"
    t.bigint "park_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.index ["park_id"], name: "index_trails_on_park_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "park_comments", "parks"
  add_foreign_key "park_comments", "users"
  add_foreign_key "trail_comments", "trails"
  add_foreign_key "trail_comments", "users"
  add_foreign_key "trails", "parks"
end
