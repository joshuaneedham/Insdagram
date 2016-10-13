Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users do
      collection do
        get 'search'
      end
      member do
        post 'follow'
        delete 'unfollow'
      end
    end
    resource :session, only: [:create, :destroy]
    resources :posts do
      member do
        post 'like'
        delete 'unlike'
      end
    end
    resources :comments
  end
end
