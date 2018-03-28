$(function() {
  $('#add-contact-btn').on('click', function() {
    var contactInfo = {
      contact: {
        name: $('#contact_name').val(),
        email: $('#contact_email').val(),
        telephone: $('#contact_telephone').val(),
        mailing_address: $('#contact_mailing_address').val()
      }
    };

    $.post('/contacts.json', contactInfo).done(function(response) {
      $('#contact-form-card').html('Thanks for submitting! We will keep you up to date with the latest classes.');
    }).fail(function(response) {
      alert('There was an error with your request. We are sorry.');
    }); 
  });
});