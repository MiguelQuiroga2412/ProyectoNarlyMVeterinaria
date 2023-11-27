const express = require("express");
const router = express.Router();
const tiendaController = require("../controllers/tiendaController");
const { check } = require("express-validator");

// Crea una tienda
// Ruta: /api/tienda
router.post(
  "/",
  [
    check("nombreTienda", "El nombre es obligatorio").not().isEmpty(),
    check("email", "Agrega un email válido").isEmail(),
    check("password", "El password debe ser mínimo de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  tiendaController.crearTienda
);

module.exports = router;
