<?php

  include('database.php');

  $query = "SELECT * from tbl_gym";
  $result = mysqli_query($connection, $query);

  /* si no hay  encuentra resultados se cierra la conexion*/
  if(!$result) {
    die('Query Failed'. mysqli_error($connection));
  }

  $json = array();
  while($row = mysqli_fetch_array($result)) {
    $json[] = array(
      'nombre' => $row['name_gym'],
      'direccion' => $row['direccion'],
      'telefono_gym' => $row['telefono_gym'],
      'id' => $row['id']
    );
  }

  $jsonstring = json_encode($json);
  echo $jsonstring;
?>
