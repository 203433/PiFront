import { useEffect, useState } from "react";


const TableDatos = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = () => {
    setIsLoading(true)
    fetch("http://localhost:3001/riego")
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
      <h3>Tabla de datos de riego</h3>
      {isLoading && <p>Loading...</p>}
      {users.length > 0 && (
        <table className="table w-75" style={{margin:"auto"}}>
          <thead style={{ backgroundColor: "#B7B7B7" }}>
            <tr>
              <th>ID</th>
              <th>Nivel de Agua</th>
              <th>Fecha</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody style={{backgroundColor:"white"}}>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nivel_agua}</td>
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