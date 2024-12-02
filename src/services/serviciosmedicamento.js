//PASOS PARA CONSUMIR API CON JS

export async function buscarMedicamento(){

    //1. Se configura la url del servicio que se desea consumir(PARA DONDE VAMOS)

    const URL = "http://localhost:8080/api/medicamentos"

    //2. Se configura la peticion del servicio a consumir(A QUE VAMOS)

    let peticion={
        method:"GET"
    }

    //3.CONSUMIR EL API (ARRANCAMOS)
    let respuestaServidor= await fetch(URL,peticion);
    let medicamentos=await respuestaServidor.json();
    console.log(medicamentos);
    return medicamentos;
    }

    export async function registrarMedicamento(datosMedicamento){
        const URL ="http://localhost:8080/api/medicamentos"
        let peticion={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(datosMedicamento)
        }
        let respuestaInicial=await fetch(URL,peticion)
        let respuestaFinal=await respuestaInicial.json()
        return respuestaFinal
    }
