import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import database from '../../config/firebase';

const CreateObraScreen = () => {
    const initial_State_Form = {
        nombre: '',
        localidad: '',
        monto_convenio: 0,
        estado: '',
        img: null
    };

    const [form_state, setFormState] = useState(initial_State_Form);
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const field = event.target.name;
        const new_value =
            event.target.type === 'file' ? event.target.files[0] : event.target.value;

        setFormState((prev_state) => ({
            ...prev_state,
            [field]: new_value
        }));
    };

    const uploadImgToImgBB = async (img_file) => {
        const API_KEY_IMGBB = 'ea7f2c286c3265764574bfcca2499bde';
        const form_data = new FormData();
        form_data.append('image', img_file);

        const response = await fetch(
            `https://api.imgbb.com/1/upload?key=${API_KEY_IMGBB}`,
            {
                method: 'POST',
                body: form_data
            }
        );

        const data = await response.json();
        return data.data.url;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const url_img = await uploadImgToImgBB(form_state.img);

        const collection_ref = collection(database, 'obras');

        await addDoc(collection_ref, {
            nombre: form_state.nombre,
            monto_convenio: form_state.monto_convenio,
            localidad: form_state.localidad,
            img: url_img
        });

        setFormState(initial_State_Form);
        setLoading(false);
    };

    return (
        <div>
            <h1>Crear Nueva Obra</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre de la Obra:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Escribe el nombre de la obra"
                        value={form_state.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="localidad">Nombre de la Localidad:</label>
                    <input
                        type="text"
                        id="localidad"
                        name="localidad"
                        placeholder="Escribe el nombre de la localidad"
                        value={form_state.localidad}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="monto_convenio">Monto:</label>
                    <input
                        type="number"
                        id="monto_convenio"
                        name="monto_convenio"
                        min={0}
                        value={form_state.monto_convenio}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="estado">Estado:</label>
                    <input
                        type="text"
                        id="estado"
                        name="estado"
                        value={form_state.estado}
                        onChange={handleChange}
                        required
                    />
                </div>


                <div>
                    <label htmlFor="img">Selecciona una Imagen:</label>
                    <input
                        type="file"
                        id="img"
                        name="img"
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? 'Creando obra...' : 'Crear Obra'}
                </button>
            </form>
        </div>
    );
};

export default CreateObraScreen;
