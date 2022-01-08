var boton_QR_icono = document.querySelector("#icono-QR");
var div_escanner_QR = document.querySelector(".div-escanear-QR");

var  bandera_dentro_interfaz = false;

boton_QR_icono.addEventListener("click", function(){               
    //alert("DIMOS CLIKCK EN ICONO QR");
    bandera_dentro_interfaz = true;
    //desactivamos el desplazamiento vertical con la propiedad overflow-y: hidden de la etiqueta html    
    $("html").css("overflow-y", "hidden");
    $(".div-escanear-QR").toggleClass("mostrar-interfaz-QR");    
    
 });

 div_escanner_QR.addEventListener("click", function(){
   bandera_dentro_interfaz = false;
   $("html").css("overflow-y", "scroll");
    $(".div-escanear-QR").toggleClass("mostrar-interfaz-QR");    
 });

 /*
 $(document).on('click', '.btn-ver' , function(){                
    //despliegue detalles con toggle          
    $(".div-detalles-carrito").toggleClass("mostrar-detalles-carrito");        
}); 
*/
