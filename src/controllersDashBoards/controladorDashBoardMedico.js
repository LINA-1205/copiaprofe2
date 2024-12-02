//OBJETIVO: RECIBIR DATOSS DEL BACK Y HACERLES (render=PINTARLOS)
//1. QUEMAR O SIMULAR LOS DATOS 
// let medicos=[
//     {
//         id: 11,
//         nombre: "María Fernanda López",
//         matriculaProfesional: "en trámite",
//         especialidad: "pediatra",
//         salario: 3500000,
//         ips: "Compensar",
//         correo: "mfernanda@gmail.com",
//         telefono: "+57 3145678934",
//         direccionConsultorio: "Carrera 15 #78-25",
//         finDeSemanaDisponible: false
//     },
//     {
//         id: 12,
//         nombre: "Juan Carlos Gómez",
//         matriculaProfesional: "realizado",
//         especialidad: "cardiólogo",
//         salario: 5000000,
//         ips: "Sanitas",
//         correo: "juancarlosg@gmail.com",
//         telefono: "+57 3001234567",
//         direccionConsultorio: "Avenida 45 #123-10",
//         finDeSemanaDisponible: true
//     },
//     {
//         id: 13,
//         nombre: "Carolina Mejía Ramírez",
//         matriculaProfesional: "realizado",
//         especialidad: "dermatóloga",
//         salario: 4000000,
//         ips: "Coomeva",
//         correo: "cmejia@gmail.com",
//         telefono: "+57 3123456789",
//         direccionConsultorio: "Calle 50 #10-20",
//         finDeSemanaDisponible: false
//     },
//     {
//         id: 14,
//         nombre: "Andrés Felipe Martínez",
//         matriculaProfesional: "en trámite",
//         especialidad: "neurólogo",
//         salario: 4500000,
//         ips: "Famisanar",
//         correo: "andresfm@gmail.com",
//         telefono: "+57 3112345678",
//         direccionConsultorio: "Carrera 8 #40-15",
//         finDeSemanaDisponible: true
//     },
//     {
//         id: 15,
//         nombre: "Laura Sofía Rodríguez",
//         matriculaProfesional: "realizado",
//         especialidad: "ginecóloga",
//         salario: 3800000,
//         ips: "Nueva EPS",
//         correo: "laurasofia@gmail.com",
//         telefono: "+57 3209876543",
//         direccionConsultorio: "Carrera 20 #34-12",
//         finDeSemanaDisponible: false
//     },
//     {
//         id: 16,
//         nombre: "Santiago Torres Vélez",
//         matriculaProfesional: "realizado",
//         especialidad: "ortopedista",
//         salario: 4200000,
//         ips: "Sura",
//         correo: "storres@gmail.com",
//         telefono: "+57 3167894321",
//         direccionConsultorio: "Calle 80 #22-45",
//         finDeSemanaDisponible: true
//     }
// ];


import {buscarMedico} from "../services/serviciosMedico.js"

//CONTROLADOR DE DASHBOARDS

//OBJETIVO:Recibir datos del BACK y hacerles render (render = PINTARLOS)
//1. LLAMAR AL API
buscarMedico()
  .then(function (respuestaBack) {
    console.log(respuestaBack)


//2. CREAR UNA REFERENCIA A UNA ETIQUETA DE HTML DONDE VAMOS A RENDERIZAR
let fila=document.getElementById("fila");

//3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
respuestaBack.forEach(function(medico){
    console.log(medico);
    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div");
    columna.classList.add("col");


    //5. SE CREA TARJETAS
    let tarjeta=document.createElement("div");
    tarjeta.classList.add("card","p-5","h-100","shadow");

    //6. SE CREA UNA ETIQUETA PARA PONER EL NOMBRE DEL MEDICO 
    let nombre=document.createElement("h2");
    nombre.textContent=medico.nombres;

    let matriculaProfesional=document.createElement("p");
    matriculaProfesional.textContent=medico.matriculaProfesional;

    let especialidad=document.createElement("p");
    especialidad.textContent=medico.especialidad;

    let salario=document.createElement("p");
    salario.textContent=medico.salario;

    let ips=document.createElement("p");
    ips.textContent=medico.ips;

    let correo=document.createElement("p");
    correo.textContent=medico.correo;

    let telefono=document.createElement("p");
    telefono.textContent=medico.telefono;

    let direccionConsultorio=document.createElement("p");
    direccionConsultorio.textContent=medico.direccionConsultorio;
    
    let disponibleFindesemana=document.createElement("p");
    disponibleFindesemana.textContent=medico.disponibleFindesemana

    //PASO FINAL (ORDENAR LAS CARTAS)
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(matriculaProfesional);
    tarjeta.appendChild(especialidad);
    tarjeta.appendChild(salario);
    tarjeta.appendChild(ips);
    tarjeta.appendChild(correo);
    tarjeta.appendChild(telefono);
    tarjeta.appendChild(direccionConsultorio);
    tarjeta.appendChild(disponibleFindesemana);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
});


}).catch((error) => {
  console.log(error);
})
