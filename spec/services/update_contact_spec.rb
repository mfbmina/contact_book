# frozen_string_literal: true

require 'rails_helper'

RSpec.describe UpdateContact do
  subject(:service) { described_class.new(contact_id, attributes).process }

  let(:contact) { create(:contact) }
  let(:contact_id) { contact.id }

  describe '#process' do
    context 'with valid attributes' do
      let(:attributes) { { first_name: 'Francisco' } }

      it { expect(service).to eq(contact) }
      it { expect { service }.to change(contact.histories, :count).by(1) }

      it 'changes the attribute' do
        service
        expect(contact.reload.first_name).to eq('Francisco')
      end
    end

    context 'with invalid attributes' do
      let(:attributes) { { first_name: nil } }

      it { expect(service).to eq(contact) }
      it { expect { service }.to change(contact.histories, :count).by(0) }

      it 'does not change the attribute' do
        service
        expect(contact.reload.first_name).not_to eq('Francisco')
      end
    end
  end
end
