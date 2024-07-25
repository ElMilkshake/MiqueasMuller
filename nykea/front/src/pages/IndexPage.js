const IndexPage = (promps) => {
    return (

        <body>

            <header>
                <div className="holder">
                    <img src="img/index/NykeaLogo.png" alt="Logo" height="150px" />
                    <h1>NYKEA MUEBLERIA</h1>
                </div>
            </header>

            <nav>
                <ul class="holder">
                    <li><a class="activo" href="index.html">Muebles</a></li>
                    <li><a href="decoraciones.html">Decoraciones</a></li>
                    <li><a href="diseños.html">Diseños</a></li>
                    <li><a href="nosotros.html">Nosotros</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
            </nav>

            <main>
                <div className="contenedor1">
                    <div className="productosmuebles">
                        <img src="img/index/mueble1.png" alt="mueble1" />
                        <img src="img/index/mueble2.png" alt="mueble2" />
                        <img src="img/index/mueble3.png" alt="mueble3" />
                        <img src="img/index/mueble4.png" alt="mueble4" />
                        <img src="img/index/mueble5.png" alt="mueble5" />
                        <img src="img/index/mueble6.png" alt="mueble6" />
                        <img src="img/index/mueble7.png" alt="mueble7" />
                        <img src="img/index/mueble8.png" alt="mueble8" />
                    </div>
                    <aside>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, reiciendis, quas sapiente
                            facilis
                            corrupti vitae, quia magni a porro soluta quam tempore ipsam? Ducimus blanditiis voluptas
                            magnam
                            facilis
                            dolore maiores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae velit
                            facilis cum
                            omnis numquam ipsa at consequatur quis nisi qui. Facilis quaerat deleniti deserunt laborum
                            fugiat
                            odio
                            tempore temporibus id?</p>
                    </aside>
                </div>
            </main>


            <footer>
                <p>Diseñado por Miqueas Müller - 2024</p>
            </footer>

        </body>



    )
}

export default IndexPage;