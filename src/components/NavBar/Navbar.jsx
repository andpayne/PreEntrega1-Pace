import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="nav-link" to={"/"}>
                    <a className="navbar-brand">Happy Store</a>
                </Link>
                <Link className="nav-toggler" to={"/"}>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                </Link>
                 
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to={"/"}>
                            <button className="nav-link active" aria-current="page">Inicio</button>
                        </Link>
                        <Link className="nav-link" to={"/category/2"}>
                            <button className="nav-link">Computadoras</button>
                        </Link>
                        <Link className="nav-link" to={"/category/3"}>
                            <button className="nav-link">Celulares</button>
                        </Link>
                        <Link className="nav-link" to={"/category/4"}>
                            <button className="nav-link">Televisores</button>
                        </Link>
                    </div>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}




