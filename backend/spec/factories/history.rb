# frozen_string_literal: true

FactoryBot.define do
  factory :history do
    first_name { 'John' }
    last_name  { 'Doe' }
    email { 'john.doe@gmail.com' }
    phone_number { '000' }
    contact
  end
end
