Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session, only: [:create, :destroy]
    resources :posts do
      member do
        post 'likes'
        delete 'likes'
      end
    end
    resources :comments
  end
end
