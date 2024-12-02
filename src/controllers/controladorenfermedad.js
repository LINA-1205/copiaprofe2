import { registrarEnfermedad } from "../services/serviciosenfermedades.js";

let nombreEnfermedad = document.getElementById("nombreenfermedad");
let sintomasEnfermedad = document.getElementById("sintomasenfermedad");
let clasificacionEnfermedad = document.getElementById("clasificacionenfermedad");
let gradoEnfermedad = document.getElementById("gradoenfermedad");
let probabilidadDeVidaEnfermedad = document.getElementById("probabilidadvidaenfermedad");

let botonRegistroEnfermedad = document.getElementById("botonregistroenfermedad");

botonRegistroEnfermedad.addEventListener("click", function(evento){
    evento.preventDefault();

    let datosFormularioEnfermedad = {

        nombre: nombreEnfermedad.value,
        sintomas: sintomasEnfermedad.value,
        clasificacion: clasificacionEnfermedad.value,
        grado: gradoEnfermedad.value,
        probabilidadVida: parseFloat(probabilidadDeVidaEnfermedad)

    }

       // 6. Se envían los datos al back
    
       console.log(datosFormularioEnfermedad)
       registrarEnfermedad(datosFormularioEnfermedad)
       .then(function(respuestaBack){
         console.log(respuestaBack)
         Swal.fire({
           title: "Registro Exitoso",
           text: "Ya eres parte de nuestra gran familia!",
           icon: "success"
         });
       })
       
      
   });
   


/*
    private long id;
    private String nombre;
    private String sintomas;
    private String clasificacion;
    private String grado;
    private Double probabilidadVida;
*/