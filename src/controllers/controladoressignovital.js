//OBJETIVO: Capturar los datos de un formulario

//1. Por cada input, select, textarea del formulario se crea una variable

//2. Por cada variable debo utilizar el DOM para asociar el HTML con js

let nombreSignoVital=document.getElementById("nombresignovital");
let valorSignoVital=document.getElementById("valorsignovital");
let fechaMedidaSignoVital=document.getElementById("fechamedidasignovital");

let botonRegistroSignoVital=document.getElementById("botonregistrosignovital");

botonRegistroSignoVital.addEventListener("click",function(evento){
    evento.preventDefault()
    


let datosFormularioSignoVital={
    nombre:nombreSignoVital.value,
    valor:valorSignoVital.value,
    fechaMedida:fechaMedidaSignoVital.value
}

console.log(datosFormularioSignoVital)

Swal.fire({
    title: "Registro Exitoso!",
    text: "Ya eres parte de nuestra gran familia!",
    icon: "success"
  });
})