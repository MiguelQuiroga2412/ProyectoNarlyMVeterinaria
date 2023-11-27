const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const Tienda = require("../models/Tienda");

exports.autenticarUsuario = async (req, res) => {
  //Revisar si hay errores
 const errores = validationResult(req);
 if (!errores.isEmpty()) {
   return res.status(400).json({ errores: errores.array() });
 }

 const { email, password } = req.body;

 try {
   let usuario = await Usuario.findOne({ email });

   if (!usuario) {
    usuario = await Tienda.findOne({ email });
     if (!usuario) {
       return res.status(400).json({ msg: "El usuario o tienda no existe" });
     }
   }

   const passCorrecto = await bcryptjs.compare(password, usuario.password);
   if (!passCorrecto) {
     return res.status(400).json({ msg: "Contraseña incorrecta" });
   }

   const payload = {
    usuario: { id: usuario.id, rol: usuario.rol }, // Asumiendo que el modelo tiene un campo "rol"
   };

   jwt.sign(
     payload,
     process.env.SECRETA,
     {
       expiresIn: 43200, // 1 hora
     },
     (error, token) => {
       if (error) throw error;

       // En lugar de usar console.log, usa console.error
       console.error("Token:", token);
       console.error("Rol:", usuario.rol);

       // Incluir el rol en la respuesta
       res.json({ token, rol: usuario.rol });
     }
   );
 } catch (error) {
   console.error("Hubo un error");
   console.error(error);

   // En lugar de usar console.log, usa console.error
   console.error("Hubo un error");
   console.error(error);

   res.status(400).send("Hubo un error");
 }
};

exports.usuarioAutenticado = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.usuario.id);
    res.json({ usuario });
  } catch (error) {
    res.status(500).json({ msg: "Hubo un error" });
  }
};
