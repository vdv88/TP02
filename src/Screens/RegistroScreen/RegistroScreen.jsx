import React, { useState } from 'react'
import './registroScreen.css'

const RegistroScreen = ({ onRegister }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      alert('Las contraseñas no coinciden')
      return
    }
    console.log('Usuario registrado')
    onRegister()
  }

  const handleAdminRegister = () => {
    console.log('Entrando como administrador...')
    onRegister()
  }

  return (
    <form className="form-container" onSubmit={handleRegister}>
      <h2>Registrarse</h2>
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
      <input
        type="password"
        placeholder="Confirmar contraseña"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <button type="submit">Crear cuenta</button>
    
    </form>
  )
}

export default RegistroScreen
