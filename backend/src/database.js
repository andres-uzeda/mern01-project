const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/merndatabase";;

mongoose
  .connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos.');
  })
  .catch((err) => {
    console.error('Error al conectarse a la base de datos:', err);
  });