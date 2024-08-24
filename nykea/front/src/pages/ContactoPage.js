import '../styles/pages/Contacto.css';
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (promps) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        //const response = await axios.post('${process.env.REACT_APP_API_URL}/api/contacto', formData);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <body>
            <main className="holder contacto">
                <div>
                    <h2>Contacto Rápido</h2>
                    <form className="formulario" action="/contacto" method="post" onSubmit={handleSubmit}>
                        <p>
                            <label for="nom">Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="nom">Apellido</label>
                            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="pass">Email</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="pass">Telefono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="comentario">Comentario</label>
                            <textarea name="comentario" value={formData.comentario} onChange={handleChange}></textarea>
                        </p>
                        <p>
                            <input type="submit" value="Enviar" />
                            <input type="reset" value="Borrar" />
                        </p>
                    </form>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}


                </div>
                <div className="holder contactos">
                    <h2>Otras vías de comunicación</h2>
                    <p>Puede comunicarse con nosotros a través de estos medios:</p>
                    <ul /*</div>className="lista-de-medios"*/>
                        <li>Facebook:</li>
                        <li>Instagram:</li>
                        <li>Twitter:</li>
                        <li>Teléfono:</li>
                        <li>Email:</li>
                    </ul>
                </div>
            </main>
        </body>
    )
}

export default ContactoPage;