Rails.application.routes.draw do
  namespace :api do
    get "parks", to: "parks#index", as: "parks"
  end


end
