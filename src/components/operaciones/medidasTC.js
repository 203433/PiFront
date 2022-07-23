export const obtenerMedidasTendenciaCentral = (tabla, operaciones, n) =>{
    let media = obtenerMedia(tabla, n);
    let cMe = obtenerCMe(tabla, n);
    let mediana = obtenerMediana(tabla, cMe,operaciones, n);
    let cMo = obtenerCMo(tabla.frecuencias);
    let moda = obtenerModa(tabla.frecuencias.fabs, tabla.li.lie, operaciones.amplitud, cMo);
    return {media,cMe, mediana, cMo, moda};
}

const obtenerMedia = (tabla, n) => {
    let suma = 0;
    tabla.frecuencias.fabs.map((fab, i) => {
        suma += Number.parseFloat(fab) * parseFloat(tabla.mc[i]);
        return true;
    });
    let media = suma / n;

    return Number(media).toFixed(3);
}

const obtenerCMe = (tabla, n)=>{
    let cMe = ( n + 1 ) / 2;
    let facs = [...tabla.frecuencias.facum];
    let clase = 0;
    let cercano = facs.reduce(function(prev, curr) {
        return (Math.abs(curr - cMe) < Math.abs(prev - cMe) ? curr : prev);
      });
    tabla.frecuencias.facum.map((item, i) => {
        if (cercano === item){
            clase = i;
        } return 0;
    });
    return clase;
}
const  obtenerMediana=(tabla,clase, operaciones, n)=>{
    let mediana = Number.parseFloat(tabla.li.lie[clase]) + Number.parseFloat(n/2 - tabla.frecuencias.facum[clase-1]) / Number.parseFloat(tabla.frecuencias.fabs[clase]) * Number(operaciones.amplitud);
    return Number(mediana).toFixed(2);
}

const obtenerCMo = (frecuencias) => {
    let cMo=0;
    let aux=0;
    frecuencias.fabs.map((item,i) => {
        (item>frecuencias.fabs[i-1] && item>aux) && (aux=item);
        item>=aux && (cMo=i);
        return true;
    });

    return cMo;
}

const obtenerModa = (fabs,liex,amplitud, cMo) => {
    let first = Number.parseFloat(liex[cMo]);
    let second = Number.parseFloat(fabs[cMo] - fabs[cMo -1]);
    let third = Number.parseFloat(2 * (fabs[cMo]) - fabs[cMo-1] - fabs[cMo+1]);
    let moda = first + second / third * amplitud;
    return Number(moda).toFixed(2);
}