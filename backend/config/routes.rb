# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :contacts, except: %i[new edit] do
    resources :histories, only: :index
  end
end
