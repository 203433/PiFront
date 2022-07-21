import React from "react";

export default function Login(props) {
  return (
    <>
      <div>
        <form className="" style={{ marginLeft: "2rem", marginRight: "2rem" }}>
          <div style={{ textAlign: "center", paddingTop: "1rem" }}>
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
            <p className="fs-6" style={{ paddingTop: "1rem" }}>
              Ingrese los datos requeridos
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <label htmlFor="exampleInputEmail1" style={{ marginTop: "1rem" }}>
              Usuario
            </label>
            <input
              type="email"
              className="form-control"
              id="user"
              aria-describedby="emailHelp"
              placeholder="Usuario"
            />
          </div>
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <label htmlFor="exampleInputPassword1">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="pass"
              placeholder="Contraseña"
            />
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem", }}>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ textAlign: "center", marginBottom: "1rem",  fontWeight: "bold", backgroundColor: "#9BC789", borderColor: "#9BC789" }}
            >
              Iniciar Sesion
            </button>
          </div>
        </form>
      </div>
      
    </>
  );
}
