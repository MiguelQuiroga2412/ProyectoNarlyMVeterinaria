import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CrearCuenta from './paginas/auth/CrearCuenta';
import Admindashboard from './paginas/admin-dashboard';
import Clientedashboard from './paginas/cliente-dashboard';
import Login from './paginas/auth/Login';
import CategoriasAdmin from './paginas/categorias/CategoriasAdmin';
import CategoriasCliente from './paginas/categorias/CategoriasCliente';
import CategoriasTienda from './paginas/categorias/CategoriasTienda';
import CategoriasTiendaValid from './paginas/categorias/categoriasTiendaValid';
import CategoriasCrear from './paginas/categorias/CategoriasCrear';
import CategoriasEditar from './paginas/categorias/CategoriasEditar';
import ProductosAdmin from './paginas/categorias/ProductosAdmin';
import ProductosCliente from './paginas/categorias/ProductosCliente';
import ProductosCrear from './paginas/categorias/ProductosCrear';
import ProductosEditar from './paginas/categorias/ProductosEditar';
import Principal from './paginas/principal';
import CrearTienda from './paginas/tienda/CrearTienda';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Principal/>}/>
          <Route path="/Login" exact element={<Login/>}/>
          <Route path="/crear-tienda" exact element={<CrearTienda/>}/>
          <Route path="/crear-cuenta" exact element={<CrearCuenta/>}/>
          <Route path="/admin-dashboard" exact element={<Admindashboard/>}/>
          <Route path="/cliente-dashboard" exact element={<Clientedashboard/>}/>
          <Route path="/categorias-admin" exact element={<CategoriasAdmin/>}/>
          <Route path="/categorias-cliente" exact element={<CategoriasCliente/>}/>
          <Route path="/categorias-Tienda" exact element={<CategoriasTienda/>}/>
          <Route path="/categorias-TiendaValid/:idcategoria" exact element={<CategoriasTiendaValid/>}/>
          <Route path="/categorias-crear" exact element={<CategoriasCrear/>}/>
          <Route path="/categorias-editar/:idcategoria" exact element={<CategoriasEditar/>}/>
          <Route path="/productos-admin/:idcategoria" exact element={<ProductosAdmin/>}/>
          <Route path="/productos-cliente/:idcategoria" exact element={<ProductosCliente/>}/>
          <Route path="/productos-crear/:idcategoria" exact element={<ProductosCrear/>}/>
          <Route path="/productos-editar/:idcategoria" exact element={<ProductosEditar/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
