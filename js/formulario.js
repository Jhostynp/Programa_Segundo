$(document).on("click","#btn_registrar",function(){

let apellido=$("#txtapellido").val();
if(apellido.trim().length==0){
mensaje("Apellido Es Obligatorio",'error');
return false;
}
let nombre=$("#txtnombres").val();
if(nombre.trim().length==0){
mensaje("Nombre Es Obligatorio",'error');
return false;
}
let usuario=$("#user").val();
if(usuario.trim().length==0){
mensaje("Usuario Es Obligatorio",'error');
return false;
}
let contraseña=$("#password").val();
if(contraseña.trim().length==0){
mensaje("Contraseña es obligatoria",'error');
return false;
}
let confirmar_contraseña=$("#confirm_password").val();
if(confirmar_contraseña!==contraseña){
mensaje("Las contraseñas no coinciden",'error');
return false;
}
let ciudad=$("#ciudad").val();
if(ciudad.trim().length==0){
mensaje("Elija Una Ciudad",'error');
return false;
}
mensaje("DATOS CORRECTOS",'success');
})
const mensaje=(text="",icon='')=>{
Swal.fire({
  title: "Atencion!",
  text: text,
  icon: icon,
  confirmButtonText: 'Okay'
})
}
