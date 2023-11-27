const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.crearUsuario = async (req, res) => {
  // Revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { email, password } = req.body;

  try {
    // Revisar que el usuario registrado sea único
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }

    // Buscar el rol por ID 1 (asumiendo que ya existe en la base de datos)
    const rolId = 1; // Cambia esto si el ID del rol puede variar

    // Crear el nuevo usuario
    usuario = new Usuario({
      ...req.body,
      rol: rolId,
    });

    usuario.password = await bcryptjs.hash(password, 10);

    // Guardar usuario en la BD
    await usuario.save();

    // Firmar el JWT
    const payload = {
      usuario: { id: usuario.id },
    };

    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 3600, // 1 hora
      },
      (error, token) => {
        if (error) throw error;

        // Mensaje de confirmación
        res.json({ token });
      }
    );
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};
