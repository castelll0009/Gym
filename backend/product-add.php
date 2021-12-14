<?php
    include('database.php');
    $query = "SELECT * from tbl_gym_usuario";
    $result = mysqli_query($connection, $query);

  /* si no hay  encuentra resultados se cierra la conexion*/
  if(!$result) {
    die('Query Failed'. mysqli_error($connection));
  }

    if(isset($_POST['name'])){
        $name = $_POST['name'];
        $price = $_POST['price'];
        $description = $_POST['description'];
        $properties = $_POST['properties'];
        $uses = $_POST['uses'];
        $recipes = $_POST['recipes'];

        $query = "INSERT into tbl_producto(nombre, descripcion, precio, propiedades, usos, recetas) VALUES ('$name','$description','$price','$properties','$uses','$recipes')";
        
        $result = mysqli_query($connection, $query);
        if(!$result) {
            die('Add Query Failed');
        }

        echo 'Product Added Successfully';
    }

?>