<?php

  include('database.php');

  $query = "SELECT * from tbl_gym_usuario";
  $result = mysqli_query($connection, $query);

  /* si no hay  encuentra resultados se cierra la conexion*/
  if(!$result) {
    die('Query Failed'. mysqli_error($connection));
  }

  $json = array();
  while($row = mysqli_fetch_array($result)) {
    $json[] = array(
      'nombre_usuario' => $row['nombre_usuario'],
      'contrasena' => $row['contrasena'],      
      'telefono' => $row['telefono'],   
      'nombre' => $row['nombre'],         
      'cedula' => $row['cedula'],  
      'nivel' => $row['nivel'],
      'correo' => $row['correo'],
      'id' => $row['id']
    );
  }

  $jsonstring = json_encode($json);
  echo $jsonstring;
?>
