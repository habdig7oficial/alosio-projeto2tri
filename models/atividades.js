const mongoose = require("mongoose")


const modelo = mongoose.Schema({
    date:Date,
    tipo:String,
    entrega:String,
    diciplina:String,
    instrucoes:String,
    usuarios:String,
    data_de_acesso: {type:Date, default:Date.now}
})


const atividades = mongoose.model("atividades", modelo)



module.exports = atividades