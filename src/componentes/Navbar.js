import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="main-header navbar navbar-expand navbar-light">
      {/* Toggle Button */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Brand */}
      <Link to={"/"} className="navbar-brand">
        <strong>Mascopet Shop</strong>
      </Link>

      {/* Navbar Links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          {/* Puedes agregar más elementos del menú aquí */}
        </ul>

        {/* Cerrar Sesión */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <strong onClick={cerrarSesion} className="nav-link" style={{ cursor: 'pointer' }}>
              Salir
            </strong>
          </li>
        </ul>

        {/* Botón para pantalla completa */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"#"} className="nav-link" data-widget="fullscreen" role="button">
              <i className="fas fa-expand-arrows-alt" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
