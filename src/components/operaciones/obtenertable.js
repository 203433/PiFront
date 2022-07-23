import { obtenerLimites } from "./limites";
import { obtenerFrecuencias } from "./frecuencias";
import { obtenerMarcaClase } from "./operacionesBasicas";
export const obtenerTable = (datos, operaciones)=>{
    let clases = obtenerClases(operaciones.k);
    let li = obtenerLimites(datos, operaciones);
    let frecuencias = obtenerFrecuencias(datos, li)
    let mc = obtenerMarcaClase(li);
    let tabla = {clases,li,frecuencias,mc};
    return tabla;
}

const obtenerClases = (k) => {
    let j = 65+k;
    let letras=[];
    for (let i = 65; i < j; i++){
        letras.push(String.fromCharCode(i));
    }
    return letras;
}