import './App.css'
import Formulario from './formulario.jsx'
import Listado from './listado.jsx'
import { useState } from 'react'

function App() {
  return (<>
    <h1>ADMINISTRAD
      OR DE PACIENTES</h1>
    <div class="container">
      <div class="row">

        <Formulario />
        <Listado />
      </div>
    </div>
  </>
  )
}
export default App
