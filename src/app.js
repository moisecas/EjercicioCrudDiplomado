const express = require('express'); // import express 
const morgan = require('morgan'); // import morgan
const mongoose = require('mongoose'); // import mongoose
const path = require('path'); // import path

const app = express(); // create express app 

//conectando la base de datos
mongoose.connect('mongodb://localhost/crud_mongo').then(db=>console.log('DB is connected')).catch(err=>console.log(err));

//importando rutas
const indexRoutes = require('./routes/index'); 

//middleware 
app.use("/", indexRoutes); // use indexRoutes para todas las rutas de la aplicación 
app.use(morgan('dev')); // use morgan para mostrar los errores en consola
app.use(express.urlencoded({extended: false})); // use express.urlencoded para que los datos sean enviados como formulario

//settings 
app.set('port', process.env.PORT || 3000); // setea el puerto de la aplicación
app.set("views", path.join(__dirname, "views")); // setea la ruta de las vistas, directorio donde se encuentran las vistas
app.set("view engine", "ejs"); // setea el motor de vistas, ejs es el motor de vistas que se utiliza en la aplicación

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})