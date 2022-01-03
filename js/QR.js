var boton_QR_icono = document.querySelector("#icono-QR");
var div_escanner_QR = document.querySelector(".div-escanear-QR");

boton_QR_icono.addEventListener("click", function(){               
    //alert("DIMOS CLIKCK EN ICONO QR");
    $(".div-escanear-QR").toggleClass("mostrar-interfaz-QR");    
    
 });

 div_escanner_QR.addEventListener("click", function(){
    $(".div-escanear-QR").toggleClass("mostrar-interfaz-QR");    
 });

 /*
 $(document).on('click', '.btn-ver' , function(){                
    //despliegue detalles con toggle          
    $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito");        
}); 
*/
