import React from 'react';
import Background from './components/Background';
import Login from './components/Login';
import Footer from './components/Footer';
import Tablas from './components/Tablas';
import BackgroundGenerica from './components/BackgroundGenerica';
const logo = require('./logo.png');
function App() {
  return (
    <div>
{/*       <Background componente={<Login/>} estilo={{backgroundColor:"#FFEDED", marginTop: "10rem" , borderRadius: ".5rem",  marginBottom: "10rem"}} className="container w-25"  /> */}
      
      <BackgroundGenerica componente={<Tablas/> }  estilo={{backgroundColor:"#FAFDD3", marginTop: "2rem" ,   marginBottom: "5rem", marginLeft:"8rem", marginRight:"8rem", paddingTop:"2rem"}}  /> 
      
      <Footer logo={logo} />

    </div>
    
    
  );
}

export default App;
