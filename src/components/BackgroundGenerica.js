import React from "react";
import TableGenerica from "./TableGenerica";
import Graficas from "./Graficas";

export default function BackgroundGenerica(props) {
  return (
    <>
      <div className={props.className} style={props.estilo}>
        {props.componente}
        <div id="temp">
          <TableGenerica
            sensor="Sensor de Temperatura"
            src="https://sandorobotics.com/wp-content/uploads/2017/06/New-DHT11-Temperature-And-Relative-Humidity-Sensor-Module-For-Arduino-Free-Shipping-2.jpg"
            dato1="Modelo"
            dato2="DHT11"
            dato3="Tiempo de Respuesta"
            dato4="6 S"
            dato5="Interchangeability"
            dato6="Fully Interchangeable"
            dato7="Accuracy"
            dato8="±1℃"
            dato9="Measure Range"
            dato10="0℃"
            graficaPie={<Graficas/> }
          />
        </div>
    
        <div id="humedad">
          <TableGenerica
            sensor="Sensor de Humedad"
            src="https://cdn.shopify.com/s/files/1/0083/1858/2874/files/sensor-de-humedad-en-suelo-yl-69_2048x2048.jpg?v=1595010811"
            dato1="Voltaje de alimentación"
            dato2="3.3V - 5V"
            dato3="Corriente de Operación"
            dato4="35mA"
            dato5="Superficie de electrodo"
            dato6="Estaño"
            dato7="Vida útil electrodo sumergido"
            dato8="3 a 6 meses"
            dato9="Dimensiones YL-38"
            dato10="30*16 mm"
            graficaPie={<Graficas/> }

          />
        </div>
        <div id="ultra">
          <TableGenerica
            sensor="Sensor Ultrasónico"
            src="https://media.naylampmechatronics.com/741-superlarge_default/sensor-ultrasonido-hc-sr04.jpg"
            dato1="Working Voltage"
            dato2="DC 5 V"
            dato3="Working Current"
            dato4="15mA"
            dato5="Working Frequency"
            dato6="40Hz"
            dato7="Max Range"
            dato8="4m"
            dato9="Min Range"
            dato10="2cm"
            graficaPie={<Graficas/> }

          />
        </div>
        <div id="niv">
          <TableGenerica
            sensor="Nivel de Agua"
            src="https://www.mechatronicstore.cl/wp-content/uploads/2018/06/ZPC5-M16-2-0mm-sensor-de-nivel-de-agua-tanque-seguro-l-quido-flotador-100-V.jpg"
            dato1="Voltaje de funcionamiento"
            dato2="3-5VDC"
            dato3="Dimensiones del producto"
            dato4="62x20x8mm"
            dato5="Color"
            dato6="Negro"
            dato7="Material"
            dato8="Plástico"
            dato9="Tipo"
            dato10="FF311"

          />
        </div>

        

        <div id="lcd">
          <TableGenerica
            sensor="LCD"
            src="https://cdn.shopify.com/s/files/1/1040/8806/products/photo_IC-11004_PantallaLCD_I2C_01_1500x.png?v=1627352199"
            dato1="Vdd"
            dato2="Ground pin connected to system ground"
            dato3="Vdd"
            dato4="Powers the LCD with +5V (4.7V – 5.3V)"
            dato5="VE"
            dato6="Decides the contrast level of display"
            dato7="Register Select"
            dato8="Connected to Microcontroller"
            dato9="Enable"
            dato10="Connected to Microcontroller Pin"
          />
        </div>

        <div id="bomba">
          <TableGenerica
            sensor="Bomba de agua"
            src="https://nomada-e.com/store/526-large_default/mini-bomba-de-agua-sumergible-2-lmin-.jpg"
            dato1="L"
            dato2="337"
            dato3="W"
            dato4="180"
            dato5="H"
            dato6="78"
            dato7="W"
            dato8="140"
            dato9="H"
            dato10="181.5"
          />
        </div>

        <div id="rasp">
          <TableGenerica
            sensor="Raspberry"
            src="https://www.mouser.mx/images/riotboard/lrg/RPI4-MODBP-1GB_DSL.jpg"
            dato1="Sistema"
            dato2="Broadcom BCM2711"
            dato3="GPU"
            dato4="Procesador de cuatro núcleos a 1,5 GHz con brazo Cortex-A72."
            dato5="CPU"
            dato6="VideoCore VI"
            dato7="Memoria"
            dato8="1/2/4GB LPDDR4 RAM"
            dato9="Conectividad"
            dato10="802.11ac Wi-Fi / Bluetooth 5.0, Gigabit Ethernet"
          />
        </div>
      </div>
    </>
  );
}
