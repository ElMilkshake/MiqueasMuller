//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>Muebles</NavLink></li>
                    <li><NavLink to="/DecoracionesPage" className={({ isActive }) => isActive ? "activo" : undefined}>Decoraciones</NavLink></li>
                    <li><NavLink to="/DiseñosPage" className={({ isActive }) => isActive ? "activo" : undefined}>Diseños</NavLink></li>
                    <li><NavLink to="/NosotrosPage" className={({ isActive }) => isActive ? "activo" : undefined}>Nosotros</NavLink></li>
                    <li><NavLink to="/ContactoPage" className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink></li>
                    <li><NavLink to="/NovedadesPage" className={({ isActive }) => isActive ? "activo" : undefined}>Novedades</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}


export default Nav;