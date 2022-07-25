import { useEffect, useState } from "react";


const TableDatos = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = () => {
    setIsLoading(true)
    fetch("http://192.168.0.10/api/index.php")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setIsLoading(false)
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  
  return (
    <div style={{textAlign:"center", marginTop:"2rem"}}>
      <h3>Tabla de datos no ordenados</h3>
      {isLoading && <p>Loading...</p>}
      {users.length > 0 && (
        <table className="table w-75" style={{margin:"auto"}}>
          <thead style={{ backgroundColor: "#B7B7B7" }}>
            <tr>
              <th>ID</th>
              <th>Humedad</th>
              <th>Temperatura</th>
              <th>Humedad del Suelo</th>
              <th>Estado de la bomba</th>
              <th>Nivel del Agua</th>
              <th>Luminosidad</th>
              <th>Fecha</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody style={{backgroundColor:"white"}}>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.humedad}</td>
                <td>{user.temperatura}</td>
                <td>{user.humedad_suelo}</td>
                <td>{user.estado_bomba}</td>
                <td>{user.nivel_agua}</td>
                <td>{user.luminosidad}</td>
                <td>{user.fecha}</td>
                <td>{user.hora}</td>
              </tr>
            ))}
          </tbody>
        </table>

      )}
    </div>
  )}

  export default TableDatos;