<?php 

    include('database.php');

        //elejimos  un producto de  forma  ramdom
        $query =  "SELECT * FROM tbl_gym_usuario ORDER BY RAND() LIMIT 1";
        //$query = "SELECT * FROM tbl_producto WHERE id = $id";
        $result = mysqli_query($connection, $query);
        
        if(!$result){
            die('Single Query Failed');
        }

        $json = array();
        while($row = mysqli_fetch_array($result)) {
            $json[] = array(
               'nombre_usuario' => $row['nombre_usuario'],      
               'telefono' => $row['telefono'],   
               'name' => $row['nombre'],         
               'correo' => $row['correo'],
               'dias_asistidos' => $row['dias_asistidos'],
               'id' => $row['id']
                );
        }
        $jsonstring = json_encode($json[0]);
        echo  $jsonstring;
        
    

?>