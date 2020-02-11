Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create]
    resources :listings, only: [:index, :show, :create, :update, :destroy]
    resources :bookings, only: [:index, :show, :create, :update, :destroy]
    resources :reviews, only: [:index, :show, :create, :update, :destroy]
    resource :session, only: [:show, :create, :destroy]
  end

  root "static_pages#root"
end
