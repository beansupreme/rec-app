require 'rails_helper'

RSpec.describe Contact, type: :model do
  describe 'validations' do
    it 'should validate presence of name' do
      contact_without_name = Contact.create(name: '')
      expect(contact_without_name.valid?).to eq(false)

      contact_without_name = Contact.create(name: 'Present')
      expect(contact_without_name.valid?).to eq(true)
    end
  end
end
