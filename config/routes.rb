Rails.application.routes.draw do
  devise_for :users
  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  resources :apartments
  root to: "pages#index"
  # get 'apartment/:id' => 'pages#show'
end
