<?php
    include('database.php');
   
    if(isset($_POST['id'])){
        $id = $_POST['id'];
        $nombre_usuario = $_POST['nombre_usuario'];
        $contrasena = $_POST['controsena'];
        $telefono = $_POST['telefono'];
        $nombre = $_POST['nombre'];
        $cedula = $_POST['cedula'];
        $nivel = $_POST['nivel'];
        $correo = $_POST['correo'];
        $cantidad_dias_asistidos = $_POST['cantidad_dias_asistidos'];
       

        // Establecer la zona horaria predeterminada a usar. Disponible desde PHP 5.1
       // date_default_timezone_set('UTC');
      //  $cantidad_dias_asistidos = date("z");
      //  $id = uniqid(),'<br />'; 
        $query = "INSERT into tbl_gym_usuario(id,nombre_usuario, contrasena, telefono, nombre, cedula, nivel, cantidad_dias_asistidos) VALUES ('$id','$nombre_usuario','$contrasena','$telefono','$nombre','$cedula','$nivel','$cantidad_dias_asistidos')";
        
        $result = mysqli_query($connection, $query);
        if(!$result) {
            die('Add Query Failed');
        }

        echo 'Product Added Successfully';
    }

?>