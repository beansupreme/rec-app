require 'rails_helper'

RSpec.describe "contacts/index", type: :view do
  before(:each) do
    assign(:contacts, [
      Contact.create!(
        :name => "Name",
        :email => "Email",
        :telephone => "Telephone",
        :mailing_address => "Mailing Address"
      ),
      Contact.create!(
        :name => "Name",
        :email => "Email",
        :telephone => "Telephone",
        :mailing_address => "Mailing Address"
      )
    ])
  end

  it "renders a list of contacts" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Email".to_s, :count => 2
    assert_select "tr>td", :text => "Telephone".to_s, :count => 2
    assert_select "tr>td", :text => "Mailing Address".to_s, :count => 2
  end
end
