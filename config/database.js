const mongoose = require("mongoose")








const mongo = async function () {
    /*console.log(process.env)*/
    /*const atlas = await mongoose.connect(process.env.SCRIPTBD)*/
    const atlas = await mongoose.connect("mongodb+srv://root:Santinho111@habdig7oficial-cluster.ccizs.mongodb.net/?retryWrites=true&w=majority")
}


module.exports = mongo