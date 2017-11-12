Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    resources :parks, only: [:index, :show]
    resources :comments, only: [:create, :update, :destroy, :show, :index]
  end


end
