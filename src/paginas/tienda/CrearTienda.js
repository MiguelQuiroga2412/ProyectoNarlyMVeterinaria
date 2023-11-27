import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';
import '../../assets/css/main.css';
import '../../assets/css/util.css';
const CrearTienda = () => {
    const [tienda, setTienda] = useState({
        nombreTienda: '',
        direccion: '',
        ciudad: '',
        codigoPostal: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const { nombreTienda, direccion, ciudad, codigoPostal, email, password, confirmar } = tienda;

    const onChange = (e) => {
        setTienda({
            ...tienda,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        document.getElementById("nombreTienda").focus();
    }, []);

    const CrearTienda = async () => {
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
                nombreTienda,
                direccion,
                ciudad,
                codigoPostal,
                email,
                password
            };

            const response = await APIInvoke.invokePOST(`/api/tienda`, data);
            const mensaje = response.msg;

            if (mensaje === 'La tienda ya existe') {
                const msg = "La tienda ya existe.";
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
                const msg = "La tienda fue creada correctamente.";
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

                setTienda({
                    nombreTienda: '',
                    direccion: '',
                    ciudad: '',
                    codigoPostal: '',
                    email: '',
                    password: '',
                    confirmar: ''
                });
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        CrearTienda();
    }

    return (
        <div>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form className="login100-form validate-form" onSubmit={onSubmit}>
                <span className="login100-form-title p-b-26">
                  Registra Tu Tienda<br></br>
                </span>
                <span className="login100-form-title p-b-48">
                  <i className="zmdi zmdi-font" />
                </span>
      
                {/* Campos de entrada para la creación de tienda */}
                <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                  <input
                    type="text"
                    className="input100"
                    placeholder="Nombre de la Tienda"
                    id="nombreTienda"
                    name="nombreTienda"
                    value={nombreTienda}
                    onChange={onChange}
                    required
                  />
                 <span className="focus-input100" />
          </div>
      
                <div className="wrap-input100 validate-input">
                  <input
                    type="text"
                    className="input100"
                    placeholder="Dirección"
                    id="direccion"
                    name="direccion"
                    value={direccion}
                    onChange={onChange}
                    required
                  />
                  
                  <span className="focus-input100" />
                  
          </div>
      
                <div className="wrap-input100 validate-input">
                  <input
                    type="text"
                    className="input100"
                    placeholder="Ciudad"
                    id="ciudad"
                    name="ciudad"
                    value={ciudad}
                    onChange={onChange}
                    required
                  />
                   <span className="focus-input100" />
                  
                  </div>
      
                <div className="wrap-input100 validate-input">
                  <input
                    type="text"
                    className="input100"
                    placeholder="Código Postal"
                    id="codigoPostal"
                    name="codigoPostal"
                    value={codigoPostal}
                    onChange={onChange}
                    required
                  />
                   <span className="focus-input100" />
                  
                  </div>
      
                {/* Campos de entrada para inicio de sesión */}
                <div className="wrap-input100 validate-input">
                  <input
                    type="email"
                    className="input100"
                    autoFocus={true}
                    required={true}
                    placeholder="Correo Electrónico"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                   <span className="focus-input100" />
                  
                  </div>
      
                <div className="wrap-input100 validate-input">
                  <input
                    type="password"
                    className="input100"
                    required={true}
                    placeholder="Contraseña"
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                  />
                   <span className="focus-input100" />
                  
                  </div>
      
                <div className="wrap-input100 validate-input">
                  <input
                    type="password"
                    className="input100"
                    required={true}
                    placeholder="Confirmar Contraseña"
                    id="confirmar"
                    name="confirmar"
                    value={confirmar}
                    onChange={onChange}
                  />
                   <span className="focus-input100" />
                  
                  </div>
      
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn" />
                    <button className="login100-form-btn">
                      Registrar Tienda
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

export default CrearTienda;
