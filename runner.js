let app = require("./config/servidor").app

let porta = require("./config/servidor").porta

let database = require("./config/database")()

/**/


app.listen(porta,function () {
    console.log(`\n\nServidor rodando na porta:${porta}, em http://localhost:${porta}\n`)
})



/*let rota_testes = require("./routes/index_rotas")(app);*/