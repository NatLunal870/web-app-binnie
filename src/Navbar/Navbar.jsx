import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../components/imagenes/binnie.png' // Importa la imagen del logo

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="BINNIE Logo" className="navbar-logo" /> {/* Imagen del logo */}{/* Texto opcional para mayor claridad */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Alinear a la derecha */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Principal</Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="/actividades">Actividades</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Sesion">Inicio de Sesión</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
