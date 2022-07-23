export const obtenerLimites = (datos, op)=>{
    let li = obtenerLI(datos, op);
    let ls = obtenerLS(li,op);
    let lie = obtenerLIE(li,ls[0],op.k);
    let lse = obtenerLSE(ls,li[1],op.k)
    return {li,ls,lie, lse};
}

const obtenerLI = (datos, operaciones) => {
    let {k, amplitud} = operaciones;
    let limites = [];
    let aux = Number(datos[0]) + Number(amplitud);
    for (let i=0; i<k; i++){
        // eslint-disable-next-line no-unused-expressions
        i===0 ? limites.push(Number(datos[0])): (!Number.isInteger(aux) ? limites.push(Number(aux).toFixed(2)):
            limites.push(aux)
        , aux+=Number(amplitud));
        
    }
    return limites;
}

const obtenerLS = (limitesI, operaciones) => {
    let {k, amplitud} = operaciones;
    let limites = []
    let element;
    let aux = Number.isInteger(amplitud) ? 1 : amplitud===0.1 ? 0.01: 0.001;
    for (let i=0; i<k; i++){
        element = (Number(limitesI[i]) - Number(aux)) + Number(amplitud);
        limites.push(Number.isInteger(element) ? element : Number(element).toFixed(2));
    }
    return limites;
}

const obtenerLIE = (limitesI, limSup, k) => {
    let uv = (Number.parseFloat(limitesI[1]) - Number.parseFloat(limSup)) / 2;
    let limInfEx = [];
    limitesI.map((lim, i) => {
        let limE = parseFloat(lim)-uv;
        limInfEx.push(Number(limE).toFixed(3));
    })
    return limInfEx;
}

const obtenerLSE = (limitesS, limInf, k) => {
    let uv = (Number.parseFloat(limInf) - Number.parseFloat(limitesS[0])) / 2;
    let limSupEx = [];
    limitesS.map((lim, i) => {
        let limE = Number.parseFloat(lim)+uv;
        limSupEx.push(limE.toFixed(3));
    })
    return limSupEx;
}