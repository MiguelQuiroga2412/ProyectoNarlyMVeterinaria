import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import ContentHeader from '../../componentes/ContentHeader';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainerCliente';
import APIInvoke from '../../utils/APIInvoke'

const CategoriasAdmin = () => {
  const [categorias, setCategorias] = useState([]);


  const obtenerCategoriasCreador = async () => {
    const response = await APIInvoke.invokeGET(`/api/categorias/todos`);
    console.log("hola",response);
    setCategorias(response);
}

useEffect(() => {
    obtenerCategoriasCreador();
}, [])





  return (
    <div className="wrapper">
        <Navbar></Navbar>
        <SidebarContainer></SidebarContainer>
        <div className="content-wrapper">

            <ContentHeader
                titulo={"perro"}
                breadCrumb1={"Inicio"}
                breadCrumb2={"Categorias"}
                ruta1={"/home"}
            />

            <section className="content">

                <div className="card">
                    <div className="card-header">
                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                <i className="fas fa-minus" />
                            </button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                <i className="fas fa-times" />
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                    <div>
      <h1>Creadores</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th style={{ width: '60%' }}>Creador</th>
            <th style={{ width: '40%' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td>
                <Link to={`/categorias-TiendaValid/${item}`} className="btn btn-sm btn-info">
                  Ver Categorias
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

                    </div>
                </div>

            </section>
        </div>
   
    </div>
);
}

export default CategoriasAdmin;
