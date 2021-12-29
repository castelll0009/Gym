$(document).ready(function() {
    
    $('#session-form').submit(e => {
        e.preventDefault();
        const postData = {
          user: $('#user').val(),
          password: $('#password').val()
        };
        console.log("Iniciando Sesion...");
        const url = 'backend/session.php';
        $.post(url, postData, (response) => {
            console.log(response);
            const usuario = JSON.parse(response);
            sessionStorage.setItem('datosUsuarioActivo', usuario);
            //sessionStorage.getItem('datosUsuarioActivo');
        });
    });

    /*$(document).on('click', '.registrar', function() {
        console.log("Registrandose");
    });*/

});