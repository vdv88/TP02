export const getProducts = async () =>{
    try{
        const response = await fetch(
            'http://localhost:5173/api/products.json',
            {
                method: 'GET'
            }
        )
        const data = await response.json()
        return data
    }
    catch(error){
        console.error('Error al obtener productos:', error)
        return null
    }
}

export const getProductById = async ({product_id}) => {
    const  products = await getProducts()
    return products.find(product => product.id == product_id)

}