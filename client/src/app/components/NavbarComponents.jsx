import './style/navbarStyle.css';
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


function NavbarComponents() {
    const location = useLocation();
    const[isOpen,setIsOpen] = useState(false);

    if(location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/dashboard' || location.pathname === '/dashboard/produk') {
        return null;
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return(
        <nav className='navbar'>
            <div className="navContent">
                <div className="navLogo">
                    <h1>Web<span>Name</span></h1>
                </div>

                <div className={isOpen ? "navMenu active" : "navMenu"} >
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/layanan">Layanan</a>
                        </li>
                        <li>
                            <a href="/produk">Produk</a>
                        </li>
                    </ul>
                </div>
                <div className={isOpen ? "navMenuLogin active" : "navMenuLogin"}>
                    <a href="/login" className="navLogin">Login</a>
                    <a href="/register" className="navRegister">Register</a>
                </div>


                <div className="navTogel" onClick={toggleMenu}>
                    <FaBars />
                </div>
            </div>
        </nav>
    )
};

export default NavbarComponents;