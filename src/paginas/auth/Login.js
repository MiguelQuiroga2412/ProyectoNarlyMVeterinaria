import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';
import '../../assets/css/main.css';
import '../../assets/css/util.css';
const Login = () => {

    //para redireccionar de un componente a otro
    const navigate = useNavigate();

    //definimos el estado inicial de las variables
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    const { email, password } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        document.getElementById("email").focus();
    }, [])

    const iniciarSesion = async () => {
        if (password.length < 6) {
            const msg = "La contraseña debe ser al menos de 6 caracteres.";
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
                email: usuario.email,
                password: usuario.password
            }
            const response = await APIInvoke.invokePOST(`/api/auth`, data);
            const mensaje = response.msg;

            if (mensaje === 'El usuario no existe' || mensaje === 'Contraseña incorrecta') {
                const msg = "No fue posible iniciar la sesión verifique los datos ingresados.";
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
                //obtenemos el token de acceso jwt
                const jwt = response.token;

                //guardamos el token en el localstorage
                localStorage.setItem('token', jwt);
                const rol = response.rol;
          if (rol === 1) {
            navigate('/cliente-dashboard');
          } else if (rol === 2) {
            navigate('/admin-dashboard');
          } else {
            navigate('/');
          }
            
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        iniciarSesion();
    }

    return (
<div>
 
  <div className="limiter">
    <div className="container-login100">
      <div className="wrap-login100">
        <form className="login100-form validate-form" onSubmit={onSubmit}>
          <span className="login100-form-title p-b-26">
            Welcome
          </span>
          <span className="login100-form-title p-b-48">
            <i className="zmdi zmdi-font" />
          </span>
          <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
            <input
        type="email"
        className="input100"
        autoFocus={true}
        required={true}
        placeholder="Email"
        id="email"
        name="email"
        value={email}
        onChange={onChange}
      />
            <span className="focus-input100" />
          </div>
          <div className="wrap-input100 validate-input" data-validate="Enter password">
            <span className="btn-show-pass">
              <i className="zmdi zmdi-eye" />
            </span>
            <input
        type="password"
        className="input100"
        required={true}
        placeholder="Password"
        id="password"
        name="password"
        value={password}
        onChange={onChange}
      />
            <span className="focus-input100" />
          </div>
          <div className="container-login100-form-btn">
            <div className="wrap-login100-form-btn">
              <div className="login100-form-bgbtn" />
              <button className="login100-form-btn">
                Login
              </button>
            </div>
          </div>
          <div className="text-center p-t-115">
            <span className="txt1">
              Crear cuenta como usuario? 
            </span>
            <Link className="txt2" to={"/crear-cuenta"} >
              Sign Up
            </Link><br></br>
            <span className="txt1">
              Crear cuenta como tienda?  
            </span>
            <Link className="txt2" to={"/crear-tienda"} >
              Sign Up
            </Link>
            
          </div>
        
        </form>
      </div>
    </div>
  </div>
  <div id="dropDownSelect1" />
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
</div>

    );
}

export default Login;