import React, { Component } from "react";
import { Link } from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <div className="link-container">
                    <Link to="/IndexPage" className="link">Muebles</Link>
                </div>
                <div className="link-container">
                    <Link to="/DecoracionesPage" className="link">Decoraciones</Link>
                    </div>
                    </div>
        );
    }
}

export default LinkNav;