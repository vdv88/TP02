import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/product'
import Navbar from '../../Components/Navbar/Navbar'

const ProductDetailScreen = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const {product_id} = useParams()

     const getProductDetail = async () => {
            setLoading(true)
            //El setTimeout no es necesario
            setTimeout(
                async () => {
                    console.log({product_id})
                    const product_detail_response = await getProductById({product_id})
                    console.log({product_detail_response})
                    if (product_detail_response) {
                        setProduct(product_detail_response)
                    }
                    else {
                        setError('Error al buscar producto')
                    }
                    setLoading(false)
                },
                2000
            )
    
    }

    useEffect(
        () => {
            getProductDetail()
        },
        []
    )
    console.log({product})
    let content
    if(loading){
        content = <h2>Cargando...</h2>
    }
    else if(!loading && !product){
        content = <div>No encontrado</div>
    }
    else{
        content = <div>
            Producto: {product.title}
        </div>
    }
  return (
    <div>
        <Navbar/>
        {content}
    </div>
  )
}

export default ProductDetailScreen