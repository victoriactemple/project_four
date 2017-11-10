Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    get "parks", to: "parks#index", as: "parks"
  end


end
