// let signosVitales=[
//     {
//         nombre:"Presion arterial",
//         valor:"120/70",
//         fechamedida:"2000-07-12"
//     },
//     {
//         nombre: "Frecuencia cardíaca",
//         valor: "75 bpm",
//         fechamedida: "2023-10-30"
//     },
//     {
//         nombre: "Temperatura corporal",
//         valor: "37.0 °C",
//         fechamedida: "2023-10-29"
//     },
//     {
//         nombre: "Frecuencia respiratoria",
//         valor: "16 respiraciones/min",
//         fechamedida: "2023-10-28"
//     },
//     {
//         nombre: "Oxígeno en sangre",
//         valor: "98%",
//         fechamedida: "2023-10-27"
//     },
//     {
//         nombre: "Glicemia",
//         valor: "90 mg/dL",
//         fechamedida: "2023-10-30"
//     }
// ];

import { buscarSignoVital } from "../services/serviciossignovital.js"

//CONTROLADOR DE DASHBOARDS

//OBJETIVO:Recibir datos del BACK y hacerles render (render = PINTARLOS)
//1. LLAMAR AL API
buscarSignoVital()
  .then(function (respuestaBack) {
    console.log(respuestaBack)

//2. CREAR UNA REFERENCIA A UNA ETIQUETA HTML DONDE VAMOS A RENDERIZAR

let fila=document.getElementById("fila");

//3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA

respuestaBack.forEach(function (signoVital) {
    console.log(signoVital);
    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div");
    columna.classList.add("col");


    //5. SE CREA TARJETAS
    let tarjeta=document.createElement("div");
    tarjeta.classList.add("card","p-5","h-100","shadow");

    //6. SE CREA UNA ETIQUETA PARA PONER EL NOMBRE DEL PACIENTE 
    let nombre=document.createElement("h2");
    nombre.textContent=signoVital.nombre

    let valor=document.createElement("p");
    valor.textContent=signoVital.valor
    
    let fechaMedida=document.createElement("p");
    fechaMedida.textContent=signoVital.fechaMedida

    //PASO FINAL (ORDENAR LAS CARTAS)
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(valor);
    tarjeta.appendChild(fechaMedida);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
    

});

}).catch((error) => {
    console.log(error);
  })
