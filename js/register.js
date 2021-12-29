$(document).ready(function() {

    fetchGyms();
    
    $('#register-form').submit(e => {
        e.preventDefault();
        if($('#conf').val() == $('#password').val()){
            const postData = {
            name: $('#name').val(),
            last_n: $('#last_n').val(),
            phone: $('#phone').val(),
            email: $('#email').val(),
            user: $('#user').val(),
            password: $('#password').val()
            //FALTA DATO id_membresia
            };
            console.log("Registrando...");
            const url = 'backend/register.php';
            $.post(url, postData, (response) => {
                console.log(response);
            });
        }
    });

    if($('#register-form')){
        const phoneInput = window.intlTelInput(phoneInputField, {
            preferredCountries: ["co", "ec", "mx", "us"],
            utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });
    }
    
    //FUNCION PARA LISTAR TODOS LOS GYM DISPONIBLES
    function fetchGyms() {
        $.ajax({
        url: 'backend/gyms_list.php',
        type: 'GET',
        success: function(response) {
            console.log(response);
            const gyms = JSON.parse(response);
            let template = '<option selected disabled hidden>Gimnacio</option>';
            console.log(gyms);
            gyms.forEach(gym => {
            template += `
                    <option value="${gym.nombre}">${gym.nombre}</option>
                    `
            });
            $('#name_gym').html(template);
        }
        });
    }

});