$(function() {
  var successMessage = 'Thanks for submitting! We will keep you up to date with the latest classes.';
  var errorMessage = 'There was an error with your request. We are sorry.';

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
      $('#contact-form-card').html("<div class='alert alert-success'>" + successMessage + "</div>");
    }).fail(function(response) {
      if (response.status === 422) {
        var responseErrors = response.responseJSON;
        var errorHtml = "";
        for (var errorKey in responseErrors) { 
          errorHtml += "<span>" +  responseErrors[errorKey] + "</span>"
        }
        $('#contact-errors').html(errorHtml).show();
        
      } else {
        $('#contact-errors').html(errorMessage).show();
      }
    }); 
  });
});