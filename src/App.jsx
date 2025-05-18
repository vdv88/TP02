import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ProductDetailScreen from './Screens/ProductDetailScreen/ProductDetailScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreenControlada'
import RegistroScreen from './Screens/RegistroScreen/RegistroScreen'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import './App.css'


const LoginRegistroScreen = ({ onLogin }) => {
  const handleAdminAccess = () => {
    console.log('Accediendo como administrador')
    onLogin()
  }

  return (
    <div className="auth-container">
      <div>
        <LoginScreen onLogin={onLogin} />
        <RegistroScreen onRegister={onLogin} />
        <button onClick={handleAdminAccess} className="admin-button">
          Acceder como administrador
        </button>
      </div>
    </div>
  )
}

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <div className="App">
      <Routes>
        {!isAuthenticated ? (
         
          <Route path="*" element={<LoginRegistroScreen onLogin={() => setIsAuthenticated(true)} />} />
        ) : (
        
          <>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/product/:product_id" element={<ProductDetailScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/registro" element={<RegistroScreen />} />
          </>
        )}
      </Routes>
    </div>
  )
}

export default App
