//OBJETIVO: RECIBIR DATOSS DEL BACK Y HACERLES (render=PINTARLOS)
//1. QUEMAR O SIMULAR LOS DATOS 
let medicamentos=[
    {
        id: 2,
        nombre: "Ibuprofeno",
        presentacion: "tableta",
        dosis: "1 pastilla cada 8 horas",
        laboratorio: "Genfar",
        fechaCaducidad: "2025-12-15",
        contraIndicaciones: "No usar en personas con problemas gástricos severos",
        registroInvima: "456789",
        copago: false
    },
    {
        id: 3,
        nombre: "Amoxicilina",
        presentacion: "cápsula",
        dosis: "1 cápsula cada 12 horas",
        laboratorio: "Sandoz",
        fechaCaducidad: "2027-03-10",
        contraIndicaciones: "No administrar en personas alérgicas a la penicilina",
        registroInvima: "987654",
        copago: true
    },
    {
        id: 4,
        nombre: "Loratadina",
        presentacion: "tableta",
        dosis: "1 tableta diaria",
        laboratorio: "MK",
        fechaCaducidad: "2026-09-20",
        contraIndicaciones: "Evitar en menores de 2 años",
        registroInvima: "123789",
        copago: false
    },
    {
        id: 5,
        nombre: "Paracetamol",
        presentacion: "jarabe",
        dosis: "10 ml cada 6 horas",
        laboratorio: "Roche",
        fechaCaducidad: "2028-06-05",
        contraIndicaciones: "No exceder la dosis diaria máxima",
        registroInvima: "741852",
        copago: true
    },
    {
        id: 6,
        nombre: "Metformina",
        presentacion: "tableta",
        dosis: "1 tableta antes de cada comida",
        laboratorio: "Bayer",
        fechaCaducidad: "2029-11-01",
        contraIndicaciones: "No usar en pacientes con insuficiencia renal severa",
        registroInvima: "369258",
        copago: false
    },
    {
        id: 7,
        nombre: "Omeprazol",
        presentacion: "cápsula",
        dosis: "1 cápsula en ayunas",
        laboratorio: "Pfizer",
        fechaCaducidad: "2030-04-18",
        contraIndicaciones: "No usar por más de 14 días consecutivos sin supervisión médica",
        registroInvima: "852963",
        copago: true
    }
];
;
//2. CREAR UNA REFERENCIA A UNA ETIQUETA DE HTML DONDE VAMOS A RENDERIZAR
let fila=document.getElementById("fila");

//3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
medicamentos.forEach(function(medicamento){
    console.log(medicamento);
    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div");
    columna.classList.add("col");


    //5. SE CREA TARJETAS
    let tarjeta=document.createElement("div");
    tarjeta.classList.add("card","p-5","h-100","shadow");

    //6. SE CREA UNA ETIQUETA PARA PONER EL NOMBRE DEL PACIENTE 
    let nombre=document.createElement("h2");
    nombre.textContent=medicamento.nombre

    let presentacion=document.createElement("p");
    presentacion.textContent=medicamento.presentacion

    let dosis=document.createElement("p");
    dosis.textContent=medicamento.dosis

    let laboratorio=document.createElement("p");
    laboratorio.textContent=medicamento.laboratorio

    let fechaCaducidad=document.createElement("p");
    fechaCaducidad.textContent=medicamento.fechaCaducidad

    let contraIndicaciones=document.createElement("p");
    contraIndicaciones.textContent=medicamento.contraIndicaciones

    let registroInvima=document.createElement("p");
    registroInvima.textContent=medicamento.registroInvima
    
    let copago=document.createElement("p");
    copago.textContent=medicamento.copago

    //PASO FINAL (ORDENAR LAS CARTAS)
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(presentacion);
    tarjeta.appendChild(dosis);
    tarjeta.appendChild(laboratorio);
    tarjeta.appendChild(fechaCaducidad);
    tarjeta.appendChild(contraIndicaciones);
    tarjeta.appendChild(registroInvima);
    tarjeta.appendChild(copago);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
});