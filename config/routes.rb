Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :create, :destroy, :update]
    end
  end

  get 'soi/index'
  post "likes/:post_id/create" => "likes#create"
  post "likes/:post_id/destroy" => "likes#destroy"

  get 'users/index' => "users#index"
  get "signup" => "users#new"
  get 'users/:id' => "users#show"
  get 'users/:id/edit' => "users#edit"
  post "users/create" => "users#create"
  post "users/:id/update" => "users#update"
  get "users/:id/likes" => "users#likes"
    
  get "login" => "users#login_form"
  post "login" => "users#login"
  post "logout" => "users#logout"
  
  get 'posts/index'
  get "posts/new" => "posts#new"
  get "posts/:id" => "posts#show"
  get "posts/:id/edit" => "posts#edit"
  post "posts/create" => "posts#create"
  post "posts/:id/update" => "posts#update"
  post "posts/:id/destroy" => "posts#destroy"

  get '/' => "home#top"
  get 'about' => "home#about"
  
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
