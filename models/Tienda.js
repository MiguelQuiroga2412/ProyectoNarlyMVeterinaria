const mongoose = require("mongoose");

const TiendaSchema = mongoose.Schema({
  nombreTienda: { type: String, required: true, trim: true },
  direccion: { type: String, required: true, trim: true },
  ciudad: { type: String, required: true, trim: true },
  codigoPostal: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  registro: { type: Date, default: Date.now() },
  rol: { type: Number, required: true, trim: true }, // Referencia al modelo de Rol
});

module.exports = mongoose.model("Tienda", TiendaSchema);


