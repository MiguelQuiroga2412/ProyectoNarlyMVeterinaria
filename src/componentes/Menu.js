import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

        <li className="nav-item">
          <Link to={"/admin-dashboard"} className="nav-link">
            <i className="nav-icon fas fa-home" />
            <p>Inicio</p>
          </Link>
        </li>

        <li className="nav-item">
          <Link to={"/categorias-admin"} className="nav-link">
            <i className="nav-icon fas fa-list" />
            <p>Productos por Categoría</p>
          </Link>
        </li>

        {/* Agregar más elementos del menú según sea necesario */}
        
      </ul>
    </nav>
  );
}

export default Menu;
