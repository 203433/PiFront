import React , { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const TableDatos = (url) => {
    
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)


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







  const data = [{ name: "frecuencia", value: 0 }];
  const arregloNombres = ["F.Abs A", "F.Abs B", "F.Abs C", "F.Abs D", "F.Abs E", "F.Abs F", "F.Abs G", "F.Abs H", "F.Abs I", ]
  for (let index = 0; index < frecuencia.length; index++) {
    data[index] = { name: arregloNombres[index], value: frecuencia[index] };
  }








//NUNCA TOCAR, SOLO SI ESTÁ DISPUESTO A PERDER SU VIDA, SALUD MENTAL Y AMOR PROPIO, atte dios verdi
  const fetchData = (url) => {
    setIsLoading(true)
    fetch("http://localhost:3001/datos")
      .then(response => {
        return response.json(url)
      })
      .then(data => {
        setIsLoading(false)
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  const datos = []
console.log(arrDatos);
for (let index = 0; index < users.length; index++) {
     datos[index] = users[index].temperatura;
}




for (let index = 0; index < users.length; index++) {
  datos[index] = users[index].temperatura;
}

























































































var resultadoFinal = '';


var mediaMuestra = 0
const muestraPoblacion=((numDatos*1.96*0.5*0.5)/((0.03*0.03)*(numDatos-1)+1.96+0.5+0.5));
var arrDatMuestra = [];
const muestraPoblacionR = Math.round(muestraPoblacion)
console.log("Esta es la muestra de la poblacion " + muestraPoblacionR);


var delta = Math.floor( arrDatos.length / muestraPoblacionR );
console.log("Valor de Delta" + delta);
for (let i = delta; i < arrDatos.length; i=i+delta) {
  mediaMuestra = mediaMuestra + arrDatos[i]
  arrDatMuestra.push(arrDatos[i])
  console.log(mediaMuestra);
}
var sumaDatosMuestra = mediaMuestra
mediaMuestra = mediaMuestra/muestraPoblacionR
 console.log("Valor de la media de la muestra" + mediaMuestra);
 console.log("Valor de la población de la muestra" +  media);
 console.log((Math.pow(varianzaF,1/2).toFixed(3)));
 const valorZc = (mediaMuestra - media) / ((Math.pow(varianzaF,1/2).toFixed(3)) / Math.sqrt(muestraPoblacionR));
 console.log(valorZc);

 let desviacionMuestra=Math.sqrt(sumaDatosMuestra/arrDatos.length);



if (valorZc <= -1.96 || valorZc >= 1.96) {
  resultadoFinal = "Hipótesis alternativa ACEPTADA"
} else {
  resultadoFinal = "Hipótesis alternativa RECHAZADA"
}

  console.log(resultadoFinal);


return (  
    <div style={{textAlign:"center",  margin:"auto", marginTop:"1rem"}} className="w-75">
            <div style={{}}>
        <button
          onClick={datosNTabla}
          className="btn btn-success"
        >

          Calcular Datos de Temperatura
        </button>

      </div>
        {showData && (
          <div >


            <h3><b>Datos ordenados:</b></h3>
            <h4>
              {arrDatos.map(function (singleData) {
                return (singleData + ', ')
              })}
            </h4>

            <h4><b>Numero de clases : </b>{numClases}</h4>
            <h4><b>Rango : </b> {rango}</h4>
            <h4><b>Numero de datos : </b> {numDatos}</h4>
            <h4><b>Amplitud : </b> {amplitud}</h4>



            <button
              onClick={tableA}
              type="submit"
              className="btn btn-success"
            >
              Tabla de Temperatura
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
            <table className="table " style={{marginTop:"1rem"}}>
              <thead style={{ backgroundColor: "#B7B7B7" }}>
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
              <tbody style={{ backgroundColor: "white" }}>


                {Abc.map((resul, index) => (

                  <tr >
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

            <div style={{}}>
              
              <h4><b>Media:</b> {media}</h4>
              <h4><b>Desviacion Media:</b> {DVM}</h4>
              <h4><b>Varianza:</b> {varianzaF}</h4>
              <h4><b>Desviacion Estandar:</b> {Math.pow(varianzaF,1/2).toFixed(3)} </h4>
              <div>
                <h1>Graficas</h1>
                <ResponsiveContainer width={"100%"} height={300}>
                  <PieChart width={400} height={400}>
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={data}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#6AB26C"
                      label
                      style={{ fontSize: ".8rem", fontWeight: "bold" }}
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>    
              <div>
                <h3><b>Hipótesis</b></h3>
                <h4>Los Datos necesarios son: </h4>
                <h5>Media de Población: {media} </h5>
                <h5>Media de la Muestra: {mediaMuestra}</h5>
                <h5>Desv Estandar de la poblacion: {Math.pow(varianzaF,1/2).toFixed(3)}</h5>
                <h5>Desv Estandar de la muestra: {desviacionMuestra.toFixed(3)}</h5>
                <h5>Tamaño de la muestra: {muestraPoblacionR}</h5>
                <h5>Tamaño de la población: {numDatos}</h5>
                <h5>Margen de Error: 3%</h5>
                <h5>Significancia: 5%</h5>
                <h5>Nivel de Confianza: 95%</h5>
                <h5>Valor Z: {valorZc}</h5>
                <h5>Hipótesis Resultante: {resultadoFinal}</h5>



              </div>

            </div>
          </div>
        )}
      </div>




    </div>

  )}
  export default TableDatos;