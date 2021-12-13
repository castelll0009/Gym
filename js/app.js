$(document).ready(function() {
  // Global Settings
  let edit = false;

  // Testing Jquery
  console.log('jquery is working!');
  fetchUsers();
  $('#product-result').hide();

  // Search by Key Type (Event)
  $('#search').keyup(function() {
    if($('#search').val()) {
      let search = $('#search').val();
      $.ajax({
        url: 'backend/product-search.php',        
        type: 'POST',
        data: {search}, //podemos enviar string , objetos
        /*success: function (response) {
          console.log(response);        
          if(!response.error) {
            let products = JSON.parse(response);
            let template = '';
            products.forEach(product => {
              template += `
                     <li><a href="#" class="product-item">${product.nombre}</a></li>
                    ` 
            });
            $('#product-result').show();
            $('#container').html(template);
          }
        }*/
        success: function(response) {
          const users = JSON.parse(response);
          let template = '';
          console.log(users);
          users.forEach(user => {
            template += `
                    <tr productId="${user.id}">
                      <td>${user.id}</td>
                      <td>
                      <a href="#" class="user-item">
                        ${user.nombre} 
                      </a>
                      </td>                   
                      <td>${user.precio}</td>
                      <td>${user.descripcion}</td>
                      <td>${user.propiedades}</td>   
                      <td>${user.usos}</td>
                      <td>${user.receta}</td>
                      <td>
                        <a class="btn btn-secondary">
                          <i class="fas fa-cog"></i>
                        </a>
                        <a class="user-delete btn btn-danger" style="color:#fff;">
                          <i class="far fa-trash-alt"></i>
                        </a>
                      </td>
                    </tr>
                  `
          });
          $('#users').html(template);
        }
      })
    } 
    else {
      fetchUsers();
    }
  });

  // Fetching Products
  function fetchUsers() {
    $.ajax({
      url: 'backend/gym_usuariosList.php',
      type: 'GET',
      success: function(response) {
        console.log("response"+response); 
        const users = JSON.parse(response);
        let template = '';
      //  let template_nuevo_producto = '';
        //console.log(users);
        //andres
        users.forEach(user => {
          template += `
                  <tr userId="${user.id}">
                    <td>${user.id}</td>
                    <td>
                    <a href="#" class="user-item">
                      ${user.nombre_usuario} 
                    </a>
                    </td>                   
                    <td>${user.contrasena}</td>
                    <td>${user.telefono}</td>
                    <td>${user.nombre}</td>
                    <td>${user.cedula}</td>
                    <td>${user.nivel}</td>
                    <td>${user.correo}</td>
                    <td>${user.cantidad_dias_asistidos}</td>
                    <td>
                      <a class="btn btn-secondary">
                        <i class="fas fa-cog"></i>
                      </a>
                      <a class="user-delete btn btn-danger" style="color:#fff;">
                        <i class="far fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                `                
               /*
                //ahora creamos una template para la IU
                template_nuevo_producto +=`
                <figure class="figure-container">					
                  <h1 class="h-productos">${product.nickname}</h1>	
                  <div class="div-imagen">
                    <img class="imagen-producto"  src="imgs/nuevo.jpg" >						
                  </div>
                  <div class="div-detalles-producto">
                    <h2>${product.precio}</h2>						
                  </div>															
                  <!-- contenedor de  los items del menu-->																		
			        	</figure>                
               `*/

        });
        $('#users').html(template);
        //$('#cards-container-mysql').html(template_nuevo_producto);       
      }
    });
  }
  
  // Send Products (New or Edited)
  $('#product-form').submit(e => {
    e.preventDefault();
    const postData = {
      id: $('#productId').val(),
      name: $('#name').val(),
      price: $('#price').val(),
      description: $('#description').val(),
      properties: $('#properties').val(),
      uses: $('#uses').val(),
      recipes: $('#recipes').val()
    };
    console.log(postData.id);
    const url = edit === false ? 'backend/product-add.php' : 'backend/product-edit.php';
    console.log(postData, url);
    $.post(url, postData, (response) => {
      edit=false;
      console.log(response);
      $('#product-form').trigger('reset');
      document.getElementById('name-action').innerHTML = 'New Product';
      fetchUsers();
    });
  });

  // Delete a Single Product
  $(document).on('click', '.product-delete', function() {
    if(confirm('¿Seguro que quieres eliminar este producto?')) {
      let element = $(this)[0].parentElement.parentElement;
      let id = $(element).attr('productId');
      $.post('backend/product-delete.php', {id}, function(response) {
        //console.log(response);
        fetchUsers();
      });
    }
  });

  // Show a Product Listed Selected in Formulary
  $(document).on('click', '.product-item', function() {
    let element = $(this)[0].parentElement.parentElement;
    let id = $(element).attr("productId");
      //console.log(id);
      $.post('backend/product-single.php', {id}, function(response){
        edit = true;
        //console.log(response);
        const product = JSON.parse(response);
        //console.log(product);
        $('#productId').val(product.id);
        $('#name').val(product.nombre);
        $('#price').val(product.precio);
        $('#description').val(product.descripcion);
        $('#recipes').val(product.recetas);
        $('#properties').val(product.propiedades);
        $('#uses').val(product.usos);
        //title action
        document.getElementById('name-action').innerHTML = 'Edit Product';
     })
  });

  /*
  // Get a Single Product by Id - The same above ^^^^
  $(document).on('click', '.product-item', function() {
    let element = $(this)[0].parentElement.parentElement;
    let id = $(element).attr('productId');
    $.post('backend/product-single.php', {id}, function(response) {
      const product = JSON.parse(response);
      $('#name').val(product.nombre);
      $('#price').val(product.precio);
      $('#description').val(product.descripcion);
      edit = true;
    });
  });
  */

});