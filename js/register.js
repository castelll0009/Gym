$(document).ready(function() {
    
    $('#register-form').submit(e => {
        e.preventDefault();
        const postData = {
          name: $('#name').val(),
          last_n: $('#last_n').val(),
          phone: $('#phone').val(),
          email: $('#email').val(),
          user: $('#user').val(),
          password: $('#password').val(),
          conf: $('#conf').val()
        };
        console.log("Registrando...");
    });

    if($('#register-form')){
        const phoneInput = window.intlTelInput(phoneInputField, {
            preferredCountries: ["co", "ec", "mx", "us"],
            utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });
    }
    
});