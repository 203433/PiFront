export const medidasDeDispersion = (table, mtc) => {
    let rango = obtenerRango(table.li);
    let desviacionMedia = obtenerDMedia(table, mtc.media);
    let varianza = obtenerVarianza(table, mtc.media);
    let dEstandar = obtenerDEsctandar(varianza);
    return {
        rango,
        desviacionMedia,
        varianza,
        dEstandar
    };
}

const obtenerRango = (limites) => {
    return limites.ls[limites.li.length - 1] - limites.li[0];
}

const obtenerDMedia = (table, media) => {
    
    let suma = 0;
    table.mc.map((item, i) => (
        suma+= (Math.abs(item - media) * table.frecuencias.fabs[i])
    ));
    let dM = suma / table.frecuencias.facum[table.frecuencias.facum.length - 1];
    return dM;
}

const obtenerVarianza = (table, media) => {
    let suma = 0;
    table.mc.map((item, i) => (
        suma+= (Math.pow(item - media, 2) * table.frecuencias.fabs[i])
    ));
    let dM = suma / table.frecuencias.facum[table.frecuencias.facum.length - 1];
    return dM;
}

const obtenerDEsctandar = (dM) => {
    return Math.sqrt(dM);
}