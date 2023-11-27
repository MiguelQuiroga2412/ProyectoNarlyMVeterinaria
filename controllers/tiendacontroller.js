const Tienda = require("../models/Tienda");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.crearTienda = async (req, res) => {
  // Revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    console.log("Errores de validación:", errores.array());
    return res.status(400).json({ errores: errores.array() });
  }

  const { email, password } = req.body;

  try {
    // Revisar que el usuario registrado sea único
    let tienda = await Tienda.findOne({ email });

    if (tienda) {
      console.log("La tienda ya existe:", tienda);
      return res.status(400).json({ msg: "La tienda ya existe" });
    }
    
    // Buscar el rol por ID 1 (asumiendo que ya existe en la base de datos)
    const rolId = 2; // Cambia esto si el ID del rol puede variar

    // Crear el nuevo usuario
    tienda = new Tienda({
      ...req.body,
      rol: rolId,
    });

    tienda.password = await bcryptjs.hash(password, 10);

    // Guardar usuario en la bd
    await tienda.save();
    console.log("Tienda creada:", tienda);

    // Firmar el JWT
    const payload = {
      tienda: { id: tienda.id },
    };

    jwt.sign(
      payload,
      process.env.SECRETA, // Asegúrate de que process.env.SECRETA esté configurada
      {
        expiresIn: 3600, // 1 hora
      },
      (error, token) => {
        if (error) throw error;

        // Mensaje de confirmación
        console.log("Token JWT creado:", token);
        res.json({ token });
      }
    );
  } catch (error) {
    console.error("Error al crear la tienda:", error);
    res.status(500).json({ msg: "Hubo un error al crear la tienda", error: error.message });
  }
};