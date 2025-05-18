import React from 'react'
import LoginScreen from '../Screens/LoginScreen/LoginScreen'
import RegistroScreen from '../Screens/RegistroScreen/RegistroScreen'
import './LoginRegistroScreen.css'

const LoginRegistroScreen = ({ onLogin }) => {
  return (
    <div className="login-registro-page">
      <div className="form-container">
        <section className="login-section">
          <h2>Iniciar Sesión</h2>
          <LoginScreen onLogin={onLogin} />
        </section>

        <section className="registro-section">
          <h2>Registrarse</h2>
          <RegistroScreen onRegister={onLogin} />
        </section>

        <section className="admin-section">
          <button onClick={() => onLogin(true)}>Entrar como administrador</button>
        </section>
      </div>
    </div>
  )
}

export default LoginRegistroScreen

