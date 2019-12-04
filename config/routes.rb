Rails.application.routes.draw do
    root 'chatroom#index'
    get 'login', to: 'sessions#new'
    post 'login', to: 'sessions#create'
    get 'logout', to: 'sessions#destroy'
    post 'message', to: 'messages#create'
end
