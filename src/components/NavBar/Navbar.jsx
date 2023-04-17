import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Happy Store</a>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        <a className="nav-link" href="#">Computadoras</a>
                        <a className="nav-link" href="#">Celulares</a>
                        <a className="nav-link "href="#">Televisores</a>
                </div>
                </div>
            </div>
        </nav>
            );
}

export default NavBar;
