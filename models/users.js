const mongoose = require("mongoose")


const modelo = mongoose.Schema({
    nome:String,
    email:String,
    senha:String,
    data_de_cadastro: {type:Date, default:Date.now}

})

const usuarios = mongoose.model("usuarios",modelo)

module.exports = usuario
