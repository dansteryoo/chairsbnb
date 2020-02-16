Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:index, :show]
    resources :bookings, only: [:index, :show, :create, :update, :destroy]
    resources :reviews, only: [:index, :show, :create, :update, :destroy]
  end

  root "static_pages#root"
end
