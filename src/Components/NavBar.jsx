import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/emerald.png'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    {/* PROPERTY BINDING */}
                    <img src={logo} style={{height:50,width:50,padding:10}}></img>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="funcom">Neckales</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="classcom">Earrings</Link>
                </li>

            </ul>
        </nav>
    )
}