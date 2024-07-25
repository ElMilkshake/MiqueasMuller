import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <Link to="index.html">Muebles</Link>
            <Link to="decoraciones.html">Decoraciones</Link>
            <Link to="diseños.html">Diseños</Link>
            <Link to="nosotros.html">Nosotros</Link>
            <Link to="contacto.html">Contacto</Link>
        </nav>
    );
}


export default Nav;