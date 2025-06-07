import React from 'react'

const CreateObraScreen = () => {
  return (
    <div>
        <h1>Crear Obra Nueva</h1>
    <form>
        <div>
            <label htmlFor="nombre">Nombre de la Obra:</label>
            <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                placeholder='Escribe el nombre de la obra' 
                required />
            </div>

        <div>
            <label htmlFor="localidad">Nombre de la Localidad:</label>
            <input 
                type="text" 
                id="localidad" 
                name="localidad" 
                placeholder='Escribe el nombre de la localidad' 
                required />
            </div>

        <div>
            <label htmlFor="monto_convenio">Monto:</label>
            <input 
                type="number" 
                id="monto_convenio" 
                name="monto_convenio" 
                placeholder='Escribe el monto del convenio' 
                min={0}
                required />
            </div>


            <div>
            <label htmlFor="img">Selecciona una Imagen:</label>
            <input 
                type='file' 
                id='img' 
                name='img'/>
            </div> 
            <button type='submit'>Crear Obra</button>  
   
   
   
    </form>



</div>



  )
}

export default CreateObraScreen