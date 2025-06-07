import React, { useState } from "react"
import { Link } from "react-router-dom"
import './ProductCard.css'


const ProductCard = ({img, nombre, monto_convenio, localidad, estado, fecha_inicio, is_admin, id,  key}) => {
    //Key siempre valdra undefined
    console.log(key)
    console.log({is_admin})

    const [isBought, setIsBought] = useState(false)

    const handleClickBuyButton = () =>{
        alert("Tramitacion iniciada!")
        setIsBought(true)
    }

    let boton 

    if(isBought){
        boton = <button disabled>Tramitación Exitosa</button>
    }
    else{
        boton = <button onClick={handleClickBuyButton}>Iniciar Tramitación</button>
    }

    
    return (
  <div className="product-info">
    <img src={img} alt={nombre} className="product-img" />
    <h3>{nombre}</h3>

    <div className="product-details">
      <p><strong>Localidad:</strong> {localidad}</p>
      <p><strong>Fecha de Inicio:</strong> {fecha_inicio?.toDate().toLocaleDateString()}</p>
      <p><strong>Estado:</strong> {estado}</p>
      <p><strong>Monto Convenio:</strong> ${monto_convenio.toLocaleString('es-AR')}</p>
    </div>

    {boton}
    <Link to={`/product/${id}`}>Ver detalle</Link>
  </div>
)
    // return (
    //     <div className="product-info">
    //         <img src={img} alt={nombre} className="product-img" />
    //         <h3>{nombre}</h3>
    //         <div className="product-details">
    //             <span>{localidad}</span>
    //             <span>{estado}</span>
    //             <span>{fecha_inicio}</span>
    //         </div>
    //         <span>${monto_convenio}</span>
    //         {boton}
    //         <Link to= {`/product/${id}`}>Ver detalle</Link>
    //     </div>
    // )



}

export default ProductCard