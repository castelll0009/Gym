$(document).ready(function() {
    
    $('#session-form').submit(e => {
        e.preventDefault();
        const postData = {
          user: $('#user').val(),
          password: $('#password').val()
        };
        console.log("Iniciando Sesion...");
    });

    /*$(document).on('click', '.registrar', function() {
        console.log("Registrandose");
    });*/

});