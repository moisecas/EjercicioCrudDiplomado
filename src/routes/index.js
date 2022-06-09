//rutas de la aplicación 
const { Router } = require('express');

const express = require('express'); 
const router = express.Router();

router.get("/", async(req, res) => {
    const tasks = await task.find(); // busca todas las tareas en la base de datos y las guarda en la variable tasks 
    console.log(tasks); // muestra todas las tareas en consola 
    res.render("index",{tareas:task}); //busca en la carpeta views el archivo index.ejs y lo renderiza
})

const task = require('../models/task');

module.exports = router;