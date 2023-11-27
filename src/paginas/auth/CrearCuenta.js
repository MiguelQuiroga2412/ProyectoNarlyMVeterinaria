import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';

const CrearCuenta = () => {

    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const { nombre, email, password, confirmar } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        document.getElementById("nombre").focus();
    }, [])

    const crearCuenta = async () => {
        if (password !== confirmar) {
            const msg = "Las contraseñas son diferentes.";
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        } else if (password.length < 6) {
            const msg = "La contraseña deber ser al menos de 6 caracteres.";
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });

        } else {
            const data = {
                nombre: usuario.nombre,
                email: usuario.email,
                password: usuario.password
            }
            const response = await APIInvoke.invokePOST(`/api/usuarios`, data);
            const mensaje = response.msg;

            if (mensaje === 'El usuario ya existe') {
                const msg = "El usuario ya existe.";
                swal({
                    title: 'Error',
                    text: msg,
                    icon: 'error',
                    buttons: {
                        confirm: {
                            text: 'Ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-danger',
                            closeModal: true
                        }
                    }
                });
            } else {
                const msg = "El usuario fue creado correctamente.";
                swal({
                    title: 'Información',
                    text: msg,
                    icon: 'success',
                    buttons: {
                        confirm: {
                            text: 'Ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-primary',
                            closeModal: true
                        }
                    }
                });

                setUsuario({
                    nombre: '',
                    email: '',
                    password: '',
                    confirmar: ''
                })
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearCuenta();
    }

    return (
        <div>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form className="login100-form validate-form" onSubmit={onSubmit}>
                <span className="login100-form-title p-b-26">
                  Registrate<br></br>
                </span>
                <span className="login100-form-title p-b-48">
                  <i className="zmdi zmdi-font" />
                </span>
          <div className="wrap-input100 validate-input">
                                <input type="text"
                                    className="input100"
                                    placeholder="Nombre"
                                    id="nombre"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChange}
                                    required
                                />
                                 <span className="focus-input100" />
          </div>

                            <div className="wrap-input100 validate-input">
                                <input type="email"
                                    className="input100"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                    required
                                />
                                <span className="focus-input100" />
          </div>

                            <div className="wrap-input100 validate-input">
                                <input type="password"
                                    className="input100"
                                    placeholder="Contraseña"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    required
                                />
                                 <span className="focus-input100" />
          </div>
                            <div className="wrap-input100 validate-input">
                                <input type="password"
                                    className="input100"
                                    placeholder="Confirmar Contraseña"
                                    id="confirmar"
                                    name="confirmar"
                                    value={confirmar}
                                    onChange={onChange}
                                    required
                                />
                                 <span className="focus-input100" />
          </div>
      
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn" />
                    <button className="login100-form-btn">
                      Registrar Cuenta
                    </button>
                  </div>
                </div>
      
                <div className="text-center p-t-115">
                  <span className="txt1">
                    ¿Ya tienes una cuenta?
                  </span>
                  <Link className="txt2" to={"/login"} >
                    IniciarSesion
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1" />
      </div>
    );
}

export default CrearCuenta;