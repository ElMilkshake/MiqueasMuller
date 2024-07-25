import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <ul className="holder">
                <li><Link to="index.html">Muebles</Link></li>
                <li><Link to="decoraciones.html">Decoraciones</Link></li>
                <li><Link to="diseños.html">Diseños</Link></li>
                <li><Link to="nosotros.html">Nosotros</Link></li>
                <li><Link to="contacto.html">Contacto</Link></li>
            </ul>
        </nav>
    );
}


export default Nav;