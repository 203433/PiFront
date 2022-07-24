import React, { useState, useEffect } from 'react';

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer
} from "recharts";
export default function  Graficas (){
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

for (let index = 0; index < users.length; index++) {
     datos[index] = users[index].temperatura;
}


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
console.log(arrAbc)

const data = [
  
  { name: "Facebook", value: frecAcum[0] },
  { name: "Instagram", value: 15 },
  { name: "Twiter", value: 10 },
  { name: "Telegram", value: 50 },
];
  return (
    <div>
        <h1>Graficas</h1>
    <ResponsiveContainer width={'100%'} height={300}>
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
            style={ { fontSize: ".8rem", fontWeight: "bold" } }
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
      
  );
};

