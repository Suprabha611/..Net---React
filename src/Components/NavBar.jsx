import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/haber.png';
import '../Styles/nav.css';


export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm navbar">
            <ul className="navbar-nav">
                <li className="nav-item1">
                    {/* PROPERTY BINDING */}
                    <img src={logo} style={{height:90,width:230,paddingLeft:50}}></img>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="home">HOME</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="funcom">ABOUT</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="classcom">SERVICES</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="">PROJECTS</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="">OUR BLOG</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="">CONTACTS</Link>
                </li>
            </ul>
            {/* <ul>
                <li className='linkicon'>
                    <a> <i class="fa-brands fa-facebook-f"></i></a>
                </li>
            </ul> */}
        </nav>
    )
}