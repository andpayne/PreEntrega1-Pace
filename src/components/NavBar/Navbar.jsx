import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const NavBar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toogle('responsive_nav')
    }
    
    return (
        <div>
            <header>
                <h3>Logo</h3>
                <nav ref={navRef}>
                    <a href="#">Accesorios</a>
                    <a href="#">Celulares</a>
                    <a href="#">Computadoras</a>
                    <a href="#">Televisores</a>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars/> 
                </button>
            </header>    
        </div>
    );
}

 
