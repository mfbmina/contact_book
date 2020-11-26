# frozen_string_literal: true

class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :email, index: { unique: true }
      t.string :phone_number

      t.timestamps
    end
  end
end
