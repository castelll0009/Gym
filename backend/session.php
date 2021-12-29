<?php

    include('database.php');

    if(isset($_POST['user'])){
        $user = $_POST['$user'];
        $password = $_POST['$password'];

        $query = "SELECT * FROM tbl_gym_usuario WHERE nombre_usuario = '$user' AND contrasena = '$password'";

        $result = mysqli_query($connection, $query));

        if(!$result){
            die('Su nombre de usuario o contraseñia es incorrecto' . mysqli_error($connection));
        }

        $json = array();
        while($row = mysqli_fetch_array($result)) {
          $json[] = array(
            'id' => $row['id']
            'nombre_usuario'
            'contrasena'
            'nombres'
            'apellidos'
            'telefono'
            'correo'
            'id_membresia'
            'ruta_img_perfil'
            'id_nivel'
            'dias_asistidos'
            'cantidad_estrellas'
            'barra_progreso'
          );
        }
        $jsonstring = json_encode($json);

        echo $jsonstring;

        /* REGISTRO
         $query = "INSERT INTO tbl_gym_usuario(id, nombre_usuario, contrasena, nombres, apellidos, telefono, correo, id_membresia, ruta_img_perfil, id_nivel, dias_asistidos, cantidad_estrellas, barra_progreso) VALUES ()";*/
       
    }

?>