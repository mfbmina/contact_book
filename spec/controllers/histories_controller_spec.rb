# frozen_string_literal: true

require 'rails_helper'

RSpec.describe HistoriesController do
  describe 'GET index' do
    let(:history) { create(:history) }

    before { get :index, params: { contact_id: history.contact_id }, format: :json }

    it { expect(response).to have_http_status(:success) }
    it { expect(response.header['Content-Type']).to include('application/json') }
    it { expect(JSON.parse(response.body)).to eq([history].as_json) }
  end
end
