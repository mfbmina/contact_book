# frozen_string_literal: true

class History < ApplicationRecord
  belongs_to :contact

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :phone_number, presence: true
end
