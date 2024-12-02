//PASOS PARA CONSUMIR API CON JS

export async function buscarMedico(){

    //1. Se configura la url del servicio que se desea consumir(PARA DONDE VAMOS)

    const URL = "http://localhost:8080/api/medico"

    //2. Se configura la peticion del servicio a consumir(A QUE VAMOS)

    let peticion={
        method:"GET"
    }

    //3.CONSUMIR EL API (ARRANCAMOS)
    let respuestaServidor= await fetch(URL,peticion);
    let medicos=await respuestaServidor.json();
    console.log(medicos);
    return medicos;
    }

    export async function registrarMedico(datosMedico){
        const URL ="http://localhost:8080/api/medico"
        let peticion={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(datosMedico)
        }
        let respuestaInicial=await fetch(URL,peticion)
        let respuestaFinal=await respuestaInicial.json()
        return respuestaFinal
    }
