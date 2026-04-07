import './Listado.css'

function Listado({ citas }) {
  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>

      {citas.map((cita, index) => (
        <div className="cita" key={index}>
          <p>Mascota: <span>{cita.mascota}</span></p>
          <p>Dueño: <span>{cita.Dueño}</span></p>
          <p>Fecha: <span>{cita.Fecha}</span></p>
          <p>Hora: <span>{cita.Hora}</span></p>
          <p>Sintomas: <span>{cita.Sintomas}</span></p>
          <button className="button eliminar u-full-width">
            Eliminar ×
          </button>
        </div>
      ))}

    </div>
  )
}

export default Listado;