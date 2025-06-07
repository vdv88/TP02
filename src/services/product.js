import {collection,getDocs} from 'firebase/firestore'
import database from '../config/firebase'


export const getProducts = async () =>{
    try{
        const obras_collection_reference = collection(database, 'obras')

        const result = await getDocs (obras_collection_reference)

        const obras_list_formatted = result.docs.map(
            (document) => {
                console.log('Document:',document)
                console.log('Document Data:',document.data)
                return {
                    id: document.id,
                    ...document.data()
                }
            }
        )
        return obras_list_formatted

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





















// export const getProducts = async () =>{
//     try{
//         const response = await fetch(
//             'http://localhost:5173/api/products.json',
//             {
//                 method: 'GET'
//             }
//         )
//         const data = await response.json()
//         return data
//     }
//     catch(error){
//         console.error('Error al obtener productos:', error)
//         return null
//     }
// }

// export const getProductById = async ({product_id}) => {
//     const  products = await getProducts()
//     return products.find(product => product.id == product_id)

// }