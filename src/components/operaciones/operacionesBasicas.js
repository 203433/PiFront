export const obtenerOBasica = (datos)=>{
    let k = obtenerK(datos);
    let rango = obtenerR(datos);
    let amplitud = obtenerA(rango, k);
    return {k,rango, amplitud};
}

const obtenerK = (datos) => {
    let k = Math.round(1 + 3.322 * Math.log10(datos.length));
    return k;
}

let obtenerR = (datos) => {
    let r = datos[datos.length -1 ] - datos[0];
    if (Number.isInteger(r)){
        return r;
    } 
    return r.toFixed(2);
}

let obtenerA = ( r, k) =>{
    let am = r / k;
    if (Number.isInteger(am)){
        am = am + 1;
    }else if (am<=0.09) am = 0.1;
     else if (am<=0.9) am = 1;
     else{
         am = Math.round(am);
        }
    return am;
}

export const obtenerMarcaClase = (lim) =>{
    let marcaClase = []
    for (let i= 0; i<lim.li.length; i++){
        let marca = (Number.parseFloat(lim.li[i]) + Number.parseFloat(lim.ls[i]))/2;
        marcaClase.push(Number(marca).toFixed(3));
    }
    return marcaClase;
}