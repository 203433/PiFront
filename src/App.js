import React from 'react';
import Background from './components/Background';
import Login from './components/Login';
import Footer from './components/Footer';
import Tablas from './components/Tablas';
import BackgroundGenerica from './components/BackgroundGenerica';
import {
  BrowserRouter,
  Routes ,
  Route
} from "react-router-dom";

const logo = require('./logo.png');

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes >
          <Route path="/main" element={<BackgroundGenerica componente={<Tablas/> } foot={<Footer logo={logo} style={{ display: "flex", backgroundColor: "#9FCB51", width: "100%"}} />} estilo={{backgroundColor:"#FAFDD3", marginTop: "2rem" ,   marginBottom: "5rem", marginLeft:"8rem", marginRight:"8rem", paddingTop:"2rem"}}  /> } />

          <Route path="/" element={  <Background componente={<Login/>} foot={<Footer logo={logo} style={{ display: "flex", backgroundColor: "#9FCB51", width: "100%", bottom: "0", position: "absolute", padding: "1rem" }}/> } estilo={{backgroundColor:"#FFEDED", marginTop: "10rem" , borderRadius: ".5rem",  }} className="w-25 mx-auto"  />} />
        </Routes >
      </BrowserRouter>
      
      
      
      

    </div>
    
    
  );
}

export default App;
