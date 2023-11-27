import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from '../../componentes/ContentHeader';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainerCliente';
import APIInvoke from '../../utils/APIInvoke'

const CategoriasAdmin = () => {
  const [categorias, setCategorias] = useState([]);

  const ObtenerCategorias = async () => {
    try {
      const response = await APIInvoke.invokesGET(`/api/categorias/todas`);
      console.log(response); // Accede directamente a la respuesta, no a response.categorias
      setCategorias(response);
    } catch (error) {
      console.error('Error al obtener categorías:', error);
      // Puedes personalizar cómo manejar el error en el frontend
    }
  }
  

  useEffect(() => {
    ObtenerCategorias();
  }, []);



  return (
    <div className="wrapper">
        <Navbar></Navbar>
        <SidebarContainer></SidebarContainer>
        <div className="content-wrapper">

            <ContentHeader
                titulo={"Listado de Categorías"}
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
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    
                                    <th style={{ width: '50%' }}>Nombre</th>
                                    <th style={{ width: '20%' }}>Ver Productos</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categorias.map(
                                        item =>
                                            <tr key={item._id}>
                                                <td>{item.nombre}</td>
                                                <td>
                                                    <Link to={`/productos-cliente/${item._id}@${item.nombre}`} className="btn btn-sm btn-info">Productos</Link>&nbsp;&nbsp; 
                                                </td>
                                              
                                                    
                                            </tr>
                                    )
                                }

                            </tbody>
                        </table>

                    </div>
                </div>

            </section>
        </div>
   
    </div>
);
}

export default CategoriasAdmin;
