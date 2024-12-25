import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">BlueMARKET</a>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Celulares</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tablets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Notebooks</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex">
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
