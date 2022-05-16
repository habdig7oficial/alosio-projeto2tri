const express = require("express")

const app = express()

const porta = process.env.PORT || 7777

const consign = require("consign")

let router = consign().include("./routes").into(app)

module.exports = {app,porta}





