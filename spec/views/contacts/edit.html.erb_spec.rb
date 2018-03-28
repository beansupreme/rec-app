require 'rails_helper'

RSpec.describe "contacts/edit", type: :view do
  before(:each) do
    @contact = assign(:contact, Contact.create!(
      :name => "MyString",
      :email => "MyString",
      :telephone => "MyString",
      :mailing_address => "MyString"
    ))
  end

  it "renders the edit contact form" do
    render

    assert_select "form[action=?][method=?]", contact_path(@contact), "post" do

      assert_select "input#contact_name[name=?]", "contact[name]"

      assert_select "input#contact_email[name=?]", "contact[email]"

      assert_select "input#contact_telephone[name=?]", "contact[telephone]"

      assert_select "input#contact_mailing_address[name=?]", "contact[mailing_address]"
    end
  end
end
