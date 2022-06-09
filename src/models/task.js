const mongoose = require('mongoose'); 
const { stringify } = require('querystring');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    evento:String,
    hora:String,
    razon:String,
})

module.exports = mongoose.model('Task', taskSchema); //nombre del modelo, schema del modelo y la base de datos que se va a utilizar
