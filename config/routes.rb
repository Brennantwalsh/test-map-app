Rails.application.routes.draw do
  get '/signup' => 'users#new'
  post '/users' => 'users#create'
  get '/users/:id' => 'users#show'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'

  post '/journeys' => 'journeys#create'
  get '/journeys/:id' => 'journeys#show'
  get '/journeys/:id/edit' => 'journeys#edit'
  patch '/journeys/:id' => 'journeys#update'
  delete '/journeys/:id' => 'journeys#destroy'

  get '/maps/new' => 'maps#new'
  post '/maps' => 'maps#create'
  get '/maps/:id' => 'maps#show'
  get '/maps/:id/edit' => 'maps#edit'
  patch '/maps/:id' => 'maps#update'
  delete '/maps/:id' => 'maps#destroy'

  get '/' => 'tiles#index'
  get '/tiles' => 'tiles#index'
  get '/tiles/:id' => 'tiles#show'

  get '/placements' => 'placements#index'
  get '/placements/:id/edit' => 'placements#edit'
  put '/placements/:id' => 'placements#update'

  post '/participations' => 'participations#create'
end
