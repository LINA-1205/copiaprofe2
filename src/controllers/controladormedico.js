import {registrarMedico} from "../services/serviciosMedico.js"

//OBJETIVO: Capturar los datos de un formulario 

//1. por cada input, select, textarea del formulario se crea una variable 
//2 por cada variable debo utilizar el DOM para asociar 
//el html con javascript 


//CONTROLADOR DEL FORMULARIO


let nombreMedico = document.getElementById("nombremedico");
let matriculaProfesionalMedico = document.getElementById("matriculamedico");
let especialidadMedico = document.getElementById("especialidadmedico");
let salarioMedico = document.getElementById("salariomedico");
let ipsMedico = document.getElementById("ipsmedico");
let correoMedico = document.getElementById("correomedico");
let telefonoMedico = document.getElementById("telefonomedico");
let direccionMedico = document.getElementById("direccionmedico");
let disponibleFinDeSemanaMedico = document.getElementById("disponibilidadmedico");

// 3. Crear una variable para asociarla al id del boton que tengo en html

let botonRegistroMedico = document.getElementById("botonregistromedico");

// 4. Detectamos acciones o eventos en el boton
botonRegistroMedico.addEventListener("click", function(evento){

    evento.preventDefault();

// 5. Se crea un JSON que capture todos los datos del formulario
    let datosFormularioMedico = {

        nombres: nombreMedico.value,
        matriculaProfesional: matriculaProfesionalMedico.value,
        especialidad: especialidadMedico.value,
        salario: salarioMedico.value,
        ips: ipsMedico.value,
        correo: correoMedico.value,
        telefono: telefonoMedico.value,
        direccionConsultorio:  direccionMedico.value,
        disponibleFindesemana: disponibleFinDeSemanaMedico.checked
    }

// 6. Se envían los datos al back


console.log(datosFormularioMedico)
registrarMedico(datosFormularioMedico)
.then(function(respuestaBack){
  console.log(respuestaBack)
  Swal.fire({
    title: "Registro Exitoso",
    text: "Ya eres parte de nuestra gran familia!",
    icon: "success"
  });
})


});
