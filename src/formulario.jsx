import './Formulario.css'
import { useState } from "react"


function Formulario({ agregarCita }) {
    const [mascota, setMascota] = useState("")
    const [Dueño, setDueño] = useState("")
    const [Fecha, setFecha] = useState("")
    const [Hora, setHora] = useState("")
    const [Sintomas, setSintomas] = useState("")
    const manejarSubmit = (e) => {
        e.preventDefault();
         const objeto =
        {
            mascota: mascota,
            Dueño: Dueño,
            Fecha: Fecha,
            Hora: Hora,
            Sintomas: Sintomas
        }
        agregarCita(objeto)
    }
    return (

        <>
            <div className="one-half column">
                <h2>Crear mi Cita</h2>
                <form onSubmit={manejarSubmit}>
                    <label>Nombre Mascota</label><input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"
                        value={mascota} onChange={(e) => setMascota(e.target.value)} />
                    <label>Nombre Dueño</label><input type="text" name="propietario" className="u-full-width"
                        placeholder="Nombre dueño de la mascota" value={Dueño} onChange={(e) => setDueño(e.target.value)} />
                    <label>Fecha</label><input type="date" name="fecha" className="u-full-width" value={Fecha} onChange={(e) => setFecha(e.target.value)} />
                    <label>hora</label><input type="time" name="hora" className="u-full-width" value={Hora} onChange={(e) => setHora(e.target.value)} />
                    <label>Sintomas</label><textarea name="sintomas" className="u-full-width" value={Sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>
                    <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
                </form>
            </div>

        </>
    )
}
export default Formulario;





