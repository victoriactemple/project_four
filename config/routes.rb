Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    resources :parks, only: [:index, :show] do
      resources :trails, only: [:create, :update, :destroy, :show, :index] do 
        resources :trail_comments, only: [:create, :update, :destroy, :show, :index]
      end
      
    end 
    get '/weather/:zipcode', to: "weather#show"
        
  end


end
