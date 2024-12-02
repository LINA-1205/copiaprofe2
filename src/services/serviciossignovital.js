//PASOS PARA CONSUMIR API CON JS

export async function buscarSignoVital(){

    //1. Se configura la url del servicio que se desea consumir(PARA DONDE VAMOS)

    const URL = "http://localhost:8080/api/signovital"

    //2. Se configura la peticion del servicio a consumir(A QUE VAMOS)

    let peticion={
        method:"GET"
    }

    //3.CONSUMIR EL API (ARRANCAMOS)
    let respuestaServidor= await fetch(URL,peticion);
    let signoVital=await respuestaServidor.json();
    console.log(signoVital);
    return signoVital;
    }

    export async function registrarSignoVital (datosSignoVital){
        const URL ="http://localhost:8080/api/signovital"
        let peticion={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(datosSignoVital)
        }
        let respuestaInicial=await fetch(URL,peticion)
        let respuestaFinal=await respuestaInicial.json()
        return respuestaFinal
    }
