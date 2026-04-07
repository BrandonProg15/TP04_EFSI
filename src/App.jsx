import './App.css'
import Formulario from './formulario.jsx'
import Listado from './Listado.jsx'
import { useState } from 'react'

function App() {

  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {setCitas([...citas, cita])};

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>

      <div className="container">
        <div className="row">

          <Formulario agregarCita={agregarCita} />
          <Listado citas={citas} />

        </div>
      </div>
    </>
  )
}

export default App