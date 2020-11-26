# frozen_string_literal: true

class Contact < ApplicationRecord
  has_many :histories, dependent: :destroy

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates :phone_number, presence: true
end
