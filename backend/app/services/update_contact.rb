# frozen_string_literal: true

class UpdateContact
  attr_reader :contact, :new_attributes

  def initialize(contact_id, attributes)
    @contact = Contact.find(contact_id)
    @new_attributes = attributes
  end

  def process
    old_attributes = contact.attributes.except(:created_at, :updated_at)

    contact.histories.build(old_attributes.merge(created_at: contact.updated_at))
    contact.update(new_attributes)
    contact
  end
end
