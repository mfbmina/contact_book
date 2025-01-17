# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ContactsController do
  describe 'GET index' do
    let!(:contact) { create(:contact) }

    before { get :index, format: :json }

    it { expect(response).to have_http_status(:success) }
    it { expect(response.header['Content-Type']).to include('application/json') }
    it { expect(JSON.parse(response.body)).to eq([contact].as_json) }
  end

  describe 'GET show' do
    context 'with a valid id' do
      let!(:contact) { create(:contact) }

      before { get :show, params: { id: contact.id }, format: :json }

      it { expect(response).to have_http_status(:success) }
      it { expect(response.header['Content-Type']).to include('application/json') }
      it { expect(JSON.parse(response.body)).to eq(contact.as_json) }
    end

    context 'with an invalid id' do
      before { get :show, params: { id: 1 }, format: :json }

      it { expect(response).to have_http_status(:not_found) }
      it { expect(response.header['Content-Type']).to include('application/json') }
    end
  end

  describe 'POST create' do
    context 'with a valid request' do
      let(:params) { attributes_for(:contact) }

      before { post :create, params: params, format: :json }

      it { expect(response).to have_http_status(:created) }
      it { expect(response.header['Content-Type']).to include('application/json') }
      it { expect(JSON.parse(response.body, symbolize_names: true)).to include(params) }
    end

    context 'with an invalid request' do
      let(:params) { attributes_for(:contact, first_name: nil) }

      before { post :create, params: params, format: :json }

      it { expect(response).to have_http_status(:bad_request) }
      it { expect(response.header['Content-Type']).to include('application/json') }
      it { expect(JSON.parse(response.body)).to include('errors') }
    end
  end

  describe 'PATCH update' do
    subject(:update) { patch :update, params: params, format: :json }

    let!(:contact) { create(:contact) }

    context 'with a valid request' do
      let(:params) { { id: contact.id, first_name: 'Francisco' } }

      it 'returns success' do
        update
        expect(response).to have_http_status(:success)
      end

      it 'returns a json' do
        update
        expect(response.header['Content-Type']).to include('application/json')
      end

      it 'changes the attribute' do
        update
        expect(contact.reload.first_name).to eq('Francisco')
      end

      it { expect { update }.to change(contact.histories, :count).by(1) }
    end

    context 'with an invalid request' do
      let(:params) { { id: contact.id, first_name: nil } }

      it 'returns a bad_request' do
        update
        expect(response).to have_http_status(:bad_request)
      end

      it 'returns a json' do
        update
        expect(response.header['Content-Type']).to include('application/json')
      end

      it 'does not change the attribute' do
        update
        expect(contact.reload.first_name).not_to eq('Francisco')
      end

      it 'returns they key errors' do
        update
        expect(JSON.parse(response.body)).to include('errors')
      end

      it { expect { update }.to change(contact.histories, :count).by(0) }
    end

    context 'with an invalid id' do
      let(:params) { { id: contact.id + 1, first_name: 'Francisco' } }

      before { update }

      it { expect(response).to have_http_status(:not_found) }
      it { expect(response.header['Content-Type']).to include('application/json') }
    end
  end

  describe 'DELETE destroy' do
    context 'with a valid id' do
      let!(:contact) { create(:contact) }

      before { delete :destroy, params: { id: contact.id }, format: :json }

      it { expect(response).to have_http_status(:success) }
      it { expect(response.header['Content-Type']).to include('application/json') }
    end

    context 'with an invalid id' do
      before { delete :destroy, params: { id: 1 }, format: :json }

      it { expect(response).to have_http_status(:not_found) }
      it { expect(response.header['Content-Type']).to include('application/json') }
    end
  end
end
