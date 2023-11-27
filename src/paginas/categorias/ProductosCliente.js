import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ContentHeader from '../../componentes/ContentHeader';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainerCliente';
import APIInvoke from '../../utils/APIInvoke'
import swal from 'sweetalert';

const ProductosAdmin = () => {

    const [productos, setProductos] = useState([]);

    const { idcategoria } = useParams();
    let arreglo = idcategoria.split('@');
    const idCategoria = arreglo[0];
    const nombreCategoria = arreglo[1];
    const tituloPagina = `Productos de la Categoría: ${nombreCategoria}`;

    const compraExitosa= ()=>{
        swal({
            title: "Compra",
            text: "Se realizo la compra de forma exitosa", 
            icon: "success",
            buttons: {
                confirm:{
                    text: "Aceptar",
                    value: true, 
                    visible: true,
                    className: "btn btn-secondary",
                    closeModal: true
                }
            }
        })}

    const cargarProductos = async () => {
        const response = await APIInvoke.invokeGET(`/api/productos?categoria=${idCategoria}`);
        console.log(response);
        setProductos(response.productos);
    }

    useEffect(() => {
        cargarProductos();
    }, [])

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={tituloPagina}
                    breadCrumb1={"Listado de Categorías"}
                    breadCrumb2={"Productos"}
                    ruta1={"/categorias-cliente"}
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
                                        
                                        <th style={{ width: '64%' }}>Nombre</th>
                                        <th style={{ width: '10%' }}>Precio</th>
                                        <th style={{ width: '16%' }}>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        productos.map(
                                            item =>
                                                <tr key={item._id}>
                                                    
                                                    <td>{item.nombre}</td>
                                                    <td>{item.precio}</td>
                                                    <td>
                                                    <button
                                                 class="btn btn-sm btn-outline-secondary"
                                                 onClick={(e)=>compraExitosa()}
                                                >Comprar</button>
                                            
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

export default ProductosAdmin;