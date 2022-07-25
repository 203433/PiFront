import React, { Component } from 'react';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Login extends Component {
    state={
        form:{
            user: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }


    
    iniciarSesion=async()=>{
        var qs = require('qs');
        var data = qs.stringify({
            'user': this.state.form.user,
            'password': this.state.form.password
        });
        axios({
          url: "http://192.168.0.10/api/login.php",
          method: 'post',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: data
        })
        .then(response=>{
          console.log(response.data);
            if(response!=null){
                
                alert(`Bienvenido ${this.state.form.user}`);
                window.location.href="./main";
            }
        })
        .catch(error=>{
            console.log(error);
        })

    } 


    componentDidMount() {
        if(cookies.get('user')){
            window.location.href="./main";
        }
    }
    

    render() {
        return (
          <>

          <div style={{ textAlign: "center", paddingTop: "1rem", }}>
          <p
              className="fs-5"
              style={{
                fontWeight: "bold",
                paddingTop: "1rem",
                color: "#3D6D2C",
              }}
            >
              Inicio de sesion
            </p>
            <p className="fs-6">
              Ingrese los datos requeridos
            </p>
        <div style={{ textAlign: "center", }} className="containerSecundario">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="user"
              onChange={this.handleChange}
              placeholder="Usuario"

            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
              placeholder="Contraseña"

            />
            <br />
            <button className="btn btn-primary" style={{ textAlign: "center", marginBottom: "1rem",  fontWeight: "bold", backgroundColor: "#9BC789", borderColor: "#9BC789" }} onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
          </>
  
        );
    }
}

export default Login;