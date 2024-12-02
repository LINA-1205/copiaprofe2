//PASOS PARA CONSUMIR API CON JS

export async function buscarEnfermedades(){

    //1. Se configura la url del servicio que se desea consumir(PARA DONDE VAMOS)

    const URL = "http://localhost:8080/api/enfermedad"

    //2. Se configura la peticion del servicio a consumir(A QUE VAMOS)

    let peticion={
        method:"GET"
    }

    //3.CONSUMIR EL API (ARRANCAMOS)
    let respuestaServidor= await fetch(URL,peticion);
    let enfermedades=await respuestaServidor.json();
    console.log(enfermedades);
    return enfermedades;
    }

    export async function registrarEnfermedad(datosEnfermedad){
        const URL ="http://localhost:8080/api/enfermedad"
        let peticion={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(datosEnfermedad)
        }
        let respuestaInicial=await fetch(URL,peticion)
        let respuestaFinal=await respuestaInicial.json()
        return respuestaFinal
    }
