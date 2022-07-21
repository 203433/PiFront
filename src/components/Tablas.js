import React from "react";
import Styles from "./Styles.css";
export default function Tablas(props) {
  return (
    <>
      <table
        className="w-75 table bdr shadow "
        style={{ margin: "auto", fontFamily: "Poetsen One", fontSize: "1rem" }}
      >
        <tbody>
          <tr style={{ backgroundColor: "#B7B7B7" }}>
            <td
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              Sensores
            </td>
          </tr>
          <tr
            style={{
              backgroundColor: "#DEDEDE",
              borderBottom: ".01rem #B7B7B7 solid",
            }}
          >
            <td style={{ fontWeight: "bold" }}>

                Inicio
              
            </td>
          </tr>
          <tr
            style={{
              backgroundColor: "#DEDEDE",
              borderBottom: ".01rem #B7B7B7 solid",
            }}
          >
            <td style={{ fontWeight: "bold" }}>
              <a href="#temp" style={{ textDecoration: "none" , color: "black"  }}>
                Sensor de Temperatura
              </a>
            </td>
          </tr>
          <tr
            style={{
              backgroundColor: "#DEDEDE",
              borderBottom: ".01rem #B7B7B7 solid",
            }}
          >
            <td style={{ fontWeight: "bold" }}>
              <a href="#humedad" style={{ textDecoration: "none" , color: "black" }}>
                Sensor de Humedad
              </a>
            </td>
          </tr>
          <tr
            style={{
              backgroundColor: "#DEDEDE",
              borderBottom: ".01rem #B7B7B7 solid",
            }}
          >
            <td style={{ fontWeight: "bold" }}>
              <a href="#niv" style={{ textDecoration: "none"  , color: "black"}}>
                Sensor de Nivel de Agua
              </a>
            </td>
          </tr>
          <tr
            style={{
              backgroundColor: "#DEDEDE",
              borderBottom: ".01rem #B7B7B7 solid",
            }}
          >
            <td style={{ fontWeight: "bold" }}>
              <a href="#ultra" style={{ textDecoration: "none" , color: "black" }}>
                Sensor Ultrasónico
              </a>
            </td>
          </tr>
          <tr
            style={{
              backgroundColor: "#DEDEDE",
              borderBottom: ".01rem #B7B7B7 solid",
            }}
          >
            <td style={{ fontWeight: "bold" }}>
              <a href="#lcd" style={{ textDecoration: "none" , color: "black" }}>
                LCD
              </a>
            </td>
          </tr>
          <tr
            style={{
              backgroundColor: "#DEDEDE",
              borderBottom: ".01rem #B7B7B7 solid",
            }}
          >
            <td style={{ fontWeight: "bold" }}>
              <a href="#bomba" style={{ textDecoration: "none"  , color: "black"}}>
                Bomba de Agua
              </a>
            </td>
          </tr>
          <tr
            style={{
              backgroundColor: "#DEDEDE",
              borderBottom: ".01rem #B7B7B7 solid",
            }}
          >
            <td style={{ fontWeight: "bold" }}>
              <a href="#rasp" style={{ textDecoration: "none" , color: "black" }}>
                RaspBerry
              </a>
            </td>
          </tr>
          <tr
            style={{
              backgroundColor: "#DEDEDE",
              borderBottom: ".01rem #B7B7B7 solid",
            }}
          >
            <td style={{ fontWeight: "bold" }}>
              <a href="#datos" style={{ textDecoration: "none" , color: "black" }}>
                Tablas de Datos
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
