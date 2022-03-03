import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import logo from '../../images/logo.png';
import { VscThreeBars } from 'react-icons/vsc';
import { FaTimes } from 'react-icons/fa';


const Navbar = () => {

    const [showmenu, setShowmenu] = useState(false);

    return (

        <>
            <nav className="container navbar">
                <div className="logo">
                    <Link to="home" smooth={true} duration={1000}>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <main className={showmenu ? "main-menu-mobile" : "main-menu"}
                    onClick={() => showmenu(false)}>
                    <ul>
                        <li>
                            <Link
                                to="home" smooth={true} duration={1000}>Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="about" smooth={true} duration={1000}>About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="services" smooth={true} duration={1000}>Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="blog" smooth={true} duration={1000}>Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contact" smooth={true} duration={1000}>Contact
                            </Link>
                        </li>
                    </ul>
                </main>
                <div className="sign-in">
                    <ul>
                        <li>
                            <Link to="signin">Sign In</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-icon" onClick={() => setShowmenu(!showmenu)}>
                    {showmenu ? <FaTimes /> : <VscThreeBars />}
                </div>
            </nav>
        </>
    )
}

export default Navbar