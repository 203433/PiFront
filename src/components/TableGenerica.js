import React from 'react';


export default function TableGenerica(props) {
    return (
        <>

        <div style={{paddingBottom:".1rem"}}>
        <div  className="w-75 table " style={{ margin:"auto", fontSize:"1rem", marginTop:"2rem", paddingBottom:"1rem", textAlign:"center", backgroundColor:"#E2E4CC"}} >
            <h4 style={{backgroundColor:"#B7B7B7", paddingTop:"1rem", paddingBottom:"1rem", marginBottom:"1.5rem", fontFamily:"Poetsen One", fontSize:"2rem"}}>{props.sensor}</h4>
            <img src={props.src} alt="module" style={{width: "15rem", height: "15rem", marginBottom:"1.5rem" }}/>
            <table className="table"   >
        <tbody >
          <tr style={{backgroundColor:"white"}}  >
            
            <td style={{fontWeight: "bold"}} >{props.dato1}</td>
            <td >{props.dato2}</td>

          </tr>
          <tr  style={{backgroundColor:"white"}}>
            <td style={{fontWeight: "bold"}} >{props.dato3}</td>
            <td >{props.dato4}</td>

          </tr>
          <tr style={{backgroundColor:"white"}}>
            <td style={{fontWeight: "bold"}} >{props.dato5}</td>
            <td >{props.dato6}</td>

          </tr>
          <tr style={{backgroundColor:"white"}}>
            <td style={{fontWeight: "bold"}} >{props.dato7}</td>
            <td >{props.dato8}</td>

          </tr>
          <tr style={{backgroundColor:"white"}}>
            <td style={{fontWeight: "bold"}} >{props.dato9}</td>
            <td >{props.dato10}</td>

          </tr>
        </tbody>
      </table>

    </div>   

        </div>

      {props.foot}

        </>
    );
    }