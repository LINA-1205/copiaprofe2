// //OBJETIVO: Capturar los datos de un formulario

// //1. Por cada input, select, textarea del formulario se crea una variable

// //2. Por cada variable debo utilizar el DOM para asociar el HTML con js

// let nombrePaciente=document.getElementById("nombrepaciente")
// let correoPaciente=document.getElementById("correopaciente")
// let telefonoPaciente=document.getElementById("telefonopaciente")
// let fechaNacimientoPaciente=document.getElementById("nacimientopaciente")
// let ciudadPaciente=document.getElementById("ciudadpaciente")
// let polizaPaciente=document.getElementById("polizapaciente")
// let ipsPaciente=document.getElementById("ipspaciente")
// let grupoIngresoPaciente=document.getElementById("ingresopaciente")
// let fechaAfiliacionPaciente=document.getElementById("afiliacionpaciente")

// // PASO 3. Crear una variable para asociarla a id del boton que tengo en html

// let botonRegistroPaciente=document.getElementById("botonregistropaciente")

// //PASO 4. Detectamos acciones o eventos en el boton

// botonRegistroPaciente.addEventListener("click", function(evento){
//     evento.preventDefault()


// //PASO 5. Se crea un JSON
// //que capture todos los datos del formulario

// let datosFormularioPaciente={
//     nombres:nombrePaciente.value,
//     fechaNacimiento:fechaNacimientoPaciente.value,
//     ciudad:ciudadPaciente.value,
//     correo:correoPaciente.value,
//     telefono:telefonoPaciente.value,
//     ips:ipsPaciente.value,
//     grupoIngresos:grupoIngresoPaciente.value,
//     tienePoliza:polizaPaciente.value,
//     fechaAfiliacion:fechaAfiliacionPaciente.value
// }

// //PASO 6. Se envian los datos al back

// console.log(datosFormularioPaciente)

// Swal.fire({
//     title: "Registro Exitoso!",
//     text: "Ya eres parte de nuestra gran familia!",
//     icon: "success"
// });
// })

//OBJETIVO:Recibir datos del BACK y hacerles render (render=PINTARLOS)
//PASO 1. QUEMAR O SIMULAR LOS DATOS
let pacientes=[
    {
        id:890,
        nombres:"Alicia Valencia",
        fechaNacimiento:"1999-01-12",
        ciudad:"Medellin",
        correo:"Aliciava@gmail.com",
        telefono:"3012613951",
        ips:"Jumbo las vegas",
        grupoIngresos:"C",
        tienePoliza:true,
        fechaAfiliacion:"2005-10-20"
        

    },

    {
        id: 891,
        nombres: "Juan Carlos Pérez",
        fechaNacimiento: "1988-04-25",
        ciudad: "Bogotá",
        correo: "juancp@gmail.com",
        telefono: "3129876543",
        ips: "Salud Bogotá",
        grupoIngresos: "B",
        tienePoliza: true,
        fechaAfiliacion: "2010-06-15"
    },
    {
        id: 892,
        nombres: "María Fernanda López",
        fechaNacimiento: "1995-11-03",
        ciudad: "Cali",
        correo: "mariaf@gmail.com",
        telefono: "3214567890",
        ips: "Cruz Roja",
        grupoIngresos: "A",
        tienePoliza: false,
        fechaAfiliacion: "2018-01-08"
    },
    {
        id: 893,
        nombres: "Carlos Alberto Ríos",
        fechaNacimiento: "1992-07-19",
        ciudad: "Barranquilla",
        correo: "carlor@gmail.com",
        telefono: "3001234567",
        ips: "Clinica del Caribe",
        grupoIngresos: "C",
        tienePoliza: true,
        fechaAfiliacion: "2015-09-10"
    }
]


//PASO 2. Crear una referencia a una etiqueta html donde vamos a renderizar
let fila=document.getElementById("fila")

//PASO 3. Se recorren los datos para obtenerlos de forma separada
pacientes.forEach(function(paciente){
    console.log(paciente)
    //PASO 4. Se crean columnas 
    let columna=document.createElement("div")
    columna.classList.add("col")

    //PASO 5. Se crean tarjetas
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","p-5","h-100","shadow")

    //PASO 6. Se crea una etiqueta para poner el nombre del paciente
    let nombre=document.createElement("h2")
    nombre.textContent=paciente.nombres

    //PASO FINAL. (ORDENANDO LAS CARTAS)
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})