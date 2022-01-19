<?php

include('database.php');

$search = $_POST['search'];
if(!empty($search)) {
  $query = "SELECT * FROM tbl_gym_usuario WHERE nombre_usuario LIKE '$search%'";
  $result = mysqli_query($connection, $query);
  
  if(!$result) {
    die('Query Error' . mysqli_error($connection));
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
  $jsonstring = json_encode($json);
  echo $jsonstring;
}

?>
