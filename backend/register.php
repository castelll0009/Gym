<?php

    include('database.php');

    if(isset($_POST['name'])){
        $name = $_POST['$name'];
        $last_n = $_POST['$last_n'];
        $phone = $_POST['$phone'];
        $email = $_POST['$email'];
        $user = $_POST['$user'];
        $password = $_POST['$password'];

        //IMPORTANTE!!! FALTA id_membresia, 
        
        $query = "INSERT INTO tbl_gym_usuario(id, nombre_usuario, contrasena, nombres, apellidos, telefono, correo, id_membresia, ruta_img_perfil, id_nivel, dias_asistidos, cantidad_estrellas, barra_progreso) VALUES (NULL, '$user', '$password', '$name', '$last_n', '$phone', '$email', '<<ID>>', NULL, 1, 0, 0, 0)";

        $result = mysqli_query($connection, $query));

        if(!$result){
            die('Registro fallido' . mysqli_error($connection));
        }

        echo $result;
       
    }

?>