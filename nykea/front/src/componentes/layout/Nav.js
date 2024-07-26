import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Muebles</Link></li>
                    <li><Link to="/DecoracionesPage">Decoraciones</Link></li>
                    <li><Link to="/DiseñosPage">Diseños</Link></li>
                    <li><Link to="/NosotrosPage">Nosotros</Link></li>
                    <li><Link to="/ContactoPage">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
}


export default Nav;