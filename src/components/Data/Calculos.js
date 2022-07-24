import { useState } from "react";
import React from "react";


export default function Calculos() {

  const datos = [1.82,1.43,1.51,1.47,1.69,1.88,1.52,1.72,1.78,1.54,
                1.61,1.66,1.70,1.81,1.58,1.48,1.53,1.73,1.61,1.56,
                1.57,1.78];
  let arrAbc=[];
  const [arrDatos, setArrDatos] = useState([]); 
  const [showData, setShowData] = useState(false); 
  const [showTable, setShowTable] = useState(false);
  const [showGraphic, setShowGraphic] = useState(false);
  
  const [numClases, setNumClases] = useState(0); 
  const [rango, setRango] = useState(0); 
  const [numDatos, setNumDatos] = useState(0); 
  const [amplitud, setAmplitud] = useState(0); 
  const [limSup, setLimSup] = useState([]); 
  const [limInf, setLimInf] = useState([]); 
  const [Abc, setAbc] = useState([]); 
  const [uniVa, setUniVa] = useState(null); 
  const [limSupEx, setLimSupEx] = useState([]); 
  const [limInfEx, setLimInfEx] = useState([]);
  const [marcaClase, setMarcaClase] = useState([]); 
  const [frecuencia, setFrecuencia] = useState([]);
  const [frecRe, setFrecRe] = useState([]);
  const [frecAcum, setFrecAcum] = useState([]);
  const [freCom, setFreCom] = useState([]);

  const [media, setMedia] = useState(0)
  const [varianzaF, setVarianzaF] = useState(0)
  const [DVStand, setDVStan] = useState(0)
  const [DVM, setDVM] = useState(0)
  const [ventana, setVentana] = useState(true)
  const [muestra, setMuestra] = useState(false)
  const [datosTotales,setDatosTotales]=useState(0)

  //Datos ordenados
  const variablesSort = variables => {
    const aux = variables.length;
    for (let i = 0; i < aux; i++) {
      for (let j = 0; j < aux - 1 - i; j++) {
        if (variables[j] > variables[j + 1]) {
          [variables[j], variables[j + 1]] = [variables[j + 1], variables[j]];
        }
      }
    }
    return variables;
  };

  const datosNTabla = () => {

    //Datos ordenados
    const datosSorted = variablesSort(datos);
    setArrDatos(datosSorted);

    //Número de clases
    const formClas = Math.round(1 + (3.322 * Math.log10(datosSorted.length)))
    setNumClases(formClas);

    //Letras de clases
    let j = formClas;
    for (let i = 65; i < j; i++){
      arrAbc.push(String.fromCharCode(i));
    }
    setAbc(arrAbc);

    //Valor de N
    setNumDatos(datosSorted.length);

    //Rango
    let r = datos[datos.length -1 ] - datos[0];
    let formuRango=0;
    if (Number.isInteger(r)){
      formuRango=r;
    } else {
      formuRango= r.toFixed(4);
    }
    setRango(formuRango);

    //Amplitud
    let am = formuRango / formClas;
    if (Number.isInteger(am)){
        am = am + 1;
        setAmplitud(am);
    }else if (am<=0.09) am = 0.1;
     else if (am<=0.9) am = 1;
     else{
         am = Math.round(am);
        }
    setAmplitud(am);
    setShowData(true)
  }


  const tableA=()=>{
        //Limites
        let auxli = Number(arrDatos[0]) + Number(amplitud);
        for (let i=0; i<numClases; i++){
            // eslint-disable-next-line no-unused-expressions
            i===0 ? limInf.push(Number(arrDatos[0])): (!Number.isInteger(auxli) ? limInf.push(Number(auxli).toFixed(3)):
            limInf.push(auxli)
            , auxli+=Number(amplitud));

        }

        let element;
        let auxls = Number.isInteger(amplitud) ? 1 : amplitud===0.1 ? 0.01: 0.001;
        for (let i=0; i<numClases; i++){
            element = (Number(limInf[i]) - Number(auxls)) + Number(amplitud);
            limSup.push(Number.isInteger(element) ? element : Number(element).toFixed(3));
        }

        let uv = (Number.parseFloat(limInf[1]) - Number.parseFloat(limSup)) / 2;
        limInf.map((lim, i) => {
            let limE = parseFloat(lim)-uv;
            limInfEx.push(Number(limE).toFixed(3));
        })

        uv = (Number.parseFloat(limInf[1]) - Number.parseFloat(limSup[0])) / 2;
        limSup.map((lim, i) => {
            let limE = Number.parseFloat(lim)+uv;
            limSupEx.push(limE.toFixed(3));
        })

        //Marca de clase
        for (let i= 0; i<limInf.length; i++){
            let marca = (Number.parseFloat(limInf[i]) + Number.parseFloat(limSup[i]))/2;
            marcaClase.push(Number(marca).toFixed(3));
        }

        //Frecuencia absoluta
        for (let i=0; i<limInf.length; i++){
            let frecuencias = 0;
            for(let j=0; j<arrDatos.length; j++){
                if (limInf[i]<=arrDatos[j] && limSup[i]>=arrDatos[j]){
                    frecuencias++;
                }
            }
            frecuencia.push(frecuencias)
        }

        //Frecuencia relativa
        let total = 0
        for(let i=0; i<frecuencia.length; i++){
            let fRel =Number( frecuencia[i]) / arrDatos.length
            frecRe.push(Number(fRel).toFixed(3));
            total += fRel;
        }
        frecRe.push(total)

          //Frecuencia acumulada
        let aux = 0;
        frecuencia.map((frecuencia,i)=>{
            aux+=parseInt(frecuencia);
            frecAcum.push(aux);
        })

        //Frecuencia complementaria
        aux = arrDatos.length;
        frecAcum.map((dato, i) => (
          freCom.push(Number(aux) - Number(dato))
        ));
    for (let i = 0; i < numClases; i++) {
      Abc.push(arrAbc[i])

    }
    setShowTable(true)
    mediasDis();
  }

  const mediasDis=()=>{
    let sumDatos=0;
    for(let i=0;i<arrDatos.length;i++){
      sumDatos+=arrDatos[i];
    }
    let mediaCal=sumDatos/arrDatos.length;

    setMedia(mediaCal.toFixed(3))

    sumDatos=0;
    for(let i=0;i<arrDatos.length;i++){
      sumDatos+=Math.abs(arrDatos[i]-mediaCal);
    }

    let desviacionM=sumDatos/arrDatos.length;
    setDVM(desviacionM.toFixed(3));

    sumDatos=0;
    for(let i=0;i<arrDatos.length;i++){
      sumDatos+=Math.pow(Math.abs(arrDatos[i]-mediaCal),2);
    }

    let varianza=sumDatos/arrDatos.length;
    setVarianzaF(varianza.toFixed(3));
    setShowGraphic(true)
  }


  const data = [
    {name: 'Geeksforgeeks', students: 400},
    {name: 'Technical scripter', students: 700},
    {name: 'Geek-i-knack', students: 200},
    {name: 'Geek-o-mania', students: 1000}
  ];
    
  



  return (
    <div >
            <div>
        <button
          onClick={datosNTabla}
        >

          Calcular
        </button>

      </div>
        {showData && (
          <div >


            <h2>Datos ordenados:</h2>
            <h3>
              {arrDatos.map(function (singleData) {
                return (singleData + ', ')
              })}
            </h3>

            <h2>Numero de clases : {numClases}</h2>
            <h2>Rango : {rango}</h2>
            <h2>Numero de datos : {numDatos}</h2>
            <h2>Amplitud : {amplitud}</h2>



            <button
              onClick={tableA}
              type="submit"
            >
              Tabla
            </button>

            {/* <button
              onClick={grafica}
              type="submit"
            >
              Grafica
            </button> */}


          </div>
        )}

      <div>
      {showTable && (
          <div>
            <table class="table ">
              <thead>
                <tr>
                  <th scope="col">Clases</th>
                  <th scope="col">limite infe</th>
                  <th scope="col">limite sup</th>
                  <th scope="col">limite infe exact</th>
                  <th scope="col">limite sup exact</th>
                  <th scope="col">Marca de clase</th>
                  <th scope="col">Frec. Abs.</th>
                  <th scope="col">Frec. Rela.</th>
                  <th scope="col">Frec. Acum.</th>
                  <th scope="col">Frec. Comp.</th>
                </tr>

              </thead>
              <tbody>


                {Abc.map((resul, index) => (

                  <tr>
                    <th >{String.fromCharCode(65 + index)}</th>
                    <td>{limInf[index]}</td>
                    <td>{limSup[index]}</td>
                    <td>{limInfEx[index]}</td>
                    <td>{limSupEx[index]}</td>
                    <td>{marcaClase[index]}</td>
                    <td>{frecuencia[index]}</td>
                    <td>{frecRe[index]}</td>
                    <td>{frecAcum[index]}</td>
                    <td>{freCom[index]}</td>
                  </tr>

                ))}


              </tbody>
            </table>

            <div>
              
              <h4>Media: {media}</h4>
              <h4>Desviacion Media: {DVM}</h4>
              <h4>Varianza: {varianzaF}</h4>
              <h4>Desviacion Estandar: {Math.pow(varianzaF,1/2).toFixed(3)} </h4>


            </div>
          </div>
        )}
      </div>




    </div>

  )


}