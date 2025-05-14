import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ProductList from '../../Components/ProductList/ProductList'

const HomeScreen = () => {
  return (
    <div>
        <Navbar/>
        <h1>Catalogo de Obras:</h1>
        <ProductList/>
        {}
    </div>
  )
}

export default HomeScreen