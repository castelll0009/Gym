<?php
    include('database.php');

    if(isset($_POST['id'])){
        $id = $_POST['id'];
        $nombre_usuario = $_POST['nombre_usuario'];
        $telefono = $_POST['telefono'];
        $nombre = $_POST['nombre'];
        $correo = $_POST['correo'];        
        $cantidad_dias_asistidos = $_POST['dias_asistidos'];        


        $query = "UPDATE tbl_gym_usuario SET nombre_usuario = '$nombre_usuario', telefono = '$telefono', nombre = '$nombre', correo = '$correo', dias_asistidos = '$dias_asistidos' WHERE id = '$id'";

        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Edit Query Failed');
        }
    }

    echo "Update Product Successfully";
?>