const ContactoPage = (promps) => {
    return (

        <body>

            <header>
                <div className="holder">
                    <img src="img/NykeaLogo.png" alt="Logo" width="100px" />
                    <h1>NYKEA MUEBLERIA</h1>
                </div>
            </header>

            <nav>
                <ul className="holder">
                    <li><a class="activo" href="index.html">Muebles</a></li>
                    <li><a href="decoraciones.html">Decoraciones</a></li>
                    <li><a href="diseños.html">Diseños</a></li>
                    <li><a href="nosotros.html">Nosotros</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
            </nav>

            <main className="holder contacto">
                <div>
                    <h2>Contacto Rápido</h2>
                    <form className="formulario" action="">
                        <p>
                            <label for="nom">Nombre</label>
                            <input type="text" name="Nombre" />
                        </p>
                        <p>
                            <label for="nom">Apellido</label>
                            <input type="text" name="Apellido" />
                        </p>
                        <p>
                            <label for="pass">Email</label>
                            <input type="text" name="Email" />
                        </p>
                        <p>
                            <label for="pass">Telefono</label>
                            <input type="text" name="Telefono" />
                        </p>
                        <p>
                            <label for="Comentarios">Mensaje</label>
                            <textarea name="Comentarios" id="Mensaje"></textarea>
                        </p>
                        <p>
                            <input type="submit" value="Enviar" />
                            <input type="reset" value="Borrar" />
                        </p>
                    </form>
                </div>
                <div className="holder contactos">
                    <h2>Otras vías de comunicación</h2>
                    <p>Puede comunicarse con nosotros a través de estos medios:</p>
                    <ul>
                        <li>Facebook:</li>
                        <li>Instagram:</li>
                        <li>Twitter:</li>
                        <li>Teléfono:</li>
                        <li>Email:</li>
                    </ul>
                </div>
            </main>

            <footer>
                <p>Diseñado por Miqueas Müller - 2024</p>
            </footer>
        </body>
    )
}

export default ContactoPage;