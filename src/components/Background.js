import React from "react";


export default function Background(props) {
  return (
    <>
      <div className={props.className} style={props.estilo}>
        {props.componente }
        
      </div>
    </>
  );
}
