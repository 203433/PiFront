export const obtenerFrecuencias = (datos, limites) => {
    let fabs = freAbsoluta(limites, datos);
    let fre = fRelativa(datos, fabs);
    let facum = fAcumulada(fabs);
    let fcom = fComplementaria(facum, datos.length);
    return {fabs, fre,facum,fcom};
}

const freAbsoluta = (limites, datos) =>{
    let frecuenciasAbs = []
    for (let i=0; i<limites.li.length; i++){
        let frecuencia = 0;
        for(let j=0; j<datos.length; j++){
            if (limites.li[i]<=datos[j] && limites.ls[i]>=datos[j]){
                frecuencia++;
            }
        }
        frecuenciasAbs.push(frecuencia)
    }
    return frecuenciasAbs;
}

const fRelativa = (datos, fabs) =>{
    let frelativa = [];
    let total = 0
    for(let i=0; i<fabs.length; i++){
        let fRel =Number( fabs[i]) / datos.length
        frelativa.push(Number(fRel).toFixed(9));
        total += fRel;
    }
    frelativa.push(total)
    return frelativa;
}

const fAcumulada = (fabs) =>{
    let facum = [];
    let aux = 0;
    fabs.map((fab,i)=>{
        aux+=parseInt(fab);
        facum.push(aux);
        return true;
    })
    return facum;
}

const fComplementaria = (fAcumulada, n) => {
    let fComplentaria = [];
    fAcumulada.map((dato, i) => (
        fComplentaria.push(Number(n) - Number(dato))
    ));
    return fComplentaria;
}