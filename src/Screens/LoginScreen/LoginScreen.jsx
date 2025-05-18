import React, { useState } from 'react'
import './loginScreen.css'

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Usuario logueado')
    onLogin()
  }

  const handleAdminLogin = () => {
    console.log('Entrando como administrador...')
    onLogin()
  }

  return (
    <form className="form-container" onSubmit={handleLogin}>
      <h2>Iniciar sesión</h2>
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Acceder</button>
      
    </form>
  )
}

export default LoginScreen

