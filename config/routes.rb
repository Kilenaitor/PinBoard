Rails.application.routes.draw do
  
  root "pins#index"
  
  get "/u/:id" => redirect("/users/%{id}")
  
  devise_for :users, :controllers => { registrations: 'registrations' }
  
  resources :users, :except => [:create, :update, :destroy]
  
  resources :pins do
    resources :comments, :only => [:create]
    member do
      put "like", to: "pins#upvote"
      put "unlike", to: "pins#downvote"
    end
  end
  
end
