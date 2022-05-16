const dotenv = require("dotenv").config

const mongoose = require("mongoose")








const mongo = async function () {
    console.log(process.env)
    const atlas = await mongoose.connect(process.env.SCRIPTBD)
}


module.exports = mongo