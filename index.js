const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

//crear el servidor
const app = express();

//conectar a la base de datos
conectarDB();

//habilitar cors
app.use(cors());

//Habilite express.json
app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 8000;

//importar rutas
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/tienda", require("./routes/tienda"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/categorias", require("./routes/categorias"));
app.use("/api/productos", require("./routes/productos"));

// arrancar la app
app.listen(PORT, () => {
  console.log(`El servidor está funcionando en el puerto ${PORT} `);
});
